import React, { Component } from "react";
import WordRowColumn from "./components/WordRowColumn";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import store from "./store";

import { getWords } from "./actions/dictActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddUpdateForm from "./components/AddUpdateForm";

class App extends Component {
  componentDidMount() {
    store.dispatch(getWords());
  }
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <div className="container">
          <AddUpdateForm />
          <WordRowColumn />
        </div>
      </Provider>
    );
  }
}

export default App;
