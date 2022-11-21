import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    searchData: [],
    isLoading: false
  },
  reducers: {
    searchItems(state, action) {
      state.searchData = action.payload.searchData;
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    }
  }
});

export const searchAction = searchSlice.actions;

export default searchSlice;
