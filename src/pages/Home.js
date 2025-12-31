import React from 'react';
import products from '../data/products';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>T-Shirt Store 🧢👕</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
