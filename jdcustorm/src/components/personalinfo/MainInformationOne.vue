<template>
    
	<ul class="information1" >
      <li class="clear" v-for="t in One.titles">
        <a href="#">
          <p>{{t.p}}</p>
          <img :src="One.src" :alt="One.alt">
          <span>{{t.span}}</span>
        </a>
      </li>
    </ul>
   

</template>

<script>

  export default{
    props:["One"]
  
  }
</script>


<style scoped>
     #main .information1 {
    padding: 0 0.48rem; }
    #main .information1 li {
      padding-left: 1.2rem;
      border-top: 0.01rem solid #eee; }
      #main .information1 li a p {
        float: left;
        font: 700 0.4rem/1.49rem "";
        color: #333; }
      #main .information1 li a img {
        display: block;
        float: right;
        width: 0.2rem;
        height: 1.49rem; }
      #main .information1 li a span {
        float: right;
        margin-right: 0.3rem;
        font: 700 0.34rem/1.49rem "";
        color: #999; }
    #main .information1 li:nth-child(1) {
      background: url("../../public/img/personinfo_t4.png") no-repeat;
      border-top: 0.01rem solid #fff;
      background-size: 0.72rem 1.49rem; }
    #main .information1 li:nth-child(2) {
      background: url("../../public/img/personinfo_t5.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information1 li:nth-child(3) {
      background: url("../../public/img/personinfo_t6.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information1 li:nth-child(4) {
      background: url("../../public/img/personinfo_t7.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information1 li:nth-child(5) {
      background: url("../../public/img/personinfo_t8.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information1 li:nth-child(6) {
      background: url("../../public/img/personinfo_t9.png") no-repeat;
      background-size: 0.72rem 1.49rem; }
    #main .information1 li:nth-child(7) {
      background: url("../../public/img/personinfo_t10.png") no-repeat;
      background-size: 0.72rem 1.49rem; }

</style>
