// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz_8bxkX7nJeEEHnAA4JTz1vVGGSQqQDA",
    authDomain: "ms-auth-506b1.firebaseapp.com",
    projectId: "ms-auth-506b1",
    storageBucket: "ms-auth-506b1.appspot.com",
    messagingSenderId: "678740960969",
    appId: "1:678740960969:web:79d919bb974667b13f8f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;