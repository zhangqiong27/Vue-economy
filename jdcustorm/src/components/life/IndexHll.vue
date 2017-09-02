<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.pic" alt="科技">
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
        width: 2.28rem;
        height: 1.03rem;
        box-shadow: 0 0 20px #ededed; }
    li a img {
        display: block;
        width: 100%;
        height: 100%; }


</style>