<template>
   <div class="tslc">
			<h2>特色理财</h2>
			<div class="swiper-container tslc_banner">
				<ul class="swiper-wrapper">
                    <trea-tslc-list key="index" :n="n" v-for="(n,index) in treatslc"></trea-tslc-list>
					
				</ul>
			</div>
		</div>
</template>

<script type="text/ecmascript-6">
    import  TreaTslcList from "./TreaTslcList.vue"
    export default{
       props:["treatslc"],
        components: {
            TreaTslcList
        }
    }
</script>
<style scoped>
   .tslc h2 {
    padding-left: 0.48rem;
    font: 700 0.42rem/1.5rem "";
    color: #333; }
 .tslc .tslc_banner ul {
    padding: 0 0 0.6rem 0.48rem; }

 </style>

