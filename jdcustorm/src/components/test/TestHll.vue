<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.pic" alt="印章">
            <p>{{pro.title}}</p>
        </a>
    </li>

</template>

<script type="text/ecmascript-6">
    export default{
        props:["pro"],
    }

</script>

<style scoped>

   li {
        width: 4.15rem;
        height: 4.15rem;
        box-shadow: 0 0 20px #ededed; }
   li a img {
        display: block;
        width: 100%;
        height: 2.57rem; }
   ul li a p {
        text-align: center;
        margin-top: 0.2rem;
        padding: 0 0.5rem;
        font: 700 0.3rem/0.54rem "";
        color: #666;
        letter-spacing: 0.02rem; }

</style>