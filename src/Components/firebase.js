// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ2gv7xOTu5oLPeadDxe4mEboTc3ivZgU",
  authDomain: "instaclone-58736.firebaseapp.com",
  projectId: "instaclone-58736",
  storageBucket: "instaclone-58736.appspot.com",
  messagingSenderId: "925500626607",
  appId: "1:925500626607:web:4044ab60158c2b5b40265a",
  measurementId: "G-4MZNW3XQE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);