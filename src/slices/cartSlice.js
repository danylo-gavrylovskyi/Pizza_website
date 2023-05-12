import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const checkForItem = (state, action) => {
  return state.cartItems.find(
    (item) =>
      item.id === action.payload.id &&
      item.activeTypeIndex === action.payload.activeTypeIndex &&
      item.activeSizeIndex === action.payload.activeSizeIndex,
  );
};

const filtrationItems = (state, action) => {
  return state.cartItems.filter((item) => item.props !== action.payload.props);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findedItem = checkForItem(state, action);
      findedItem ? findedItem.count++ : state.cartItems.push({ ...action.payload, count: 1 });
    },

    removeFromCart(state, action) {
      state.cartItems = filtrationItems(state, action);
    },

    removeOneUnit(state, action) {
      const findedItem = checkForItem(state, action);
      findedItem.count <= 1
        ? (state.cartItems = filtrationItems(state, action))
        : findedItem.count--;
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, cartItems, removeOneUnit, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
