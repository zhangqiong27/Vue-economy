<template>
	
    <div class="swiper-container tjyd_banner2">
            <ul class="swiper-wrapper">
                <trea-tjyd3-list :n="n" v-for="n in treatjyd3"></trea-tjyd3-list>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
    import TreaTjyd3List from "./TreaTjyd3List.vue"
    export default{
       props:["treatjyd3"],
        components: {
            TreaTjyd3List
        }
    }
</script>
<style scoped>
    .tjyd_banner2 ul {
    padding: 0.51rem 0 1.12rem 0.48rem;
    text-align: center; }

 </style>

