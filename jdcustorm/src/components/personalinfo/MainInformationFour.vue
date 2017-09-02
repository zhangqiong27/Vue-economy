<template>
    
	<ul class="information4">
      <li class="clear" v-for="t in Four.titles">
        <a href="#">
          <p>{{t.p}}</p>
          <img v-bind:src="Four.src" v-bind:alt="Four.alt">
          <span>{{t.span}}</span>
        </a>
      </li>
    </ul>
  
   
</template>

<script>

  export default{
    props:["Four"]
  
  }
</script>

<style scoped>
	
 #main .information4 {
    padding: 0 0.48rem; }
    #main .information4 li {
      padding-left: 1.2rem;
      border-top: 0.01rem solid #eee;
      background-size: 0.72rem 1.49rem; }
      #main .information4 li a p {
        float: left;
        font: 700 0.4rem/1.49rem "";
        color: #333; }
      #main .information4 li a img {
        display: block;
        float: right;
        width: 0.2rem;
        height: 1.49rem; }
      #main .information4 li a span {
        float: right;
        margin-right: 0.3rem;
        font: 700 0.34rem/1.49rem "";
        color: #999; }
    #main .information4 li:nth-child(1) {
      background: url("../../public/img/personinfo_t20.png") no-repeat;
      background-size: 0.72rem 1.49rem;
      border-top: 0.01rem solid #fff; }
    #main .information4 li:nth-child(2) {
      background: url("../../public/img/personinfo_t21.png") no-repeat;
      background-size: 0.72rem 1.49rem; }

</style>
