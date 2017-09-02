<template>
    <li class="swiper-slide" >
        <img :src="n.pic" alt="牛人金股">
        <h4>{{n.tol}}</h4>
        <p>{{n.detail}}</p>
        <a href="#">{{n.add}}</a>
    </li>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["n"],
        mounted () {
            console.log("挂载成功")
            var mySwiper3 = new Swiper('.essay_banner', {

                slidesPerView: 'auto',//同时显示的数量
                initialSlide :0,//开始位置
                paginationClickable: true,//点击那三个小点可跳转
                spaceBetween: 30,
                //observer:true,
                loop:true,
                //observeParents:true//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
            });
//            console.log(mySwiper3)
        }
    }
</script>
<style scoped>
li {
        width: 3.4rem;
        height: 4.43rem;
        margin-right: 0.5rem; }
li img {
        margin-left: 0.95rem;
        display: block;
        width: 1.5rem;
        height: 1.5rem; }
 li h4 {
        font: 700 0.36rem/0.8rem "";
        color: #444;
        margin-top: 0.13rem; }
 li p {
        font: 700 0.3rem/0.5rem "";
        color: #999;
        height: 1rem; }
li a {
        margin-left: 0.95rem;
        display: block;
        width: 1.5rem;
        height: 0.63rem;
        background: #4e8dee;
        font: 800 0.32rem/0.63rem "";
        color: #fff; }
</style>