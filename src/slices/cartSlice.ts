import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../@types/generalTypes';
import { WritableDraft } from 'immer/dist/types/types-external';

type cartSliceState = {
  cartItems: Item[];
};

const initialState: cartSliceState = {
  cartItems: [],
};

const checkForItem = (state: WritableDraft<cartSliceState>, action: PayloadAction<Item>) => {
  return state.cartItems.find(
    (item) =>
      item.id === action.payload.id &&
      item.activeTypeIndex === action.payload.activeTypeIndex &&
      item.activeSizeIndex === action.payload.activeSizeIndex,
  );
};

const filtrationItems = (state: WritableDraft<cartSliceState>, action: PayloadAction<Item>) => {
  return state.cartItems.filter((item) => item.props !== action.payload.props);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Item>) {
      const findedItem = checkForItem(state, action);
      findedItem ? findedItem.count++ : state.cartItems.push({ ...action.payload, count: 1 });
    },

    removeFromCart(state, action) {
      state.cartItems = filtrationItems(state, action);
    },

    removeOneUnit(state, action) {
      const findedItem = checkForItem(state, action);
      if (findedItem) {
        findedItem.count <= 1
          ? (state.cartItems = filtrationItems(state, action))
          : findedItem.count--;
      }
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, removeOneUnit, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
