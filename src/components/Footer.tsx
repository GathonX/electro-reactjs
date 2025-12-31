import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      {/* Top Footer */}
      <div className="section bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Us */}
            <div className="footer">
              <h3 className="footer-title text-[#2B2D42] uppercase font-bold mb-4">About Us</h3>
              <p className="text-[#8D99AE] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
              </p>
              <ul className="footer-links space-y-2">
                <li>
                  <a href="#" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    <i className="fa fa-map-marker mr-2"></i>1734 Stonecoal Road
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    <i className="fa fa-phone mr-2"></i>+021-95-51-84
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    <i className="fa fa-envelope-o mr-2"></i>email@email.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer">
              <h3 className="footer-title text-[#2B2D42] uppercase font-bold mb-4">Categories</h3>
              <ul className="footer-links space-y-2">
                <li>
                  <Link to="/hot-deals" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Hot deals
                  </Link>
                </li>
                <li>
                  <Link to="/laptops" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link to="/smartphones" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link to="/cameras" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Cameras
                  </Link>
                </li>
                <li>
                  <Link to="/accessories" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="footer">
              <h3 className="footer-title text-[#2B2D42] uppercase font-bold mb-4">Information</h3>
              <ul className="footer-links space-y-2">
                <li>
                  <Link to="/about" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Orders and Returns
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service */}
            <div className="footer">
              <h3 className="footer-title text-[#2B2D42] uppercase font-bold mb-4">Service</h3>
              <ul className="footer-links space-y-2">
                <li>
                  <Link to="/account" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    View Cart
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/track" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Track My Order
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-[#8D99AE] hover:text-[#D10024] transition-colors">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div id="bottom-footer" className="section bg-[#1E1F29] py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <ul className="footer-payments flex justify-center gap-4 mb-4">
              <li>
                <a href="#" className="text-white text-2xl hover:text-[#D10024] transition-colors">
                  <i className="fa fa-cc-visa"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-2xl hover:text-[#D10024] transition-colors">
                  <i className="fa fa-credit-card"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-2xl hover:text-[#D10024] transition-colors">
                  <i className="fa fa-cc-paypal"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-2xl hover:text-[#D10024] transition-colors">
                  <i className="fa fa-cc-mastercard"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-2xl hover:text-[#D10024] transition-colors">
                  <i className="fa fa-cc-discover"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-2xl hover:text-[#D10024] transition-colors">
                  <i className="fa fa-cc-amex"></i>
                </a>
              </li>
            </ul>
            <span className="copyright text-[#8D99AE] text-sm">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <i className="fa fa-heart-o text-[#D10024]" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank" className="text-[#D10024] hover:underline">
                Colorlib
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
