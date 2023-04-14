import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


/* Add own firebase account keys */
const firebaseConfig = {
    apiKey: null,
    authDomain: null,
    databaseURL: null,
    projectId: null,
    storageBucket: null,
    messagingSenderId: null,
    appId: null,
    measurementId: null
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();