<template>
	
    <div class="swiper-container tjyd_banner1">
        <ul class="swiper-wrapper">
            <trea-tjyd1-list  :n="n" v-for="n in treatjyd1"></trea-tjyd1-list>
        </ul>
    </div>
			
</template>

<script type="text/ecmascript-6">
    import TreaTjyd1List from "./TreaTjyd1List.vue"
    export default{
       props:["treatjyd1"],
        components: {
            TreaTjyd1List
        }
    }
</script>
<style scoped>
  .tjyd_banner1 ul {
    padding: 0.16rem 0 0.4rem 0.48rem; }

 </style>

