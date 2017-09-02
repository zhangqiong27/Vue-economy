<template>
   <div class="swiper-container whitebar_banner">
   			<ul class="swiper-wrapper" >
   				<whitebar-swiper :n="n" key="index" v-for="n in whitebarswiper"></whitebar-swiper>
   			</ul>
   			<div class="swiper-pagination"></div>
   		</div>
</template>
<script type="text/ecmascript-6">

import WhitebarSwiper from "./WhitebarSwiper1.vue";
import shujufetch from "../../../fetch/shujufetch.js";

    export default{

        components:{ 

            WhitebarSwiper ,    
        },
     data:function(){
        return {
         
                 whitebarswiper:[],
              
               
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            this.whitebarswiper=data.whitebarswiper;

         })
        }

      }, updated:function(){
  var mySwiper1 = new Swiper('.whitebar_banner', {
    autoplay: 3000,//可选选项，自动滑动
    pagination: '.swiper-pagination',
    loop: true,
    autoplayDisableOnInteraction: false,
    observer:true,
    observeParents:true
  });
     },
      created:function(){
       this.initData(); 
      }  

    }
</script>
<style scoped>



 </style>
