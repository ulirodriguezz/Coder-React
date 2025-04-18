import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgpFJh1J5ohuVA-p38VrTa5mtzCXFoDM4",
  authDomain: "coder-ecommerce-ur.firebaseapp.com",
  projectId: "coder-ecommerce-ur",
  storageBucket: "coder-ecommerce-ur.firebasestorage.app",
  messagingSenderId: "595016891626",
  appId: "1:595016891626:web:1e0a15f5ed38f52dc56b93",
  measurementId: "G-1G7EDXVVZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
