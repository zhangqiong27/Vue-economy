<template>

		 <li class="swiper-slide">
           <img :src="n.pic" alt="n.auth">
            <p>{{n.auth}}</p>
            <span>{{n.span}}<i>{{n.i}}</i></span>
          </li>  
          

</template>
<script type="text/ecmascript-6">

    export default{
      props:["n"],
   

    }
</script>
<style scoped>
  li {
      width: 3.12rem; }
      .mrmx .mrmx_banner ul li img {
        display: block;
        width: 3.12rem;
        height: 3.12rem; }
      li p {
        margin-top: 0.3rem;
        font: 700 0.38rem/0.58rem "";
        color: #000; }
     li span {
        font: 500 0.3rem/0.44rem "";
        color: #fb841c; }
         li span i {
          font-weight: 500;
          color: #999; }


 </style>
