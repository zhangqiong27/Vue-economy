"use strict";
import Vue from "vue";
import App from "./app.vue";
import  router from "./router/index";
import VueLazyload from '../node_modules/vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,//预加载高度的比例
    error: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png',//这个是请求失败后显示的图片
    loading: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png',//这个是加载的loading过渡效果
    attempt: 1,//尝试次数
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: [ 'scroll' ,"touchmove"]//你想要监听
})

new Vue({
    el: "#app",
    router,
    render:h =>{
        return h(App);
    }
 });