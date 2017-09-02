<template>
    <section id="classify">
        <ul>
           <testfzz key="index" :pro="n" v-for="(n,index) in q5"></testfzz>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    import Testfzz from "./TestFzz.vue";
    export default{
        components:{
            Testfzz
        },
        props:["q5"],

    }

</script>

<style scoped>
    #classify {
        padding: 1.16rem 0.48rem 1.11rem; }
    #classify ul {
        display: flex;
        justify-content: space-between; }
    #classify ul li {
        height: 1.51rem; }
    #classify ul li a img {
        display: block;
        width: 2.2rem;
        height: 1.51rem; }

</style>