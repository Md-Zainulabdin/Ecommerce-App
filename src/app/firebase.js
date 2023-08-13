import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBZbY0VWs1mgzmKJY3nbPFPCcknzuSGmks",
    authDomain: "ecommerce-app-1c7e7.firebaseapp.com",
    projectId: "ecommerce-app-1c7e7",
    storageBucket: "ecommerce-app-1c7e7.appspot.com",
    messagingSenderId: "678233117674",
    appId: "1:678233117674:web:2ab5e0064158833b031893",
    databaseURL: "https://ecommerce-app-1c7e7-default-rtdb.firebaseio.com"
  };
  
export  const app = initializeApp(firebaseConfig);