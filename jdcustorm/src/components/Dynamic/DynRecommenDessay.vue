<template>
<div class="recommendessay clear">
    <ul >
        <dyn-recomment-dessay-li :n="n" :num="index" key="index" v-for="(n,index) in recommenlists"></dyn-recomment-dessay-li>
    </ul>
</div>

</template>
<script type="text/ecmascript-6">
    import DynRecommentDessayLi from "./DynRecommentDessayLi.vue";

    export default {
        props:["recommenlists"],
        components: {
            DynRecommentDessayLi
        }
    }
</script>
<style scoped>
   .recommendessay {
      padding: 0 0.48rem; }

</style>