<template>
    <div class="swiper-container laba_banner">
        <dl class="swiper-wrapper">
            <indexdll key="index" :pro="n" v-for="(n,index) in wa"></indexdll>
        </dl>
    </div>

</template>

<script type="text/ecmascript-6">
    import Indexdll from "./IndexDll.vue";
export default{

        components:{
            Indexdll,

        },
    props:["wa"]
}
</script>

<style scoped>
    .laba_banner{margin: 0 0.48rem;}
    .laba_banner {
        border-top: 0.01rem solid #eee;
        height: 1.2rem;
        background: url("../../public/img/life_laba.png") no-repeat 0 0;
        background-size: 0.42rem 1.2rem; }
    .laba_banner dl {
        display: block;
        padding-left: 0.9rem; }
    .laba_banner dl dd {
        height: 1.2rem; }
    .laba_banner dl dd p {
        font: 600 0.36rem/1.2rem "";
        color: #555;
        height: 1.2rem; }

</style>