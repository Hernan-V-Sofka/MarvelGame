import { createApp } from 'vue';
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAUwRnGVsIzvY0e2f8B8sAplKHNBUOF5HY",
    authDomain: "marvelgame-c0296.firebaseapp.com",
    projectId: "marvelgame-c0296",
    storageBucket: "marvelgame-c0296.appspot.com",
    messagingSenderId: "693061701489",
    appId: "1:693061701489:web:0143c9c5e036b98e6070d0",
    measurementId: "G-SV0ZE0XKBL"
};

// Inicio de firabase
const firebaseApp = initializeApp(firebaseConfig);
// Servicio de inicio de firebase
const db = getFirestore(firebaseApp);


export { db };

createApp(App)
    .mount('#app');
