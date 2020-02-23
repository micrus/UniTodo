import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyAYW6R5rbc4fN6BLPJ-ya6jy6--m69VTLY",
  authDomain: "unitodo-a6bbb.firebaseapp.com",
  databaseURL: "https://unitodo-a6bbb.firebaseio.com",
  projectId: "unitodo-a6bbb",
  storageBucket: "unitodo-a6bbb.appspot.com",
  messagingSenderId: "1089925775120",
  appId: "1:1089925775120:web:b94a317704fedc10052f95"
};

if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}

firebase.firestore(); // <- needed if using firestore

export default firebase;
