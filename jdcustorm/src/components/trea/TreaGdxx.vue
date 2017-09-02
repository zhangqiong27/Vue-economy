<template>
  <div class="gdxx">
			<div class="gdxx_t">
				<p>{{treagdxx.p}}</p>
			</div>
			<trea-gdxx1 :treagdxx1="treagdxx1"></trea-gdxx1>
		</div>
</template>

<script type="text/ecmascript-6">
import TreaGdxx1 from "./TreaGdxx1.vue";
import shujufetch from "../../../fetch/shujufetch.js";
    export default{
       props:["treagdxx"],

       components:{
        
            TreaGdxx1 ,
          
            
        },
     data:function(){
        return {
         
                 treagdxx1:[],
              
               
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            this.treagdxx1=data.treagdxx1;

         })
        }

      }, 
      created:function(){
       this.initData(); 
      }  

    }
</script>
<style scoped>
  .gdxx {
    text-align: center;
    padding-top: 0.6rem;
    padding-bottom: 0.38rem; }
     .gdxx .gdxx_t {
      height: 0.66rem; }
       .gdxx .gdxx_t p {
        font: 600 0.32rem/0.66rem "";
        color: #69b145;
        background: url("../../public/img/treasure_t20.png") no-repeat 3rem 0;
        background-size: 0.6rem 0.66rem; }
    

 </style>

