import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import HomePage from "./js/containers/index";
import { Provider } from "mobx-react";
import rootStore from "./store";
import AppRouter from "./route";
import { HashRouter } from "react-router-dom";

import { onPatch } from "mobx-state-tree";

import makeInspectable from "mobx-devtools-mst";
//import "react-table/react-table.css";

const store = rootStore.create({});

onPatch(store, patch => {
  console.log(patch);
});
makeInspectable(store);

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>
);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
