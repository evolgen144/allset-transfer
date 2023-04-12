import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB52uncC8WKj_2eqVytiPMlZJFVKnZ-96Y",
    authDomain: "allset-2f118.firebaseapp.com",
    databaseURL: "https://allset-2f118-default-rtdb.firebaseio.com",
    projectId: "allset-2f118",
    storageBucket: "allset-2f118.appspot.com",
    messagingSenderId: "658675433309",
    appId: "1:658675433309:web:81dfc9d5ea2bb7814172b4",
    measurementId: "G-5PVHCJMD4F"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();