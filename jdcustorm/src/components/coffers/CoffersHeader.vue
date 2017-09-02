<template>
    
	<header>
    
    <router-link to="/Personalinfo">
      <img class="back" src="../../public/img/coffers_back.png" alt="返回">
    </router-link>
      
    
    <h2>小金库</h2>
    <p>账单</p>
  </header>

</template>


<style scoped>
	
	header {
  position: fixed;
  left: 0;
  top: 0;
  width: 9.84rem;
  height: 0.52rem;
  z-index: 999;
  padding: 0.54rem 0.48rem;
  background: #cba76d; }
  header .back {
    float: left;
    display: block;
    width: 0.34rem;
    height: 0.52rem; }
  header h2 {
    float: left;
    margin-left: 0.8rem;
    font: 700 0.42rem/0.52rem "";
    color: #fff; }
  header p {
    float: right;
    font: 700 0.34rem/0.52rem "";
    color: #fff; }
</style>
