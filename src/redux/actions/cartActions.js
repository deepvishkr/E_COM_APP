
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: productId, // The id of the product to remove from the cart
    };
  };
  
export const decrementQuantity = (productId) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: productId, // The id of the product to decrement the quantity
    };
  };
  