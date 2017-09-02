<template>
    <section id="rqtj">

        <ul>
           <testeff key="index" :pro="n" v-for="(n,index) in q4"></testeff>

        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    import Testeff from "./TestEff.vue"
    export default{
        components:{
            Testeff,
        },
        props:["q4"]

    }

</script>

<style scoped>
    #rqtj {
        padding-left: 0.48rem; }
    #rqtj h2 {
        font: 700 0.42rem/1.65rem "";
        color: #333; }
    #rqtj ul li {
        border-top: 0.01rem solid #eee;
        padding: 0.57rem 0 0.61rem; }
    #rqtj ul li a {
        display: flex;
        justify-content: space-between; }
    #rqtj ul li a .productimg {
        flex: 0 0 26%;
        display: block;
        width: 2.7rem;
        height: 2.7rem; }
    #rqtj ul li a .product_r {
        flex: 0 0 65%;
        padding-right: 0.48rem; }
    #rqtj ul li a .product_r h2 {
        font: 700 0.4rem/0.55rem "";
        color: #333; }
    #rqtj ul li a .product_r p {
        font: 600 0.24rem/0.88rem "";
        color: #ff7d0e; }
    #rqtj ul li a .product_r p i {
        font: 700 0.40rem/0.88rem ""; }
    #rqtj ul li a .product_r p span {
        color: #999; }
    #rqtj ul li a .product_r .schedule .jindutiao {
        float: left;
        display: block;
        width: 5.17rem;
        height: 0.63rem; }
    #rqtj ul li a .product_r .schedule span {
        float: left;
        margin-left: 0.35rem;
        font: 600 0.26rem/0.63rem "";
        color: #4e90e4; }
    #rqtj ul li a .product_r .ren {
        font: 600 0.28rem/0.43rem "";
        color: #999;
        padding-left: 0.45rem;
        background: url("../../public/img/crowdfunding_renshu.png") no-repeat;
        background-size: 0.36rem 0.43rem; }
    #rqtj ul li a .product_r .qian {
        font: 600 0.28rem/0.43rem "";
        color: #999;
        padding-left: 0.45rem;
        background: url("../../public/img/crowdfunding_money.png") no-repeat;
        background-size: 0.36rem 0.43rem; }
    #rqtj ul li a .product_r .tian {
        font: 600 0.28rem/0.43rem "";
        color: #999;
        padding-left: 0.45rem;
        background: url("../../public/img/crowdfunding_date.png") no-repeat;
        background-size: 0.36rem 0.43rem; }

</style>