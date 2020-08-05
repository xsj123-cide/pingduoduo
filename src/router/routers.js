import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../view/index/index.vue';
import guanz from '../view/guanz/guanz.vue';
const routes=[
    {
        path:"/index",
        component:Index
    },
    {
        path:"/",
        redirect:Index
    },
    {
        path:"/guanz",
        component:guanz
    }
]
export default new VueRouter({
    routes
})