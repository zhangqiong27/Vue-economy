<template>
  <div class="gift">
	    <h2>为你准备的见面礼</h2>
	    <a href="#">
	        <img :src="gift" alt="新人礼包">
	    </a>
   </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:["gift"],
    }
</script>
 <style scoped>
 	  .gift {
    padding: 0 0.5rem 0.47rem; }
    .gift h2 {
      font: 700 0.42rem/1.64rem "";
      color: #414141; }
     .gift a img {
      display: block;
      width: 9.8rem;
      height: 2.88rem; }
</style>
