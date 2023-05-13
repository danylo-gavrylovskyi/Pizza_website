import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryIndex: 0,
  sortCriteriaIndex: 0,
  sortCriteriaName: 'rating',
  inputValue: '',
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

    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const {
  setActiveCategoryIndex,
  setCriteriaIndex,
  setCriteriaName,
  setInputValue,
  inputValue,
} = filterSlice.actions;

export default filterSlice.reducer;
