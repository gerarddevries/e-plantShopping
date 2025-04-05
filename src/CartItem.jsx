import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const F_cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let L_total = 0;

    F_cart.forEach(L_productFromCart => {
      L_total += L_productFromCart.quantity * parseFloat(L_productFromCart.cost.substring(1));
    });

    console.log("CartItem.calculateTotalAmount");

    return L_total;
  };

  const handleContinueShopping = (e) => {
    console.log("CartItem.handleContinueShopping");

    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    console.log("CartItem.handleCheckoutShopping");

    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (P_product) => {
    console.log("CartItem.handleIncrement");

    dispatch(updateQuantity({ ...P_product, quantity: P_product.quantity + 1 }));
  };

  const handleDecrement = (P_product) => {
    console.log("CartItem.handleDecrement");

    if (P_product.quantity > 1) {
      dispatch(updateQuantity({ ...P_product, quantity: P_product.quantity - 1 }));
    } else {
      dispatch(removeItem(P_product));    
    }
  };

  const handleRemove = (P_product) => {
    console.log("CartItem.handleRemove");

    dispatch(removeItem(P_product));    
  };

  // calculate total cost based on quantity for an item
  const calculateTotalCost = (P_product) => {
    console.log("CartItem.calculateTotalCost");

    return P_product.quantity * parseFloat(P_product.cost.substring(1));
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {F_cart.map(L_itemCart => (
          <div className="cart-item" key={L_itemCart.name}>
            <img className="cart-item-image" src={L_itemCart.image} alt={L_itemCart.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{L_itemCart.name}</div>
              <div className="cart-item-cost">{L_itemCart.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(L_itemCart)}>-</button>
                <span className="cart-item-quantity-value">{L_itemCart.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(L_itemCart)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(L_itemCart)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(L_itemCart)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
