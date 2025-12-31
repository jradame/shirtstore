import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return <div className="cart-page"><h2>Your cart is empty 🛍️</h2></div>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={clearCart} className="clear-btn">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
