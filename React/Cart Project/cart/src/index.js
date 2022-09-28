import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwDv5HGKd8sqNeLAgeu5npv0tbzJn0ZPw",
  authDomain: "cart-418be.firebaseapp.com",
  projectId: "cart-418be",
  storageBucket: "cart-418be.appspot.com",
  messagingSenderId: "252378799031",
  appId: "1:252378799031:web:5d968c7a5ae957c5d8e632"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

