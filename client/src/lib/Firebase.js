import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDurTfBUJlCk4SPtqpKL44AlORa8YyL-PY",
    authDomain: "botify-automate.firebaseapp.com",
    projectId: "botify-automate",
    storageBucket: "botify-automate.appspot.com",
    messagingSenderId: "1002901027805",
    appId: "1:1002901027805:web:a2379ac0d54608d4b7d434",
    measurementId: "G-PK6EKZPZC0"
}

const firebase = Firebase.initializeApp(config);
const googleAuthProvider = new Firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };