<template>
    
<div>
     <div class="swiper-container lcqn_banner">
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <a href="#">
                        <img :src="lcqnbanner.src" :alt="lcqnbanner.alt">
                        <p>{{lcqnbanner.p}}</p>
                        <span>{{lcqnbanner.span}}</span>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img :src="lcqnbanner.src" :alt="lcqnbanner.alt">
                        <p>{{lcqnbanner.p}}</p>
                        <span>{{lcqnbanner.span}}</span>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img :src="lcqnbanner.src" :alt="lcqnbanner.alt">
                        <p>{{lcqnbanner.p}}</p>
                        <span>{{lcqnbanner.span}}</span>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img :src="lcqnbanner.src" :alt="lcqnbanner.alt">
                        <p>{{lcqnbanner.p}}</p>
                        <span>{{lcqnbanner.span}}</span>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img :src="lcqnbanner.src" :alt="lcqnbanner.alt">
                        <p>{{lcqnbanner.p}}</p>
                        <span>{{lcqnbanner.span}}</span>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="#">
                        <img :src="lcqnbanner.src" :alt="lcqnbanner.alt">
                        <p>{{lcqnbanner.p}}</p>
                        <span>{{lcqnbanner.span}}</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <a class="more" href="#">查看更多定期产品</a>
</div>
       
        
</template>

<script>

  export default{
    props:["lcqnbanner"]
  
  }
</script>

<style scoped>
	
    #lcqn .lcqn_banner {
  width: 100%;
  padding: 0.27rem 0 0.26rem 0; }
  #lcqn .lcqn_banner ul li {
    border-top: none;
    padding: 0.6rem 0 0.6rem 0.49rem;
    height: 1.17rem;
    width: 3.86rem;
    box-shadow: 0 0 20px #ededed; }
    #lcqn .lcqn_banner ul li a img {
      float: left;
      width: 0.46rem;
      height: 1.17rem; }
    #lcqn .lcqn_banner ul li a p {
      float: left;
      padding-left: 0.38rem;
      width: 2.8rem;
      font: 700 0.42rem/0.53rem "";
      color: #444; }
    #lcqn .lcqn_banner ul li a span {
      padding-left: 0.38rem;
      display: block;
      float: left;
      width: 2.8rem;
      margin-top: 0.32rem;
      font: 700 0.3rem/0.32rem "";
      color: #999; }
      
#lcqn .more {
  display: block;
  height: 1.51rem;
  font: 600 0.36rem/1.49rem "";
  color: #4d8dee;
  text-align: center; }

</style>
