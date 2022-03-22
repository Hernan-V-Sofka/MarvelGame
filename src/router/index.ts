import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; 
import FormLogin from '@/components/FormLogin.vue';
import RegisterUser from '@/components/RegisterGame.vue';
import Home from '@/components/Home.vue';
import MainGame from '@/components/MainGame.vue';
import ComponentAdmin from '@/components/ComponentAdmin.vue';
import ComponetsListCarts from '@/components/ComponetsListCarts.vue';
import EditCarts from '@/components/EditCarts.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    { 
        path: '/login',
        name: 'login',
        component: FormLogin,
    },
    {
        path: '/register',
        name: 'registerUser',
        component: RegisterUser,
    },
    { 
        path: '/game',
        name: 'mainGame',
        component: MainGame,
    },
    { 
        path: '/admin',
        name: 'adminGame',
        component: ComponentAdmin,
    },
    { 
        path: '/listCarts',
        name: 'ListCarts',
        component: ComponetsListCarts,
    },
    { 
        path: '/editcarts/:cartId',
        name: 'EditCarts',
        component: EditCarts,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;