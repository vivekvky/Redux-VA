
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { SearchContextProvider } from "./store/search-context";
import { Provider } from "react-redux";
import { store } from "./store";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <SearchContextProvider>
      <Router>
        <App />
      </Router>
    </SearchContextProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
