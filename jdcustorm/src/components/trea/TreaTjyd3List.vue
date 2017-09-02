<template>
    <li class="swiper-slide"  >
        <img :src="n.pic" alt="n.auth">
        <h4>{{n.auth}}</h4>
        <p>{{n.p}}</p>
        <a href="#">{{n.a}}</a>
    </li>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["n"],
        mounted (){
            var mySwiper6 = new Swiper('.tjyd_banner2', {
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 30,
                observer:true,
                observeParents:true
            });

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