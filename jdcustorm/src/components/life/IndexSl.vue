<template>
    <section class="hwzj">

        <div class="swiper-container hwzj_banner">
            <ul class="swiper-wrapper">
                <indexsll key="index" :pro="n" v-for="(n,index) in wo"></indexsll>
            </ul>
        </div>
    </section>

</template>

<script type="text/ecmascript-6">
    import Indexsll from "./IndexSll.vue"

export default{
    mounted () {
        var mySwiper8 = new Swiper('.hwzj_banner', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 30,
            observer:true,
            observeParents:true
        });
    },
        components:{
            Indexsll
        },
        props:["wo"]
}
</script>

<style scoped>
    .hwzj .hwzj_banner ul {
        padding: 0.16rem 0 0.47rem 0.49rem; }
    .hwzj .hwzj_banner ul li {
        width: 4.15rem;
        height: 4.15rem;
        box-shadow: 0 0 20px #ededed; }
    .hwzj .hwzj_banner ul li a img {
        display: block;
        width: 100%;
        height: 2.57rem; }
    .hwzj .hwzj_banner ul li a p {
        text-align: center;
        padding: 0 0.5rem;
        font: 700 0.3rem/0.54rem "";
        color: #666;
        letter-spacing: 0.02rem; }


</style>