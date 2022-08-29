import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../pages/login.vue')
    },
    {
        path: '/submit',
        name: 'Editor',
        component: () => import('../pages/editor.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;