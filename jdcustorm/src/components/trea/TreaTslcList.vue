<template>
    <li class="swiper-slide" >
        <a href="#">
            <img :src="n.pic" alt="n.auth">
        </a>
    </li>
</template>
<script type="text/ecmascript-6">

    export default {
        props:["n"],
        mounted (){
            var mySwiper4 = new Swiper('.tslc_banner', {
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
        width: 4.35rem;
        height: 2.31rem; }
li a img {
        width: 100%;
        height: 100%; }
</style>