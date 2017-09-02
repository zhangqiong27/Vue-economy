<template>
    
    <ul class="information5">
      <li class="clear">
        <a href="#">
          <p>{{Five.titles}}</p>
          <img v-bind:src="Five.src" v-bind:alt="Five.alt">
        </a>
      </li>
    </ul>
   

</template>

<script>

  export default{
    props:["Five"]
  
  }
</script>

<style scoped>
	
 #main .information5 {
    padding: 0 0.48rem; }
    #main .information5 li {
      padding-left: 1.2rem;
      border-top: 0.01rem solid #eee;
      background-size: 0.72rem 1.49rem; }
      #main .information5 li a p {
        float: left;
        font: 700 0.4rem/1.49rem "";
        color: #333; }
      #main .information5 li a img {
        display: block;
        float: right;
        width: 0.2rem;
        height: 1.49rem; }
      #main .information5 li a span {
        float: right;
        margin-right: 0.3rem;
        font: 700 0.34rem/1.49rem "";
        color: #999; }
    #main .information5 li:nth-child(1) {
      background: url("../../public/img/personinfo_t22.png") no-repeat;
      background-size: 0.72rem 1.49rem;
      border-top: 0.01rem solid #fff; }

</style>
