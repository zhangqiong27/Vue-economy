<template>
    <div class="beijing">
			<img :src="beijing" alt="背景"/>
	</div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["beijing"]
    }
</script>
 <style scoped>
 	  .beijing {
    background: #f5f5f5;
    margin-bottom: 1.5rem;}
    .beijing img {
      display: block;
      width: 9.8rem;
      height: 2.8rem; }
</style>
