import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Wrapped from '@/views/Wrapped.vue'
import About from '@/views/About.vue'

const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/wrapped', name: 'wrapped', component: Wrapped },
    { path: '/about', name: 'about', component: About},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

