<template>
    <div class="zichan">
        <h2>总资产（元）</h2>
        <h3>6.13</h3>
        <h4>今日最新收益0.00</h4>
        <div class="swiper-container zjc_banner">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="p in zichan">
                    <a href="#">
                        <img :src="p.img" alt="京东小金库">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["zichan"],
        updated:function () {
            var mySwiper2 = new Swiper('.zjc_banner', {
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 30,
                observer:true,
                observeParents:true
            });
        }
    }
</script>
<style scoped>
     .zichan h2 {
        padding-left: 0.48rem;
        margin-top: 0.39rem;
        font: 600 0.3rem/0.64rem "";
        color: #999; }
   .zichan h3 {
        padding-left: 0.48rem;
        font: 800 0.66rem/0.88rem "";
        color: #333; }
    .zichan h4 {
        padding-left: 0.48rem;
        font: 600 0.32rem/0.88rem "";
        color: #999; }
    .zichan .zjc_banner {
        padding-bottom: 0.31rem;
        padding-left: 0.48rem; }
     .zichan .zjc_banner ul li {
        padding-top: 0.09rem;
        width: 5.98rem;
        height: 2.26rem;
        border-radius: 0.2rem; }
    .zichan .zjc_banner ul li a img {
        display: block;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 20px #eee; }
</style>