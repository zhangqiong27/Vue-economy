<template>
    <div class="fuli">
        <h2>《High 周末 有钱有闲》Vol.51</h2>
        <a href="#">
            <img :src="fuli2" alt="high周末">
        </a>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["fuli2"],
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