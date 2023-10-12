import { createSlice, current } from "@reduxjs/toolkit";
import data from '../../mockData.json';
import { actions } from "react-table";
export const invoicesSlice = createSlice({
    name: "invoiceList",
    initialState: {
        data: [...data],
        deletedInvoices: [],
    },
    reducers: {
        addInvoice: (state, action) => {
            const newInvoice = action.payload;
            newInvoice.id = newInvoice.invoiceNumber;
            newInvoice.invoiceNumber = `INV-${newInvoice.invoiceNumber}`
            console.log(newInvoice)
            state.data.push(newInvoice);
        },
        deleteInvoice: (state, action) => {
            const id = action.payload;
            state.data = state.data.filter((invoice) =>invoice.id !== id);
        },
        editInvoice: (state, action) => {
            const id = action.payload.id;
            const editedInvoice = action.payload;
            state.data =  state.data.map((invoice) => {
                if (invoice.id == id) {
                    // const invoiceNumber = `INV-${editedInvoice.invoiceNumber}`
                    return editedInvoice;
                } else {
                    return invoice;
                }
            });
        },
        deleteAllInvoices: (state, action) => {
            state.deletedInvoices = state.data;
            state.data = [];
        },
        undoDeleteAllInvoices: (state) => {
            state.data = state.deletedInvoices;
        }
    }
});

//this is for dispatch
export const { addInvoice, deleteInvoice, editInvoice, deleteAllInvoices, undoDeleteAllInvoices } = invoicesSlice.actions;

//this is for configure Store
export default invoicesSlice.reducer;