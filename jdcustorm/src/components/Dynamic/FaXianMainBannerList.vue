<template>
    <dd class="swiper-slide" >
        <P>{{n.detail}}</P>
    </dd>
    <!--<dd class="swiper-slide" >-->
    <!--<P>加油打白条，最高立减150元！</P>-->
    <!--</dd>-->
    <!--<dd class="swiper-slide" >-->
    <!--<P>还贷只要0手续费，快来占便宜！</P>-->
    <!--</dd>-->

</template>
<script type="text/ecmascript-6">

    export default {
        props:["n"],
        mounted () {
            console.log('挂载好了')
            var mySwiper2 = new Swiper('.laba_banner', {
                autoplay: 3000,
                direction : 'vertical',
                slidesPerView: 'auto',
                loop:true,
                speed:1000,
                paginationClickable: true,
                autoplayDisableOnInteraction : false,
                observer:true,
                observeParents:true
            });
           // console.log(mySwiper2)
        }
    }
</script>
<style scoped>
dd {
        height: 1.2rem; }
p {
        font: 600 0.36rem/1.2rem "";
        color: #555;
        height: 1.2rem; }
</style>