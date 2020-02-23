import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import store from "./store";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import App from "./App";
import rrfProps from "./Firebase/rrfConfig";

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <App />
        </>
      </ThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
