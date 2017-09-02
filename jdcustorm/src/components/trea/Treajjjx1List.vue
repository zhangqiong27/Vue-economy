<template>
    <li class="swiper-slide" >
        <a href="#">
            <img :src="n.pic" alt="n.auth">
            <p>{{n.auth}}</p>
            <span>{{n.span}}</span>
        </a>
    </li>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["n"],
        mounted (){
            var mySwiper2 = new Swiper('.jjjx_banner', {
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
        border-top: none;
        padding: 0.6rem 0 0.6rem 0.49rem;
        height: 1.17rem;
        width: 3.86rem;
        box-shadow: 0 0 20px #ededed; }
    li a img {
        float: left;
        width: 0.46rem;
        height: 1.17rem; }
    li a p {
        float: left;
        padding-left: 0.38rem;
        width: 2.8rem;
        font: 700 0.42rem/0.53rem "";
        color: #444; }
    li a span {
        padding-left: 0.38rem;
        display: block;
        float: left;
        width: 2.8rem;
        margin-top: 0.32rem;
        font: 700 0.3rem/0.32rem "";
        color: #999; }
</style>