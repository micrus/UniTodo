import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import rootReducer from "./reducers";
import firebase from "../Firebase/Firebase";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
