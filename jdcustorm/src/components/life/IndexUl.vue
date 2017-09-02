<template>
    <section class="morezchw">

        <ul>
           <indexull key="index" :pro="n" v-for="(n,index) in wq"></indexull>
        </ul>

    </section>

</template>

<script type="text/ecmascript-6">
    import Indexull from "./IndexUll.vue"
    export default{
        components:{
            Indexull
        },
        props:["wq"]

    }

</script>

<style scoped>
    .morezchw ul {
        padding: 0 0.51rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; }
    .morezchw ul li {
        flex: 0 0 48.774%;
        padding-bottom: 0.27rem;
        width: 4.77rem;
        height: 7.26rem; }
    .morezchw ul li a img {
        display: block;
        width: 100%;
        height: 4.77rem; }
    .morezchw ul li a h5 {
        letter-spacing: 0.04rem;
        margin-top: 0.22rem;
        font: 800 0.36rem/0.6rem "";
        color: #444; }
    .morezchw ul li a p {
        font: 600 0.28rem/1.07rem "";
        color: #f58322; }
    .morezchw ul li a p i {
        font-weight: 600;
        color: #999; }

</style>