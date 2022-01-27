import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            type: 'home'
        },
        component: () => import('@/views/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            type: 'login'
        },
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/:pathMatch(.*)*', // 404页面匹配规则和以前不相同，得采用这种配置方式才行
        name: '404',
        component: () => import('@/views/404.vue')
    }
]

// 此处由【new VueRouter】的方式修改为【createRouter】的方式 其余无变化
const router = createRouter({
    history: createWebHashHistory(), //路由模式的配置采用API调用的方式  此处采用的hash路由
    routes
})

export default router
