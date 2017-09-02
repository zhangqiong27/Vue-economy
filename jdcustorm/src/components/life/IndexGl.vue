<template>
    <section class="zchw">

        <div class="swiper-container zchw_banner">
            <ul class="swiper-wrapper">

               <indexgll key="index" :pro="n" v-for="(n,index) in wc"></indexgll>

            </ul>
        </div>


    </section>

</template>

<script type="text/ecmascript-6">
    import Indexgll from "./IndexGll.vue";
export default{
    mounted () {
        var mySwiper3 = new Swiper('.zchw_banner', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 0,
            observer: true,
            observeParents: true
        });
    },

        components:{
            Indexgll,
        },
        props:["wc"]

}
</script>

<style scoped>

    .zchw .zchw_banner ul {
        padding-left: 0.48rem; }
    .zchw .zchw_banner ul li {
        width: 9.5rem; }
    .zchw .zchw_banner ul li dl dd {
        margin-bottom: 0.48rem;
        height: 2.4rem; }
    .zchw .zchw_banner ul li dl dd img {
        float: left;
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 0.3rem; }
    .zchw .zchw_banner ul li dl dd h3 {
        width: 6.2rem;
        float: left;
        font: 600 0.38rem/0.5rem "";
        color: #444; }
    .zchw .zchw_banner ul li dl dd p {
        width: 6.2rem;
        float: left;
        font: 600 0.3rem/0.75rem "";
        color: #999; }
    .zchw .zchw_banner ul li dl dd span {
        width: 6.2rem;
        float: left;
        font: 600 0.28rem/0.42rem "";
        color: #fd8016; }
    .zchw .zchw_banner ul li dl dd span i {
        padding-left: 0.05rem;
        color: #999; }

</style>