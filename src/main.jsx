import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import { store } from "./store";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/addon/hint/anyword-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";

import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";

import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "codemirror/addon/hint/xml-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/css-hint";

// console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
