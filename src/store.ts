import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import businessLogicSlice from './slices/businessLogicSlice';
import pizzaCardSlice from './slices/pizzaCardSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    businessLogic: businessLogicSlice,
    pizzaCard: pizzaCardSlice,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
