import searchSlice from "./search-slice";


const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer:{search:searchSlice.reducer}
})