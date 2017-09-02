<template>

    <li>
        <a href="#">
            <img :src="pro.pic" alt="真功夫">
            <h4>{{pro.title}}</h4>
            <p>{{pro.qal}}</p>
            <span>{{pro.sq}}</span>
        </a>

    </li>



</template>

<script type="text/ecmascript-6">
    export default{
        props:["pro"]
    }
</script>

<style scoped>
    li {
        text-align: center;
        flex: 0 0 30%;
        width: 2.63rem;
        padding: 0.21rem 0 0.31rem 0; }
    li a img {
        display: block;
        width: 100%;
        height: 1.65rem; }
  li a h4 {
        margin-top: 0.17rem;
        font: 700 0.36rem/0.53rem "";
        color: #555; }
    li a p {
        font: 500 0.28rem/0.48rem "";
        color: #e2b979; }
    li a span {
        font: 0.24rem/0.33rem "";
        color: #999; }
    .fenge {
        display: block;
        width: 0.02rem;
        height: 3.68rem; }


</style>