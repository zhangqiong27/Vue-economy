<template>
    <div class="swiper-container faxian_banner">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" key="index" v-for="(n,index) in faxainbanner">
                <a href="###">
                    <img :src="n.pic" alt="大刘财经早知道" >
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["faxainbanner"],
        components:{

        }
    }
</script>
<style scoped>
      #main #registerCont .swiper-wrapper .faxian .faxian_banner {
        width: 100%;
        height: 3.6rem; }
        #main #registerCont .swiper-wrapper .faxian .faxian_banner ul li a img {
          display: block;
          width: 100%;
          height: 100%;
      }
</style>