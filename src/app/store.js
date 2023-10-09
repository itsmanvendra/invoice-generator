import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "../features/invoices/invoicesSlice"
import copyInvoiceReducer from "../features/invoices/copyinvoiceSlice"

export default configureStore({
    reducer: {
        invoices: invoicesReducer,
        copyInvoice: copyInvoiceReducer,
    },
});