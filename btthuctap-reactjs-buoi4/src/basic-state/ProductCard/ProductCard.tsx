import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  price: number;
  isInStock: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, isInStock }) => {
  return (
    <div className="product-card">
      <div className="image-placeholder">🖼</div>

      <h4>{name}</h4>
      <p className="price">${price.toFixed(2)}</p>

      {isInStock ? (
        <span className="in-stock">In stock</span>
      ) : (
        <span className="out-of-stock">Out of stock</span>
      )}
    </div>
  );
};

export default ProductCard;
