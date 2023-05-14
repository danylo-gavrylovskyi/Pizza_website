import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '../@types/generalTypes';

type pizzaCardState = {
  item: Item;
  status: 'loading' | 'success' | 'error';
};

export const fetchPizza = createAsyncThunk<Item, number>(
  'pizzaCard/fetchingPizzaCard',
  async (id) => {
    const { data } = await axios.get(`https://644a85e179279846dceb1b8f.mockapi.io/pizzas/${id}`);
    return data;
  },
);

const initialState: pizzaCardState = {
  item: {
    id: '',
    imageUrl: '',
    title: '',
    types: [],
    sizes: [],
    price: 0,
    category: 0,
    rating: 0,
    ingredients: '',
    count: 0,
    activeTypeIndex: 0,
  },
  status: 'loading',
};

const pizzaCardSlice = createSlice({
  name: 'pizzaCard',
  initialState,
  reducers: {
    setItem(state, action) {
      state.item = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.status = 'success';
      state.item = action.payload;
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = 'error';
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = 'loading';
    });
  },
});

export const { setItem } = pizzaCardSlice.actions;
export default pizzaCardSlice.reducer;
