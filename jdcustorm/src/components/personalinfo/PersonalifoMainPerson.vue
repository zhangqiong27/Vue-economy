<template>
    
	<div class="person">
      <div class="via_name clear">
        <img class="via" :src="portrait.src" :alt="portrait.alt">
        <h2>{{portrait.name}}</h2>
        <p>{{portrait.real}}</p>
        <span>{{portrait.id}}</span>
        <a href="#">
          <img class="more" src="../../public/img/personinfo_more.png" alt="右箭头">
        </a>
      </div>
      <ul>
        <li>
          <a href="#">
            <img src="../../public/img/personinfo_t1.png" alt="优惠券">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../public/img/personinfo_t2.png" alt="浏览记录">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../public/img/personinfo_t3.png" alt="关注和收藏">
          </a>
        </li>
      </ul>
  </div>
   

</template>

<script>
  export default{
    
    
    props:['portrait'],

    
  
  }
</script>

<style scoped>
	
   #main .person {
    padding: 0.58rem 0.48rem 0.32rem 0.48rem;
    border-bottom: 0.02rem solid #eee; }
    #main .person .via_name {
      height: 1.44rem;
      margin-bottom: 0.94rem; }
      #main .person .via_name .via {
        float: left;
        display: block;
        width: 1.44rem;
        height: 1.44rem;
        margin-right: 0.35rem; }
      #main .person .via_name h2 {
        font: 0.42rem/0.78rem "";
        color: #444;
        width: 7rem;
        float: left; }
      #main .person .via_name p {
        text-align: center;
        width: 1.44rem;
        height: 0.48rem;
        background: #42bf95;
        border-radius: 0.3rem;
        font: 0.24rem/0.48rem "";
        color: #fff;
        float: left; }
      #main .person .via_name span {
        display: block;
        margin-left: 0.1rem;
        text-align: center;
        width: 2.04rem;
        height: 0.48rem;
        background: #f1f1f1;
        border-radius: 0.3rem;
        float: left;
        font: 0.24rem/0.48rem "";
        color: #b3b3b3; }
      #main .person .via_name a {
        display: block; }
        #main .person .via_name a .more {
          display: block;
          width: 0.2rem;
          height: 1.44rem; }
    #main .person ul {
      display: flex;
      justify-content: space-between; }
      #main .person ul li {
        flex: 0 0 32%; }
        #main .person ul li a img {
          display: block;
          width: 2.62rem;
          height: 1.17rem; }

</style>
