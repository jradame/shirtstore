import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Happy Hour Tees</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>
              <button className="details-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
