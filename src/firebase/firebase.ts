import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCPJ0h3TqvOv687rXYVKfAE_zs7ckjpevc",
    authDomain: "pinguidraw-app.firebaseapp.com",
    databaseURL: "https://pinguidraw-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pinguidraw-app",
    storageBucket: "pinguidraw-app.appspot.com",
    messagingSenderId: "737384699412",
    appId: "1:737384699412:web:ddaade810fbf584d293901",
    measurementId: "G-M2G79GXCYK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);