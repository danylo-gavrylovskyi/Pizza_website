import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type filterSliceState = {
  activeCategoryIndex: number;
  sortCriteriaIndex: number;
  sortCriteriaName: string;
  inputValue: string;
  types: string[];
  sizes: number[];
};

const initialState: filterSliceState = {
  activeCategoryIndex: 0,
  sortCriteriaIndex: 0,
  sortCriteriaName: 'rating',
  inputValue: '',
  types: ['thin', 'traditional'],
  sizes: [26, 30, 40],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategoryIndex(state, action: PayloadAction<number>) {
      state.activeCategoryIndex = action.payload;
    },
    setCriteriaIndex(state, action: PayloadAction<number>) {
      state.sortCriteriaIndex = action.payload;
    },
    setCriteriaName(state, action: PayloadAction<string>) {
      state.sortCriteriaName = action.payload;
    },

    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const { setActiveCategoryIndex, setCriteriaIndex, setCriteriaName, setInputValue } =
  filterSlice.actions;

export default filterSlice.reducer;
