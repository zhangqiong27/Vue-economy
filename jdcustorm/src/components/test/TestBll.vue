<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.pic" alt="罗马">
        </a>
    </li>

</template>

<script type="text/ecmascript-6">
export default{
    mounted () {
        console.log('挂载好了')
        var mySwiper1 = new Swiper('.crowdfunding_banner', {
            effect : 'coverflow',
            slidesPerView: 1.35,
            centeredSlides: true,
            loop:true,
            coverflow: {
                rotate: 10,
                stretch: -30,
                depth: 60,
                modifier: 2,
                slideShadows : true
            }
        });
        console.log(mySwiper1)

    },
    props:["pro"],
}
</script>

<style scoped>

    #banner .crowdfunding_banner ul {
        width: 100%; }
    li a img {
        display: block;
        width: 100%;
        height: 100%; }

</style>