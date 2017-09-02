<template>
    <li>
        <a href="#">
            <img v-lazy="pro.pic" alt="钢化膜">
            <h5>{{pro.title}}</h5>
            <p>{{pro.price}}<i>{{pro.qal}}</i></p>
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
        flex: 0 0 48.774%;
        padding-bottom: 0.27rem;
        width: 4.77rem;
        height: 7.26rem; }
   li a img {
        display: block;
        width: 100%;
        height: 4.77rem; }
    li a h5 {
        letter-spacing: 0.04rem;
        margin-top: 0.22rem;
        font: 800 0.36rem/0.6rem "";
        color: #444; }
    li a p {
        font: 600 0.28rem/1.07rem "";
        color: #f58322; }
  li a p i {
        font-weight: 600;
        color: #999; }

</style>