import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../home'

Vue.use(VueRouter);
const routes = [
    { path: '/home', component: Home },
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router