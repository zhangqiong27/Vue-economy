<template>
 <div class="mrmx">
			<div class="title">
				<h2>每日免息</h2>
				<span>精挑细选 免息放送</span>
				<i></i>
			</div>
			<div class="swiper-container mrmx_banner">
				<ul class="swiper-wrapper">
					<whitebar-mrmx :n="n" key="index" v-for="n in whitebarmrmx"></whitebar-mrmx>
				</ul>
			</div>
		</div>
</template>
<script type="text/ecmascript-6">
import WhitebarMrmx from "./WhitebarMrmx1.vue";
import shujufetch from "../../../fetch/shujufetch.js";
    export default{
  components:{ 

            WhitebarMrmx ,    
        },
     data:function(){
        return {
         
                 whitebarmrmx:[],
              
               
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            this.whitebarmrmx=data.whitebarmrmx;

         })
        }

      },
       updated:function(){
 var mySwiper2 = new Swiper('.mrmx_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
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

.mrmx {
  padding-bottom: 0.86rem; }
  .mrmx .title {
    padding: 0.47rem 0  0.54rem 0;
    text-align: center; }
    .mrmx .title h2 {
      font: 700 0.42rem/0.67rem "";
      color: #333; }
    .mrmx .title span {
      font: 700 0.32rem/0.55rem "";
      color: #999; }
    .mrmx .title i {
      margin-top: 0.27rem;
      margin-left: 5.02rem;
      display: block;
      width: 0.75rem;
      height: 0.03rem;
      background: #4b8aeb; }
  .mrmx .mrmx_banner ul {
    padding-left: 0.48rem; }
   

 </style>