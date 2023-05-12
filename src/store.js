import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import businessLogicSlice from './slices/businessLogicSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    businessLogic: businessLogicSlice,
  },
});
