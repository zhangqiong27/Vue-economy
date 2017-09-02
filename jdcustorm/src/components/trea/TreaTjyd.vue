<template>
  <div class="tjyd">
			    <h2>推荐阅读</h2>
		        <trea-tjyd1 :treatjyd1="treatjyd1"></trea-tjyd1>
		        <trea-tjyd2 :treatjyd2="treatjyd2"></trea-tjyd2>
		        <trea-tjyd3 :treatjyd3="treatjyd3"></trea-tjyd3>
		</div>
</template>

<script type="text/ecmascript-6">
import TreaTjyd1 from "./TreaTjyd1.vue";
import TreaTjyd2 from "./TreaTjyd2.vue";
import TreaTjyd3 from "./TreaTjyd3.vue";

import shujufetch from "../../../fetch/shujufetch.js";
    export default{
      
       components:{       
          TreaTjyd1,
          TreaTjyd2,
          TreaTjyd3            
        },
     data:function(){
        return {
         
              treatjyd1:[],
              treatjyd2:[],
              treatjyd3:[],
               
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            this.treatjyd3=data.treatjyd3;
            this.treatjyd2=data.treatjyd2;
            this.treatjyd1=data.treatjyd1;

         })
        }

      }, 
      created:function(){
       this.initData(); 
      }  

    }
</script>
<style scoped>
.tjyd h2 {
    padding-left: 0.48rem;
    font: 700 0.42rem/1.5rem "";
    color: #333; }
 
 
 

 </style>

