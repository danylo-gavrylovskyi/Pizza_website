import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryIndex: 0,
  sortCriteriaIndex: 0,
  sortCriteriaName: 'rating',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategoryIndex(state, action) {
      state.activeCategoryIndex = action.payload;
    },
    setCriteriaIndex(state, action) {
      state.sortCriteriaIndex = action.payload;
    },
    setCriteriaName(state, action) {
      state.sortCriteriaName = action.payload;
    },
  },
});

export const { setActiveCategoryIndex, setCriteriaIndex, setCriteriaName } = filterSlice.actions;

export default filterSlice.reducer;
