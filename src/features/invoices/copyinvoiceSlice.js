import { createSlice } from "@reduxjs/toolkit";

export const copyInvoiceSlice = createSlice({
    name: "copyInvoice",
    initialState: {
        id: "",
        invoiceNumber: "",
        currency: "$",
        dateOfIssue: "",
        billTo: "",
        billFrom: "",
        billToAddress: "",
        billFromAddress: "",
        billToEmail: "",
        billFromEmail: "",
        notes: "",
        total: "0.00",
        subTotal: "0.00",
        items: [],
        taxRate: "",
        taxAmmount: "0.00",
        discountRate: "",
        discountAmmount: "0.00",
        currentDate: "",

    },
    reducers: {
        copyInvoice: (state, action) => {
            
            state = action.payload;
            return state;
        },
        editInvoice: (state, action) => {
            
            const data = {...action.payload, type: "edit"};

            state = data;
            return state;
        },

        resetInvoice: (state) => {
            console.log("reset");
            state = {
                id: "",
                invoiceNumber: "",
                currency: "$",
                dateOfIssue: "",
                billTo: "",
                billFrom: "",
                billToAddress: "",
                billFromAddress: "",
                billToEmail: "",
                billFromEmail: "",
                notes: "",
                total: "0.00",
                subTotal: "0.00",
                items: [],
                taxRate: "",
                taxAmmount: "0.00",
                discountRate: "",
                discountAmmount: "0.00",
                currentDate: "",
            };
            return state;
        }

    }
});

//this is for dispatch
export const { copyInvoice, editInvoice, resetInvoice } = copyInvoiceSlice.actions;

//this is for configure Store
export default copyInvoiceSlice.reducer;