import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-deals" element={<Home />} />
          <Route path="/laptops" element={<Home />} />
          <Route path="/smartphones" element={<Home />} />
          <Route path="/cameras" element={<Home />} />
          <Route path="/accessories" element={<Home />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
