import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "../features/invoices/invoicesSlice"

export default configureStore({
    reducer: {
        invoices : invoicesReducer,
    },
});