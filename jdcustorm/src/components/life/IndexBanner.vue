<template>
    <section id="banner" class="swiper-container life_banner">
        <ul class="swiper-wrapper">
            <indexbanner1 key="index" :pro="n" v-for="(n,index) in wl"></indexbanner1>

        </ul>
        <div class="swiper-pagination"></div>
    </section>

</template>


<script type="text/ecmascript-6">
    import Indexbanner1 from "./IndexBanner1.vue"

    export default{
        components:{
            Indexbanner1
        },
        props:["wl"]




        }
</script>

<style scoped>

    #banner {
        margin-top: 1.64rem;
        width: 100%;
        height: 3.7rem; }
    #banner ul li a img {
        display: block;
        width: 100%;
        height: 100%; }

</style>