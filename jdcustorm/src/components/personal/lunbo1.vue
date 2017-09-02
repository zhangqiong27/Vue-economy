<template>
    <div class="swiper-container laba_banner " >
        <dl class="swiper-wrapper" v-if="lunbo1">
            <!--<swiper :t="t" v-for="t in lunbo1"></swiper>-->
            <dd class="swiper-slide" v-for="t in lunbo1" >
                <P>{{t.p}}</P>
            </dd>
        </dl>
    </div>
</template>
<script type="text/ecmascript-6">

   // import "../../public/js/personaldetils.js"
//     import "../../public/js/lunbo.js"
       import '../../public/js/swiper'
       import '../../public/css/swiper.css'

//    import swiper from "./swiper.vue";
    export default{
        props:["lunbo1"],
        components:{
//            swiper
       },
        updated:function () {
            var mySwiper1 = new Swiper('.laba_banner', {
                autoplay: 1500,
                direction: 'vertical',
//                slidesPerView: 'auto',
                loop: true,
//                speed: 1000,
              /*  paginationClickable: true,
                autoplayDisableOnInteraction: false,
                observer:true,
                observeParents:true*/
            });

        }


    }
</script>
<style scoped>
    .laba_banner {
        border-top: 0.01rem solid #eee;
        height: 1.2rem;
        background: url("../../public/img/life_laba.png") no-repeat 0 0;
        background-size: 0.42rem 1.2rem; }
     .laba_banner dl {
        display: block;
        padding-left: 0.9rem; }
     .laba_banner dl dd {
        height: 1.2rem; }
    .laba_banner dl dd p {
        font: 600 0.36rem/1.2rem "";
        color: #555;
        height: 1.2rem; }
</style>