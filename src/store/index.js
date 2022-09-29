import searchSlice from "./search-slice"; 

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{search:searchSlice.reducer}
})