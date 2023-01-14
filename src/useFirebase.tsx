import { initializeApp } from "firebase/app";

export function useFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBJfjqQ7KhHqUuvnneXKb_awLl9ppD_cH0",
    authDomain: "nli-db-304ae.firebaseapp.com",
    projectId: "nli-db-304ae",
    storageBucket: "nli-db-304ae.appspot.com",
    messagingSenderId: "736154692971",
    appId: "1:736154692971:web:ceb254ebbbb78e512bf02e",
    measurementId: "G-Z30M2XFJWG",
  };
  const app = initializeApp(firebaseConfig);
  return app;
}
