import axios from 'axios';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from '../@types/generalTypes';

type PizzasFetchArgs = {
  activeCategoryIndex: number;
  sortCriteriaIndex: number;
  sortCriteriaName: string;
};

type businessLogicState = {
  items: Item[];
  status: 'loading' | 'success' | 'error';
};

export const pizzasFetch = createAsyncThunk<Item[], PizzasFetchArgs>(
  'businessLogic/pizzasFetching',
  async ({ activeCategoryIndex, sortCriteriaIndex, sortCriteriaName }) => {
    const { data } = await axios.get<Item[]>(
      `https://644a85e179279846dceb1b8f.mockapi.io/pizzas?${
        activeCategoryIndex > 0 ? `category=${activeCategoryIndex}` : ''
      }&sortBy=${sortCriteriaName}&order=${sortCriteriaIndex % 2 === 0 ? 'desc' : 'asc'}`,
    );
    return data;
  },
);

const initialState: businessLogicState = {
  items: [],
  status: 'loading',
};

const businessLogicSlice = createSlice({
  name: 'businessLogic',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(pizzasFetch.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(pizzasFetch.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(pizzasFetch.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = businessLogicSlice.actions;
export default businessLogicSlice.reducer;
