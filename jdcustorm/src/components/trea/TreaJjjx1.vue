<template>
        <div class="swiper-container jjjx_banner">
            <ul class="swiper-wrapper">
                <treajjjx1-list :n="n" v-for="n in treajjjx1" ></treajjjx1-list>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
    import Treajjjx1List from "./Treajjjx1List.vue"
    export default{
       props:["treajjjx1"],
        components: {
            Treajjjx1List
        }

    }
</script>
<style scoped>
.jjjx .jjjx_banner {
        width: 100%;
        padding: 0.27rem 0 0.26rem 0; }


 </style>

