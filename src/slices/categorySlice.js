import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveCategoryIndex(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setActiveCategoryIndex } = categorySlice.actions;

export default categorySlice.reducer;
