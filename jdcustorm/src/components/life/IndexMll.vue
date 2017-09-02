<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.pic" alt="骨传导太阳镜">
            <p>{{pro.title}}<i>￥{{pro.price}}</i></p>
            <span>{{pro.qal}}</span>
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
        padding: 0.48rem 0 0.52rem;
        width: 4.15rem;
        box-shadow: 0 0 20px #ededed; }
   li a {
        text-align: center; }
  li a img {
        display: block;
        width: 100%;
        height: 1.71rem; }
    li a p {
        margin-top: 0.29rem;
        font: 700 0.38rem/0.6rem "";
        color: #444; }
   li a p i {
        font-weight: 700;
        color: #ff7c14; }
    li a span {
        display: block;
        font: 600 0.3rem/0.55rem "";
        color: #999; }


</style>