import { createSlice } from "@reduxjs/toolkit";
import data from '../../mockData.json';
export const invoicesSlice = createSlice({
    name: "invoiceList",
    initialState: [...data],
    reducers: {
        addInvoice: (state, action) => {
            const newInvoice = action.payload;
            newInvoice.id = newInvoice.invoiceNumber;
            newInvoice.invoiceNumber = `INV-${newInvoice.invoiceNumber}`
            return [...state, newInvoice]
        },
        deleteInvoice: (state, action) => {
            const id = action.payload;
            return state.filter((invoice) => invoice.id !== id);
        },
        editInvoice: (state, action) => {
            const id = action.payload.id;
            const editedInvoice = action.payload;
            return state.map((invoice) => {
                if (invoice.id == id) {
                    // const invoiceNumber = `INV-${editedInvoice.invoiceNumber}`
                    return editedInvoice;
                } else {
                    return invoice;
                }
            });
        }
    }
});

//this is for dispatch
export const { addInvoice, deleteInvoice, editInvoice } = invoicesSlice.actions;

//this is for configure Store
export default invoicesSlice.reducer;