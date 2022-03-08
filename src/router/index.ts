import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; 
import StartGame from '@/views/StartViewGame.vue';
import CampView from '../views/CampViewGame.vue';


const routes: RouteRecordRaw[] = [
    { 
        path: '/',
        name: 'Inicio',
        component: StartGame   
    },
    { 
        path: '/camp',
        name: 'Campo',
        component: CampView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;