<template>
    <section id="hwjs">

        <div class="swiper-container hwjs_banner">
            <ul class="swiper-wrapper">
                <testhll key="index" :pro="n" v-for="(n,index) in q7"></testhll>
            </ul>
        </div>
    </section>

</template>

<script type="text/ecmascript-6">
    import Testhll from "./TestHll.vue"
    export default{
        mounted () {
            console.log('挂载好了')
            var mySwiper4 = new Swiper('.hwjs_banner', {
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 30,
                observer:true,
                observeParents:true
            });
            console.log(mySwiper4)

        },
        components:{
            Testhll,
        },
        props:["q7"]

    }

</script>

<style scoped>

    #hwjs .hwjs_banner ul {
        padding: 0.16rem 0 0.47rem 0.49rem; }
    #hwjs .hwjs_banner ul li {
        width: 4.15rem;
        height: 4.15rem;
        box-shadow: 0 0 20px #ededed; }
    #hwjs .hwjs_banner ul li a img {
        display: block;
        width: 100%;
        height: 2.57rem; }
    #hwjs .hwjs_banner ul li a p {
        text-align: center;
        margin-top: 0.2rem;
        padding: 0 0.5rem;
        font: 700 0.3rem/0.54rem "";
        color: #666;
        letter-spacing: 0.02rem; }

</style>