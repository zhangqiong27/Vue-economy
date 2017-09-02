<template>
    <li class="swiper-slide" >
        <a href="#">
            <img :src="n.pic" alt="n.auth">
            <p>{{n.auth}}</p>
        </a>
    </li>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["n"],
        mounted (){
            var mySwiper5 = new Swiper('.tjyd_banner1', {
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
        padding: 0.33rem 0.42rem 0.32rem 0.42rem;
        height: 0.38rem;
        width: 2.7rem;
        box-shadow: 0 0 20px #ededed; }
 li a img {
        display: block;
        float: left;
        width: 0.36rem;
        height: 0.38rem; }
 li a p {
        padding-left: 0.24rem;
        float: left;
        font: 700 0.36rem/0.38rem "";
        color: #444; }
</style>