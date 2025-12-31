import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Laptops');
  const [topSellingTab, setTopSellingTab] = useState('Laptops');

  const categories = ['Laptops', 'Smartphones', 'Cameras', 'Accessories'];

  const filteredProducts = products.filter(p => p.category === activeTab);
  const topSellingProducts = products.filter(p => p.category === topSellingTab);

  return (
    <div>
      {/* Shop Section */}
      <div className="py-12 bg-grey-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img src="/img/shop01.png" alt="Laptops" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Laptop<br />Collection
                </h3>
                <Link to="/laptops" className="inline-flex items-center gap-2 text-white hover:text-primary transition">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img src="/img/shop03.png" alt="Accessories" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Accessories<br />Collection
                </h3>
                <Link to="/accessories" className="inline-flex items-center gap-2 text-white hover:text-primary transition">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img src="/img/shop02.png" alt="Cameras" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Cameras<br />Collection
                </h3>
                <Link to="/cameras" className="inline-flex items-center gap-2 text-white hover:text-primary transition">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Products Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-header uppercase">New Products</h3>
            <div className="flex gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 uppercase font-medium transition ${
                    activeTab === cat
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-header hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Hot Deal Section */}
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/img/hotdeal.png)' }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="flex justify-center gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold">02</h3>
                <span className="text-sm uppercase">Days</span>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold">10</h3>
                <span className="text-sm uppercase">Hours</span>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold">34</h3>
                <span className="text-sm uppercase">Mins</span>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold">60</h3>
                <span className="text-sm uppercase">Secs</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold uppercase mb-4">Hot Deal This Week</h2>
            <p className="text-xl mb-8">New Collection Up to 50% OFF</p>
            <Link
              to="/hot-deals"
              className="inline-block px-8 py-3 bg-white text-primary rounded-full font-bold uppercase hover:bg-grey-light transition"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>

      {/* Top Selling Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-header uppercase">Top Selling</h3>
            <div className="flex gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setTopSellingTab(cat)}
                  className={`px-4 py-2 uppercase font-medium transition ${
                    topSellingTab === cat
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-header hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {topSellingProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
