<template>
    <section id="banner">
        <div class="swiper-container crowdfunding_banner">
            <ul class="swiper-wrapper">
                <testbll key="index" :pro="n" v-for="(n,index) in q2"></testbll>
            </ul>
        </div>
    </section>



</template>

<script type="text/ecmascript-6">
    import Testbll from  "./TestBll.vue"
    export default{

        components:{
            Testbll
        },
        props:["q2"],

    }

</script>

<style scoped>
    #banner {
        margin-top: 1.64rem;
        padding: 0.36rem 0; }
    #banner .crowdfunding_banner ul {
        width: 100%; }
    #banner .crowdfunding_banner ul li a img {
        display: block;
        width: 100%;
        height: 100%; }

</style>