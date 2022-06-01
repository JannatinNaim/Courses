import { ADD_ITEM, REMOVE_ITEM, DELETE_ITEM, UPDATE_ITEM_QUANTITY } from "./actionTypes/cartActions";

const initialState = [];

export const cartReducer = (cart = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let productToAdd = cart.find((item) => item.id === action.payload.id);

      if (!productToAdd) {
        productToAdd = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        };
        return [...cart, productToAdd];
      }

      return cart.map((product) => {
        if (product.id === productToAdd.id) {
          product.quantity += 1;
        }
        return product;
      });

    case REMOVE_ITEM:
      let productToRemove = cart.find((item) => item.id === action.payload.id);

      return cart.map((product) => {
        if (product.id === productToRemove.id) {
          productToRemove.quantity -= 1;
        }
        return product;
      });

    case DELETE_ITEM:
      return cart.filter((item) => item.id !== action.payload.id);

    case UPDATE_ITEM_QUANTITY:
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });

    default:
      return cart;
  }
};
