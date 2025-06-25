// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7563I03BkiqXfbSPG3-Q_vcTCQVSgez0",
  authDomain: "drogon-news-e93b8.firebaseapp.com",
  projectId: "drogon-news-e93b8",
  storageBucket: "drogon-news-e93b8.firebasestorage.app",
  messagingSenderId: "858022109592",
  appId: "1:858022109592:web:d1f64505fbe6403db5cbed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
export default app;