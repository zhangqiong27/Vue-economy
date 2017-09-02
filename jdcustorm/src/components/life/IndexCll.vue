<template>
    <li>
        <router-link to="/article"><img :src="pro.pic" alt="手机充值">  <p>{{pro.title}}</p></router-link>
    </li>

</template>

<script type="text/ecmascript-6">
export default{

    props:["pro"

    ],
    created(){


    },



}
</script>

<style scoped>
    li {
        flex: 0 0 17.074%;
        padding: 0.6rem 0 0.06rem; }
    li a img {
        display: block;
        width: 100%;
        height: 0.71rem; }
    li a p {
        text-align: center;
        font: 700 0.32rem/1.21rem "";
        color: #666; }

</style>