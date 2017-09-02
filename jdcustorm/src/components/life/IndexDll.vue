<template>
    <dd class="swiper-slide">
        <P>{{pro.title}}</P>
    </dd>

</template>

<script type="text/ecmascript-6">
    export default{
        mounted () {
            console.log('挂载好了')
            var mySwiper2 = new Swiper('.laba_banner', {
                autoplay: 1500,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: true,
                speed: 1000,
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                observer: true,
                observeParents: true
            });
            console.log(mySwiper2)

        },


        props:["pro"]


    }

</script>

<style scoped>

        dd { height: 1.2rem; }

        dd p {
        font: 600 0.36rem/1.2rem "";
        color: #555;
        height: 1.2rem; }

</style>