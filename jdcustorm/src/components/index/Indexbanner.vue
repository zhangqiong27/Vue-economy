<template>
   <section id="banner" class="swiper-container indexBanner">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><a href="#"><img :src="Indexlist" /></a></div>
            <div class="swiper-slide"><a href="#"><img :src="Indexlist" /></a></div>
            <div class="swiper-slide"><a href="#"><img :src="Indexlist" /></a></div>
        </div>
        <div class="swiper-pagination"></div>
   </section>
</template>
<script type="text/ecmascript-6">
	import "../../public/js/jquery-1.8.3.min.js"
    import "../../public/css/swiper.css"
    import "../../public/css/animate.css"
    import "../../public/js/swiper.js"
//    import "../../public/js/index.js"
    export default{
        props:["Indexlist"],
        updated:function () {
            	var mySwiper = new Swiper('.indexBanner', {
             autoplay: 3000,//可选选项，自动滑动
             pagination: '.swiper-pagination',
             loop: true,
             speed:2000,
             autoplayDisableOnInteraction: false,
             observer:true,
             observeParents:true
             });
            
        }
    }
</script>
 <style scoped>
 	*{margin:0;padding:0;}
   #banner .swiper-wrapper {
  width: 100%;
  height: 7.76rem; }
  #banner .swiper-wrapper .swiper-slide a img {
    display: block;
    width: 100%;
    height: 100%; }
</style>
