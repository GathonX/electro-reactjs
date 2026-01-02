import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Heart, Repeat, Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, addToWishlist } = useCart();

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i);
    }
    return stars;
  };

  return (
    <div className="product group relative mx-0 my-[15px] shadow-[0px_0px_0px_0px_#E4E7ED,0px_0px_0px_1px_#E4E7ED] transition-all duration-200 hover:shadow-[0px_0px_6px_0px_#E4E7ED,0px_0px_0px_2px_#D10024]">
      {/* Product Image */}
      <div className="product-img relative">
        <img src={product.image} alt={product.name} className="w-full" />
        {/* Product Label */}
        {(product.discount || product.oldPrice) && (
          <div className="product-label absolute top-[15px] right-[15px]">
            {product.discount && (
              <span className="sale border-2 border-[#D10024] bg-white text-[#D10024] px-[10px] py-[2px] text-xs inline-block">
                -{product.discount}%
              </span>
            )}
            {product.oldPrice && (
              <span className="new border-2 border-[#D10024] bg-[#D10024] text-white px-[10px] py-[2px] text-xs inline-block ml-1">
                NEW
              </span>
            )}
          </div>
        )}
      </div>

      {/* Product Body */}
      <div className="product-body relative px-[15px] py-[15px] bg-white text-center z-20">
        <p className="product-category uppercase text-xs text-[#8D99AE] mb-0">Category</p>
        <h3 className="product-name uppercase text-sm my-[10px]">
          <Link to={`/product/${product.id}`} className="font-bold text-[#2B2D42] hover:text-[#D10024] transition-colors duration-200">
            {product.name}
          </Link>
        </h3>
        <h4 className="product-price text-[#D10024] text-lg">
          ${product.price.toFixed(2)}{' '}
          {product.oldPrice && (
            <del className="product-old-price text-[70%] font-normal text-[#8D99AE]">
              ${product.oldPrice.toFixed(2)}
            </del>
          )}
        </h4>

        {/* Product Rating */}
        <div className="product-rating relative my-[15px] mx-0 mb-[10px] h-[20px] after:content-[''] after:absolute after:top-1/2 after:left-0 after:right-0 after:-translate-y-1/2 after:h-[1px] after:bg-[#E4E7ED]">
          {renderStars().map((index) => (
            <svg
              key={index}
              className={`relative w-[14px] -mr-[4px] bg-white z-10 inline-block ${
                index < (product.rating || 0) ? 'text-[#ef233c]' : 'text-[#E4E7ED]'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Product Buttons */}
        <div className="product-btns inline-block">
          <button
            className="add-to-wishlist group/btn relative w-[40px] h-[40px] leading-[40px] bg-transparent border-none transition-all duration-200 hover:bg-[#E4E7ED] hover:text-[#D10024] hover:rounded-full"
            onClick={() => addToWishlist(product)}
          >
            <Heart className="w-4 h-4 inline-block" />
            <span className="tooltipp absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[-15px] w-[150px] px-[10px] py-[10px] text-xs leading-[10px] bg-[#1e1f29] text-white uppercase z-10 opacity-0 invisible transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:visible group-hover/btn:-translate-x-1/2 group-hover/btn:translate-y-[-5px]">
              add to wishlist
            </span>
          </button>
          <button className="add-to-compare group/btn relative w-[40px] h-[40px] leading-[40px] bg-transparent border-none transition-all duration-200 hover:bg-[#E4E7ED] hover:text-[#D10024] hover:rounded-full">
            <Repeat className="w-4 h-4 inline-block" />
            <span className="tooltipp absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[-15px] w-[150px] px-[10px] py-[10px] text-xs leading-[10px] bg-[#1e1f29] text-white uppercase z-10 opacity-0 invisible transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:visible group-hover/btn:-translate-x-1/2 group-hover/btn:translate-y-[-5px]">
              add to compare
            </span>
          </button>
          <button className="quick-view group/btn relative w-[40px] h-[40px] leading-[40px] bg-transparent border-none transition-all duration-200 hover:bg-[#E4E7ED] hover:text-[#D10024] hover:rounded-full">
            <Eye className="w-4 h-4 inline-block" />
            <span className="tooltipp absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[-15px] w-[150px] px-[10px] py-[10px] text-xs leading-[10px] bg-[#1e1f29] text-white uppercase z-10 opacity-0 invisible transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:visible group-hover/btn:-translate-x-1/2 group-hover/btn:translate-y-[-5px]">
              quick view
            </span>
          </button>
        </div>
      </div>

      {/* Add to Cart - Slide down on hover */}
      <div className="add-to-cart absolute left-[1px] right-[1px] bottom-[1px] px-[15px] py-[15px] bg-[#1e1f29] text-center translate-y-0 transition-transform duration-200 z-[2] group-hover:translate-y-[100%]">
        <button
          className="add-to-cart-btn group/cart relative h-[40px] px-[30px] bg-[#ef233c] text-white border-2 border-transparent rounded-[40px] uppercase font-bold transition-all duration-200 hover:bg-white hover:text-[#D10024] hover:border-[#D10024] hover:pl-[50px]"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="w-[40px] h-[40px] absolute left-0 top-0 p-2 text-[#D10024] opacity-0 invisible transition-all duration-200 group-hover/cart:opacity-100 group-hover/cart:visible" />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
