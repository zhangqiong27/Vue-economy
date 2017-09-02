<template>
    <div class="beijing">
        <img :src="bei" alt="人生第一件大事是发现自己">
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["bei"]
    }
</script>
<style scoped>
   .beijing img {
        display: block;
        width: 100%;
        height: 2.8rem; }
</style>