<template>
   <div class="beijing">
			<img :src="treabeijing.pic" alt="treabeijing.auth">
		</div>
</template>

<script type="text/ecmascript-6">
    export default{
       props:["treabeijing"]

    }
</script>
<style scoped>
  .beijing img {
    width: 100%;
    height: 2.58rem;
    margin-bottom: 1.5rem; 
     }


 </style>

