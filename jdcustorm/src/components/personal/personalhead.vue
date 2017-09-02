<template>
        <header v-if="personalhead[0]">
            <router-link to="/Personalinfo" class="avatar" ><img :src="personalhead[0].img"/></router-link>
            <input type="text" placeholder="搜索">
            <a class="menu" href="personalmessage.html"><img :src="personalhead[1].img"/></a>
        </header>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["personalhead"],
        components:{

        }
    }
</script>
<style scoped>
    header {
        position: fixed;
        left: 0;
        top: 0;
        width: 10.8rem;
        background: #fff;
        z-index: 999;
        padding: 0.35rem 0 0.39rem;
        height: 0.9rem; }
    header .avatar {
        float: left;
        width: 0.9rem;
        height: 0.9rem;
        margin-left: 0.48rem; }
    header .avatar img {
        display: block;
        width: 100%;
        height: 100%; }
    header input {
        margin-left: 0.48rem;
        margin-right: 0.54rem;
        float: left;
        width: 6.38rem;
        padding: 0.23rem 0 0.23rem 1rem;
        height: 0.44rem;
        border: none;
        background: #f8f8f8 url("../../public/img/treasure_input_beijing.png") no-repeat 0.36rem 0.23rem;
        -webkit-background-size: 0.44rem 0.44rem;
        background-size: 0.44rem 0.44rem;
        outline: none;
        font: 600 0.34rem/0.44rem "";
        border-radius: 70px; }
    header .menu {
        float: left;
        display: block;
        width: 0.6rem;
        height: 0.9rem; }
    header .menu img {
        display: block;
        width: 100%;
        height: 100%; }
</style>