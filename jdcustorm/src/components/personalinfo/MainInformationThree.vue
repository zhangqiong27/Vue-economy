<template>
    
	<ul class="information3">
      <li class="clear" v-for="t in Three.titles">
        <a href="#">
          <p>{{t.p}}</p>
          <img v-bind:src="Three.src" v-bind:alt="Three.alt">
          <span>{{t.span}}</span>
        </a>
      </li>
    </ul>
   

</template>

<script>

  export default{
    props:["Three"]
  
  }
</script>

<style scoped>
	
  #main .information3 {
    padding: 0 0.48rem; }
    #main .information3 li {
      padding-left: 1.2rem;
      border-top: 0.01rem solid #eee;
      background-size: 0.72rem 1.49rem; }
      #main .information3 li a p {
        float: left;
        font: 700 0.4rem/1.49rem "";
        color: #333; }
      #main .information3 li a img {
        display: block;
        float: right;
        width: 0.2rem;
        height: 1.49rem; }
      #main .information3 li a span {
        float: right;
        margin-right: 0.3rem;
        font: 700 0.34rem/1.49rem "";
        color: #999; }
    #main .information3 li:nth-child(1) {
      background: url("../../public/img/personinfo_t17.png") no-repeat;
      background-size: 0.72rem 1.49rem;
      border-top: 0.01rem solid #fff; }
    #main .information3 li:nth-child(2) {
      background: url("../../public/img/personinfo_t18.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information3 li:nth-child(3) {
      background: url("../../public/img/personinfo_t19.png") no-repeat;
      background-size: 0.72rem 1.49rem; }

</style>
