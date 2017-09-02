<template>
    <li>
        <a href="#">
            <img :src="pro.pic" alt="手机专享"/>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    export default{
        props:["pro"],
    }

</script>

<style scoped>

    #classify ul {
        display: flex;
        justify-content: space-between; }
    li {
        height: 1.51rem; }
  li a img {
        display: block;
        width: 2.2rem;
        height: 1.51rem; }

</style>