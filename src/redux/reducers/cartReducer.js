
import { ADD_TO_CART, DECREMENT_QUANTITY, REMOVE_FROM_CART} from "../actions/cartActions";


const initialState = {
  cartItems: [], // Initialize as an empty array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, increase the quantity by creating a new object
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) =>
            index === existingProductIndex
              ? { ...item, quantity: item.quantity + 1 } // Create a new item object
              : item
          ),
        };
      } else {
        // If the product doesn't exist, add it with quantity 1
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, quantity: 1 },
          ],
        };
      }

    case DECREMENT_QUANTITY:
      const updatedCartItemsAfterDecrement = state.cartItems.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          // Decrement quantity if it's greater than 1 by creating a new object
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItemsAfterDecrement,
      };

    case REMOVE_FROM_CART:
      // Remove the item from the cart by filtering the array
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
