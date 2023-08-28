import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/about.vue'

const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

