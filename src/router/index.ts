import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; 
import FormLogin from '@/components/FormLogin.vue';
import RegisterUser from '@/components/RegisterGame.vue';
import Home from '@/components/Home.vue';
import MainGame from '@/components/MainGame.vue';



const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    { 
        path: '/login',
        name: 'login',
        component: FormLogin   
    },
    {
        path: '/register',
        name: 'registerUser',
        component: RegisterUser
    },
    { 
        path: '/game',
        name: 'mainGame',
        component: MainGame
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;