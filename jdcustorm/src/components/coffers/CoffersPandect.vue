<template>
    
	<section id="pandect">
    <h6>总金额（元）</h6>
    <h2>{{pandect.totalmoney}}</h2>
    <div class="licai_lingyong">
      <a href="#">
        <img :src="pandect.imgs[0].src" :alt="pandect.imgs[0].alt">
      </a>
      <a href="#">
        <img :src="pandect.imgs[1].src" :alt="pandect.imgs[1].alt">
      </a>
    </div>
  </section>

</template>


<script>

  export default{
    props:["pandect"]
  
  }
</script>

<style scoped>
	
#pandect {
  background: #cba76d;
  margin-top: 1.6rem;
  padding: 0.54rem 0.48rem 0; }
  #pandect h6 {
    font: 600 0.34rem/0.67rem "";
    color: #fff; }
  #pandect h2 {
    font: 900 0.82rem/1.14rem "";
    color: #fff;
    margin-bottom: 0.16rem; }
  #pandect .licai_lingyong {
    padding: 0.66rem 0.12rem;
    display: flex;
    justify-content: space-between; }
    #pandect .licai_lingyong a img {
      display: block;
      width: 4.45rem;
      height: 2.85rem;
      box-shadow: 0 0 0.12rem #c5a26a; }
</style>
