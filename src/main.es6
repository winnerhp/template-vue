import Vue from '/node_modules/vue/dist/vue';
import VueRouter from 'vue-router'//导入vue-router

import App from './vue/app.vue';
//导入组件
import Foo from './vue/foo.vue'


Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/foo', component: Foo }
    ]
})

new Vue({
    el: '#root',
    router,
    render: h => h(App)
})
