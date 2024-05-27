import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo8_s8G5L-K0JyMpFF2qS_iqfmt4KTnD8",
  authDomain: "sp24-persona-playground.firebaseapp.com",
  databaseURL: "https://sp24-persona-playground-default-rtdb.firebaseio.com",
  projectId: "sp24-persona-playground",
  storageBucket: "sp24-persona-playground.appspot.com",
  messagingSenderId: "881465544268",
  appId: "1:881465544268:web:3973ae1199132c5b6caee9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
