<template>
  <section id="banner" class="swiper-container treasure_banner">
    <ul class="swiper-wrapper">
       <li v-for="n in treabanner" class="swiper-slide" >
        <a href="#">
          <img  :src="n.pic" alt="n.alt">
        </a>
      </li> 
      </ul>
    <div class="swiper-pagination"></div>
  </section>
</template>

<script type="text/ecmascript-6">
   
    export default{
       props:["treabanner"]
   ,
     updated:function(){
      var mySwiper1 = new Swiper('.treasure_banner', {
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

#banner {
  margin-top: 1.64rem;
  width: 100%;
  height: 3.7rem; }
  #banner ul li a {
    display: block;
    width: 100%;
    height: 100%; }
    #banner ul li a img {
      display: block;
      width: 100%;
      height: 100%; }


 </style>

