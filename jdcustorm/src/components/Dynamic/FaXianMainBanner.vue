<template>
  <div class="swiper-container laba_banner">
      <dl class="swiper-wrapper">
          <fa-xian-main-banner-list  key="index" :n="n" v-for="(n,index) in faxianmainbanner"></fa-xian-main-banner-list>
      </dl>
    </div>
</template>
<script type="text/ecmascript-6">
    import FaXianMainBannerList from "./FaXianMainBannerList.vue";
    export default {
        props:["faxianmainbanner"],
        components:{
            FaXianMainBannerList
        }

    }
</script>
<style scoped>
          .laba_banner {
            border-top: 0.01rem solid #eee;
            height: 1.2rem;
            margin-left: 0.48rem;
            background: url("../../public/img/life_laba.png") no-repeat 0 0;
            background-size: 0.42rem 1.2rem; }
            .laba_banner dl {
              display: block;
              padding-left: 0.9rem; }


</style>