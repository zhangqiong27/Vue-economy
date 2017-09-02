<template>
    <ul>
        <li v-for="t in saoma">
            <a href="">
            <img :src="t.img"/>
            <p>{{t.p}}</p>
            </a>
        </li>
    </ul>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["saoma"]
    }

</script>
<style scoped>
     ul {
        display: flex;
        justify-content: space-between;}
     ul li {
        flex: 0 0 22%;
        padding-top: 0.71rem; }
     ul li a img {
        display: block;
        width: 100%;
        height: 0.94rem; }
     ul li a p {
        text-align: center;
        font: 700 0.3rem/1.35rem "";
        color: #666; }
</style>