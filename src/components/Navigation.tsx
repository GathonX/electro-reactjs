import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav id="navigation" className="bg-[#D10024]">
      <div className="container mx-auto px-4">
        <div id="responsive-nav">
          <ul className="main-nav flex items-center justify-start py-4 space-x-8">
            <li className="active">
              <Link to="/" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link to="/hot-deals" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Hot Deals
              </Link>
            </li>
            <li>
              <Link to="/categories" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/laptops" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/smartphones" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Smartphones
              </Link>
            </li>
            <li>
              <Link to="/cameras" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Cameras
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="text-white uppercase font-bold hover:opacity-80 transition-opacity">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
