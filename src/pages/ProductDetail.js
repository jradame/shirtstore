import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-detail">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="desc">{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
