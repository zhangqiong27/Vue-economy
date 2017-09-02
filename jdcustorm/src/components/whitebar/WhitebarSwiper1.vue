<template>

		<li class="swiper-slide">
			<img :src="n.pic" alt="n.auth">
		</li>
       

</template>
<script type="text/ecmascript-6">

    export default{
      props:["n"],
   

    }
</script>
<style scoped>
  li {
  height: 6.04rem; }
  li img {
    display: block;
    width: 100%;
    height: 100%; }


 </style>
