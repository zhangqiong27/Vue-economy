<template>
    

  <section id="beijing">
    <img :src="beijing.src" alt="beijing.alt">
  </section>
       
        
</template>

<script>

  export default{
    props:["beijing"]
  
  }
</script>

<style scoped>
	
  #beijing {
  margin-bottom: 1.5rem; }
  #beijing img {
    display: block;
    width: 100%;
    height: 1.62rem; }
</style>
