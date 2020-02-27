import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider} from "styled-components";
import styled from "styled-components";
import { Provider } from "react-redux";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import store from "./store";
import Loader from "./components/Loader/Loader";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import App from "./App";
import rrfProps from "./Firebase/rrfConfig";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-background);
  padding: 3rem;`;


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return (
    <ThemeProvider theme={theme}>
    <>
      <Wrapper>
        <Loader />
      </Wrapper>
      <GlobalStyles />
    </>
  </ThemeProvider>);
  return children;
}



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            
            <ContentWrapper>
            <App />
            </ContentWrapper>
          </>
        </ThemeProvider>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
