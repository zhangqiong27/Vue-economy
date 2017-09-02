<template>
    <section class="menu">
        <ul>
           <indexcll key="index" :pro="n" v-for="(n,index) in list1"></indexcll>
        </ul>

    </section>

</template>

<script type="text/ecmascript-6">
    import Indexcll from "./IndexCll.vue";

export default{
    components:{
        Indexcll,
    },
    props:["list1"],



}
</script>

<style scoped>
    .menu {
        padding: 0 0.48rem; }
    .menu ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; }
    .menu ul li {
        flex: 0 0 17.074%;
        padding: 0.6rem 0 0.06rem; }
    .menu ul li a img {
        display: block;
        width: 100%;
        height: 0.71rem; }
    .menu ul li a p {
        text-align: center;
        font: 700 0.32rem/1.21rem "";
        color: #666; }

</style>