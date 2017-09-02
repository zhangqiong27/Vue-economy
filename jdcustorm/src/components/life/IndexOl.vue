<template>
    <section class="fanli">

        <div class="swiper-container fanli_banner">
            <ul class="swiper-wrapper">

                <indexoll key="index" :pro="n" v-for="(n,index) in wj"></indexoll>

            </ul>
        </div>
    </section>

</template>

<script type="text/ecmascript-6">
    import Indexoll from "./IndexOll.vue";
    export default{
        mounted () {
            var mySwiper7 = new Swiper('.fanli_banner', {
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 30,
                observer:true,
                observeParents:true
            });
        },
        components:{
            Indexoll,
        },
        props:["wj"]

    }

</script>

<style scoped>
    .fanli .fanli_banner ul {
        padding: 0.16rem 0 0.49rem 0.49rem; }
    .fanli .fanli_banner ul li {
        padding: 0.48rem 0 0.52rem;
        width: 4.15rem;
        box-shadow: 0 0 20px #ededed; }
    .fanli .fanli_banner ul li a {
        text-align: center; }
    .fanli .fanli_banner ul li a img {
        display: block;
        width: 100%;
        height: 1.71rem; }
    .fanli .fanli_banner ul li a p {
        margin-top: 0.29rem;
        font: 700 0.38rem/0.6rem "";
        color: #444; }
    .fanli .fanli_banner ul li a p i {
        font-weight: 700;
        color: #ff7c14; }
    .fanli .fanli_banner ul li a span {
        display: block;
        font: 600 0.3rem/0.55rem "";
        color: #999; }

</style>