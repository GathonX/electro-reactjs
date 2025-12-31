import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, addToWishlist } = useCart();

  const renderStars = (rating: number = 0) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fa fa-star text-[#D10024]"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o text-[#D10024]"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="product">
      <div className="product-img relative overflow-hidden group">
        <img src={product.image} alt={product.name} className="w-full" />
        {(product.discount || product.oldPrice) && (
          <div className="product-label absolute top-4 left-4">
            {product.discount && (
              <span className="sale bg-[#D10024] text-white px-2 py-1 text-xs font-bold uppercase mr-1">{-product.discount}%</span>
            )}
            {product.oldPrice && (
              <span className="new bg-[#2B2D42] text-white px-2 py-1 text-xs font-bold uppercase">NEW</span>
            )}
          </div>
        )}
      </div>
      <div className="product-body bg-white p-4">
        <p className="product-category text-[#8D99AE] uppercase text-xs mb-2">Category</p>
        <h3 className="product-name mb-2">
          <Link to={`/product/${product.id}`} className="text-[#2B2D42] font-bold hover:text-[#D10024] transition-colors">
            {product.name}
          </Link>
        </h3>
        <h4 className="product-price text-[#D10024] font-bold text-lg mb-2">
          ${product.price.toFixed(2)}{' '}
          {product.oldPrice && (
            <del className="product-old-price text-[#8D99AE] font-normal text-sm ml-2">
              ${product.oldPrice.toFixed(2)}
            </del>
          )}
        </h4>
        <div className="product-rating mb-3 flex gap-0.5">{renderStars(product.rating)}</div>
        <div className="product-btns flex gap-2">
          <button
            className="add-to-wishlist bg-[#E4E7ED] text-[#2B2D42] p-2 rounded hover:bg-[#D10024] hover:text-white transition-colors relative group"
            onClick={() => addToWishlist(product)}
          >
            <i className="fa fa-heart-o"></i>
            <span className="tooltipp absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2B2D42] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              add to wishlist
            </span>
          </button>
          <button className="add-to-compare bg-[#E4E7ED] text-[#2B2D42] p-2 rounded hover:bg-[#D10024] hover:text-white transition-colors relative group">
            <i className="fa fa-exchange"></i>
            <span className="tooltipp absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2B2D42] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              add to compare
            </span>
          </button>
          <button className="quick-view bg-[#E4E7ED] text-[#2B2D42] p-2 rounded hover:bg-[#D10024] hover:text-white transition-colors relative group">
            <i className="fa fa-eye"></i>
            <span className="tooltipp absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2B2D42] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              quick view
            </span>
          </button>
        </div>
      </div>
      <div className="add-to-cart">
        <button
          className="add-to-cart-btn w-full bg-[#D10024] text-white py-3 uppercase font-bold hover:bg-[#2B2D42] transition-colors"
          onClick={() => addToCart(product)}
        >
          <i className="fa fa-shopping-cart mr-2"></i> add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
