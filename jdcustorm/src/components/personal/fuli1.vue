<template>
    <div class="fuli">
        <h2>小金库 感恩福利大回馈</h2>
        <a href="#">
            <img :src="fuli1" alt="小金库">
        </a>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["fuli1"],
    }
</script>
<style scoped>
     .fuli {
        padding: 0 0.48rem 0.48rem; }
    .fuli h2 {
        font: 700 0.44rem/1.64rem "";
        color: #444; }
     .fuli a img {
        display: block;
        width: 9.84rem;
        height: 2.88rem; }
</style>