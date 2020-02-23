import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";
import store from "../store/index";
import firebase from "./Firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

export default rrfProps;
