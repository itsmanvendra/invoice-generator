import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
import InvoiceForm from "../page/InvoiceForm";
import Navbar from "../components/Navbar";
import { SnackbarProvider } from "notistack";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceNumber: 100,
      editInvoiceData: {},
    };
  }
  //increment invoice number
  increment = () => {
    this.setState((prevState) => ({
      invoiceNumber: prevState.invoiceNumber + 1,
    }));
  };
  //update edit invoice data
  updateEditInvoiceData = (data) => {
    this.setState({ editInvoiceData: data });
  };

  render() {
    return (
      <div className="App d-flex flex-column align-items-center vw-100">
        <SnackbarProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage editInvoiceData={this.updateEditInvoiceData} />
            </Route>
            <Route path="/createInvoice">
              <InvoiceForm
                invoiceNumber={this.state.invoiceNumber}
                autoIncrement={this.increment}
              />
            </Route>
            <Route path="/editInvoice">
              <InvoiceForm
                invoiceNumber={this.state.invoiceNumber}
                autoIncrement={this.increment}
                editInvoiceData={this.state.editInvoiceData}
              />
            </Route>
          </Switch>
        </SnackbarProvider>
      </div>
    );
  }
}

export default App;
