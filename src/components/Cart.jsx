import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementQuantity, removeFromCart } from '../redux/actions/cartActions';
import '../index.css';


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems); // Get cartItems from the Redux state
    const dispatch = useDispatch();
  
    // Handler for decrementing item quantity
  const handleDecrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity === 1) {
      // If the quantity is 1, remove the item from the cart
      dispatch(removeFromCart(id));
    } else {
      // Otherwise, just decrement the quantity
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <div className="cart">
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.images} alt={item.title} style={{ width: '100px', height: '100px' }} />
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleDecrementQuantity(item.id)}>
                  {item.quantity === 1 ? 'Remove' : 'Decrease Quantity'}
                </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default Cart;
