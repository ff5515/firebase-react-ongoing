
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";



var app = firebase.initializeApp({ 
  apiKey: "AIzaSyAk8hDI9hSpTkdOxbS3KNbEUBe2NQSjguY",
  authDomain: "authreglog-2efcc.firebaseapp.com",
  databaseURL: "https://authreglog-2efcc.firebaseio.com",
  projectId: "authreglog-2efcc",
  storageBucket: "authreglog-2efcc.appspot.com",
  messagingSenderId: "305123296035",
  appId: "1:305123296035:web:469d3ab0fecae16c6f8296"
 });
 

const auth = app.auth();
const database = app.database();

export {app, auth, database}



