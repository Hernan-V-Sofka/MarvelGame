import { createApp } from 'vue';
import App from './App.vue';
import firebase from 'firebase/compat/app';
import router from '@/router/index';
import firebaseConfig from '../config/FireBaseCredential'; 


// Inicio de firabase
firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount('#app');
