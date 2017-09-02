<template>
    <section id="head">
        <router-link to="/pro">
            <img class="back" src="../../public/img/crowdfunding_back.png" alt="返回"/>
        </router-link>
        <h2>{{q1.title}}</h2>
        <h2>{{q1.qal}}</h2>
        <h2>{{q1.sq}}</h2>
        <a href="#">
            <img class="rch" src="../../public/img/crowdfunding_search.png" alt="搜索"/>
        </a>

    </section>

</template>

<script type="text/ecmascript-6">
    export default{
        props:["q1"]


    }

</script>

<style scoped>
    #head {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        width: 9.84rem;
        padding: 0.47rem 0.48rem 0.5rem;
        border-bottom: 0.01rem solid #eee;
        background: #fff; }
    #head .back {
        display: block;
        width: 0.36rem;
        height: 0.66rem;
        float: left;
        margin: 0 1.75rem 0 0.09rem; }
    #head .rch {
        float: right;
        display: block;
        width: 0.54rem;
        height: 0.66rem;
        margin-right: 0.03rem; }
    #head h2 {
        float: left;
        font: 0.42rem/0.66rem "";
        color: #666;
        margin-right: 0.75rem; }
    #head h2:nth-child(2) {
        color: #518ded; }


</style>