<template>
    <li class="swiper-slide">
        <a href="#">
            <h3>{{pro.title}}</h3>
            <img :src="pro.pic" alt="分隔符">
            <p>{{pro.sq}}<span>{{pro.price}}</span>{{pro.sq1}}</p>
            <h4>{{pro.qal}}</h4>
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
        padding: 0.37rem  0.5rem 0.71rem 0.5rem;
        width: 3.15rem;
        height: 3.07rem;
        box-shadow: 0 0 20px #ededed; }
   li a {
        text-align: center; }
    li a h3 {
        font: 700 0.38rem/1.14rem "";
        color: #444; }
    li a img {
        display: block;
        width: 3.15rem;
        height: 0.08rem; }
    li a p {
        font: 600 0.36rem/1.11rem "";
        color: #888; }
    li a p span {
        color: #27b288; }
     li a h4 {
        font: 700 0.5rem/0.74rem "";
        color: #27b288; }


</style>