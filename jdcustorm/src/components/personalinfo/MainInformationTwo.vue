<template>
    <div class="mainIfnormationTwo">
      <ul class="information2">
      <li class="clear">
        
        <router-link to="/coffers">
          <p>京东小金库</p>
          <img v-bind:src="Two.src" v-bind:alt="Two.alt">
          <span>金额6.13</span>
          </router-link>
        
      </li>
     <li class="clear" v-for="t in Two.titles">
        <a href="#">
          <p>{{t.p}}</p>
          <img :src="Two.src" :alt="Two.alt">
          <span>{{t.span}}</span>
        </a>
      </li>
    </ul>
  
    </div>
	 

</template>

<script>

  export default{
    props:["Two"]
  
  }
</script>

<style scoped>
	
   #main .information2 {
    padding: 0 0.48rem; }
    #main .information2 li {
      padding-left: 1.2rem;
      border-top: 0.01rem solid #eee;
      background-size: 0.72rem 1.49rem; }
      #main .information2 li a p {
        float: left;
        font: 700 0.4rem/1.49rem "";
        color: #333; }
      #main .information2 li a img {
        display: block;
        float: right;
        width: 0.2rem;
        height: 1.49rem; }
      #main .information2 li a span {
        float: right;
        margin-right: 0.3rem;
        font: 700 0.34rem/1.49rem "";
        color: #999; }
    #main .information2 li:nth-child(1) {
      background: url("../../public/img/personinfo_t11.png") no-repeat;
      border-top: 0.01rem solid #fff;
      background-size: 0.72rem 1.49rem; }
    #main .information2 li:nth-child(2) {
      background: url("../../public/img/personinfo_t12.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information2 li:nth-child(3) {
      background: url("../../public/img/personinfo_t13.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information2 li:nth-child(4) {
      background: url("../../public/img/personinfo_t14.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information2 li:nth-child(5) {
      background: url("../../public/img/personinfo_t15.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information2 li:nth-child(6) {
      background: url("../../public/img/personinfo_t16.png") no-repeat;
      background-size: 0.72rem 1.49rem; }

</style>
