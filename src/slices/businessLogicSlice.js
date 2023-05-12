import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const pizzasFetch = createAsyncThunk(
  'businessLogic/pizzasFetching',
  async ({ activeCategoryIndex, sortCriteriaIndex, sortCriteriaName }) => {
    const { data } = await axios.get(
      `https://644a85e179279846dceb1b8f.mockapi.io/pizzas?${
        activeCategoryIndex > 0 ? `category=${activeCategoryIndex}` : ''
      }&sortBy=${sortCriteriaName}&order=${sortCriteriaIndex % 2 === 0 ? 'desc' : 'asc'}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  fetchStatus: 'loading',
};

const businessLogicSlice = createSlice({
  name: 'businessLogic',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [pizzasFetch.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [pizzasFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [pizzasFetch.rejected]: (state) => {
      state.status = 'failed';
      state.items = [];
    },
  },
});

export const { items, setItems, state } = businessLogicSlice.actions;
export default businessLogicSlice.reducer;
