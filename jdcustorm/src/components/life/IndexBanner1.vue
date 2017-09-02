<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.pic" alt="生活福利站每月一聚">
        </a>
    </li>


</template>

<script type="text/ecmascript-6">
export default{
    props:["pro"]



}
</script>

<style scoped>
    li a img {
        display: block;
        width: 100%;
        height: 100%; }

</style>