import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk('pizzaCard/fetchingPizzaCard', async (id) => {
  const { data } = await axios.get(`https://644a85e179279846dceb1b8f.mockapi.io/pizzas/${id}`);
  return data;
});

const initialState = {
  item: {},
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

  extraReducers: {
    [fetchPizza.fulfilled]: (state, action) => {
      state.status = 'success';
      state.item = action.payload;
    },
    [fetchPizza.rejected]: (state) => {
      state.status = 'error';
      state.item = {};
    },
    [fetchPizza.pending]: (state) => {
      state.status = 'loading';
      state.item = {};
    },
  },
});

export const { item, status, setItem } = pizzaCardSlice.actions;
export default pizzaCardSlice.reducer;
