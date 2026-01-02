import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import ProductWidget from '../components/ProductWidget';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Laptops');
  const [topSellingTab, setTopSellingTab] = useState('Laptops');

  const slider1Ref = useRef<Slider>(null);
  const slider2Ref = useRef<Slider>(null);
  const slider3Ref = useRef<Slider>(null);

  const categories = ['Laptops', 'Smartphones', 'Cameras', 'Accessories'];

  const filteredProducts = products.filter(p => p.category === activeTab);
  const topSellingProducts = products.filter(p => p.category === topSellingTab);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const widgetSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    vertical: false,
    adaptiveHeight: false,
  };

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
                  Shop now <ArrowRight className="w-4 h-4" />
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
                  Shop now <ArrowRight className="w-4 h-4" />
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
                  Shop now <ArrowRight className="w-4 h-4" />
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
            <h3 className="text-3xl font-bold text-[#2B2D42] uppercase">New Products</h3>
            <div className="flex gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 uppercase font-medium transition ${
                    activeTab === cat
                      ? 'text-[#D10024] border-b-2 border-[#D10024]'
                      : 'text-[#2B2D42] hover:text-[#D10024]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Slider {...sliderSettings}>
            {filteredProducts.map(product => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Hot Deal Section */}
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/img/hotdeal.png)' }}>
        <div className="absolute inset-0 bg-[#D10024]/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="flex justify-center gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold">02</h3>
                <p className="text-sm uppercase mt-2">Days</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold">10</h3>
                <p className="text-sm uppercase mt-2">Hours</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold">34</h3>
                <p className="text-sm uppercase mt-2">Mins</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold">60</h3>
                <p className="text-sm uppercase mt-2">Secs</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-2 uppercase">Hot Deal This Week</h2>
            <p className="text-xl mb-4">New Collection Up to 50% OFF</p>
            <button className="bg-white text-[#D10024] px-8 py-3 rounded-full uppercase font-bold hover:bg-[#2B2D42] hover:text-white transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Top Selling Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-[#2B2D42] uppercase">Top Selling</h3>
            <div className="flex gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setTopSellingTab(cat)}
                  className={`px-4 py-2 uppercase font-medium transition ${
                    topSellingTab === cat
                      ? 'text-[#D10024] border-b-2 border-[#D10024]'
                      : 'text-[#2B2D42] hover:text-[#D10024]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Slider {...sliderSettings}>
            {topSellingProducts.map(product => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Product Widgets Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-[#2B2D42] uppercase">Top selling</h4>
                <div className="products-slick-nav flex gap-[5px]">
                  <button
                    className="slick-prev slick-arrow"
                    onClick={() => slider1Ref.current?.slickPrev()}
                  />
                  <button
                    className="slick-next slick-arrow"
                    onClick={() => slider1Ref.current?.slickNext()}
                  />
                </div>
              </div>
              <div className="products-widget-slick">
                <Slider ref={slider1Ref} {...{ ...widgetSliderSettings, arrows: false }}>
                  <div>
                    {products.slice(6, 9).map(product => (
                      <ProductWidget key={product.id} product={product} />
                    ))}
                  </div>
                  <div>
                    {products.slice(0, 3).map(product => (
                      <ProductWidget key={product.id} product={product} />
                    ))}
                  </div>
                </Slider>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-[#2B2D42] uppercase">Top selling</h4>
                <div className="products-slick-nav flex gap-[5px]">
                  <button
                    className="slick-prev slick-arrow"
                    onClick={() => slider2Ref.current?.slickPrev()}
                  />
                  <button
                    className="slick-next slick-arrow"
                    onClick={() => slider2Ref.current?.slickNext()}
                  />
                </div>
              </div>
              <div className="products-widget-slick">
                <Slider ref={slider2Ref} {...{ ...widgetSliderSettings, arrows: false }}>
                  <div>
                    {products.slice(3, 6).map(product => (
                      <ProductWidget key={product.id} product={product} />
                    ))}
                  </div>
                  <div>
                    {products.slice(6, 9).map(product => (
                      <ProductWidget key={product.id} product={product} />
                    ))}
                  </div>
                </Slider>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-[#2B2D42] uppercase">Top selling</h4>
                <div className="products-slick-nav flex gap-[5px]">
                  <button
                    className="slick-prev slick-arrow"
                    onClick={() => slider3Ref.current?.slickPrev()}
                  />
                  <button
                    className="slick-next slick-arrow"
                    onClick={() => slider3Ref.current?.slickNext()}
                  />
                </div>
              </div>
              <div className="products-widget-slick">
                <Slider ref={slider3Ref} {...{ ...widgetSliderSettings, arrows: false }}>
                  <div>
                    {products.slice(0, 3).map(product => (
                      <ProductWidget key={product.id} product={product} />
                    ))}
                  </div>
                  <div>
                    {products.slice(3, 6).map(product => (
                      <ProductWidget key={product.id} product={product} />
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
