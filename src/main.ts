import { createApp } from 'vue';
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getFirestore,collection } from 'firebase/firestore';
import router from '@/router/index';
import firebaseConfig from '../config/FireBaseCredential'; 


// Inicio de firabase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const cartsCollRef = collection(db,'Cartas');
export default cartsCollRef;


createApp(App)
    .use(router)
    .mount('#app');
