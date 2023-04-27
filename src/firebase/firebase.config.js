// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvfyJrkiXLObRd8TIM5vcuoiDw6MOFjkA",
  authDomain: "the-news-dragon-7099f.firebaseapp.com",
  projectId: "the-news-dragon-7099f",
  storageBucket: "the-news-dragon-7099f.appspot.com",
  messagingSenderId: "71898072514",
  appId: "1:71898072514:web:8fc0279362ee9f1302025b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;