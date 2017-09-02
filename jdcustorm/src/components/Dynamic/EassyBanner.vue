<template>
    <div class="swiper-container essay_banner">
        <ul class="swiper-wrapper">
            <essay-banner-list key="index" :n="n" v-for="(n,index) in essaybanner"></essay-banner-list>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import  EssayBannerList from "./EssayBannerList.vue";
    export default {
        props:["essaybanner"],
        components: {
            EssayBannerList
        },
    }
</script>
<style scoped>
.essay_banner ul {
      padding: 0.51rem 0 0.54rem 0.48rem;
      text-align: center;
      border-bottom: 0.01rem solid #ddd; }
</style>