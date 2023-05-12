import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import businessLogicSlice from './slices/businessLogicSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    businessLogic: businessLogicSlice,
  },
});
