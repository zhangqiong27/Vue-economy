<template>
    <div class="title clear">
        <h2>{{wg.title}}</h2>
        <div class="loadmore">
            <a href="#">
                <img :src="wg.pic" alt="右箭头">
                <i href="#">{{wg.qal}}</i>
            </a>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
export default{
props:["wg"],
}
</script>

<style scoped>
    .title h2 {
        float: left;
        padding-left: 0.48rem;
        font: 700 0.44rem/1.5rem "";
        color: #333; }
    .title .loadmore {
        float: right;
        padding-right: 0.48rem; }
    .title .loadmore a {
        display: block;
        height: 1.5rem; }
    .title .loadmore a i {
        letter-spacing: 0.05rem;
        float: right;
        display: block;
        font: 600 0.34rem/1.5rem "";
        color: #999;
        margin-right: 0.35rem; }
    .title .loadmore a img {
        float: right;
        display: block;
        width: 0.25rem;
        height: 1.5rem; }

</style>