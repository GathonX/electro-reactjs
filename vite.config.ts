import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

// Plugin personnalisé pour injecter les variables d'environnement dans index.html
function injectEnvToHtml() {
  return {
    name: 'inject-env-to-html',
    transformIndexHtml: {
      order: 'pre' as const,
      handler(html: string) {
        // Obtenir l'ID de tracking depuis les variables d'environnement
        const trackingId = process.env.VITE_GA_TRACKING_ID || 'G-CYH5VGVLTS';
        
        // Remplacer le placeholder dans index.html
        return html.replace('__GA_TRACKING_ID__', trackingId);
      },
    },
  };
}

export default defineConfig(({ mode }) => {
  // FORCER MODE PRODUCTION si NODE_ENV=production
  const isProduction = process.env.NODE_ENV === 'production';
  const finalMode = isProduction ? 'production' : mode;

  return {
  mode: finalMode,
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500, // Plus strict pour forcer de meilleurs chunks
    rollupOptions: {
      output: {
        // ✅ FORCE HASH pour invalidation cache automatique
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',

        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom'],
          
          // Router 
          'router': ['react-router-dom'],
          
          // Large UI libraries
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
          
          // Icons
          'icons': ['lucide-react'],
          
          // Query
          'query': ['@tanstack/react-query'],
          
          // Forms
          'forms': ['react-hook-form', 'zod'],
          
          // Utils
          'utils': ['clsx', 'class-variance-authority', 'date-fns'],
          
          // HTTP
          'http': ['axios']
        }
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'], // Remove console calls
        dead_code: true,
        unused: true,
      },
      mangle: {
        toplevel: true, // Plus aggressif
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
    fs: {
      strict: false,
    },
    historyApiFallback: true,
    cors: true,
    allowedHosts: ['dev.pixel-rise.com', 'app.pixel-rise.com', 'localhost'],
    hmr: true,
    middlewareMode: false,
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
        if (req.url?.endsWith('.ts') || req.url?.endsWith('.tsx')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        }
        next();
      });
    },
    proxy: {
      "/storage": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(), finalMode === "development" && componentTagger(), injectEnvToHtml()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
});
