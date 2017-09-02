<template>
    <li class="clear" >
        <div class="essay_title clear">
            <img class="via" :src="n.logpic" alt="叶落雨">
            <p>{{n.auth}}</p>
            <a href="#">
                <img class="essay_more" :src="n.morepic" alt="more">
                <span>{{n.guanzhu}}</span>
            </a>
        </div>
        <div class="essay_content">
            <div class="essay_content_l">
                <a href="#">
                    <p>{{n.detail}}</p>
                    <span>{{n.advice}}</span>
                </a>
            </div>
            <img :src="n.img" alt="人工智能">
        </div>
    </li>

</template>
<script type="text/ecmascript-6">
    export default {
        props:["n","num"],
        components: {}
    }
</script>
<style scoped>
 li {
        padding: 0.37rem 0 0.5rem;
        border-bottom: 0.01rem solid #eee; }
 li .essay_title {
        padding-bottom: 0.38rem; }
li .essay_title .via {
        float: left;
        width: 0.6rem;
        height: 0.6rem; }
li .essay_title p {
        margin-left: 0.24rem;
        float: left;
        font: 700 0.36rem/0.6rem "";
        color: #999; }
li .essay_title a {
        float: right; }
li .essay_title a img {
        float: left;
        display: block;
        width: 0.25rem;
        height: 0.6rem;
        margin-right: 0.2rem; }
li .essay_title a span {
        float: left;
        display: block;
        font: 700 0.34rem/0.6rem "";
        color: #538df1; }
li .essay_content .essay_content_l {
        height: 2.1rem;
        float: left;
        width: 7.2rem; }
li .essay_content .essay_content_l a p {
        width: 7.2rem;
        float: left;
        font: 700 0.42rem/0.69rem "";
        color: #333;
        height: 1.38rem; }
li .essay_content .essay_content_l a span {
        width: 7.2rem;
        margin-top: 0.28rem;
        float: left;
        font: 500 0.3rem/0.44rem "";
        color: #6fb342; }
li .essay_content img {
        float: right;
        width: 2.1rem;
        height: 2.1rem; }
</style>