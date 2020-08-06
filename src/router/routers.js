import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../view/index/index.vue';
import guanz from '../view/guanz/guanz.vue';
import personal from '../view/personal/personal.vue';
const routes=[
    {
        path:"/index",
        component:Index
    },
    {
        path:"/",
        redirect:'/index'
    },
    {
        path:"/guanz",
        component:guanz
    },
    {
        path:'/personal',
        component:personal
    }
]
export default new VueRouter({
    routes
})