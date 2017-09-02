<template>
<div>
<trea-header :treaheader="treaheader"></trea-header>
<trea-banner :treabanner="treabanner"></trea-banner>
<trea-nav :treanav="treanav" ></trea-nav>
<trea-fenjiexian ></trea-fenjiexian>
<trea-dqjx :treadqjx="treadqjx"></trea-dqjx>
<trea-fenjiexian ></trea-fenjiexian>
<trea-jjjx :treajjjx="treajjjx"></trea-jjjx>
<trea-fenjiexian ></trea-fenjiexian>
<trea-baoxian :treabaoxian="treabaoxian"></trea-baoxian>
<trea-fenjiexian ></trea-fenjiexian>
<trea-lczs :trealczs="trealczs"></trea-lczs>
<trea-fenjiexian ></trea-fenjiexian>
<trea-tslc :treatslc="treatslc"></trea-tslc>
<trea-fenjiexian ></trea-fenjiexian>
<trea-tjyd :treatjyd="treatjyd"></trea-tjyd>
<trea-fenjiexian ></trea-fenjiexian>
<trea-gdxx :treagdxx="treagdxx"></trea-gdxx>
<trea-beijing :treabeijing="treabeijing"></trea-beijing>
<trea-footer :treafooter="treafooter"></trea-footer>
</div>
</template>

<script type="text/ecmascript-6">




import TreaBanner from "./TreaBanner.vue";
import TreaBaoxian from "./TreaBaoxian.vue";
import TreaBeijing from "./TreaBeijing.vue";
import TreaDqjx from "./TreaDqjx.vue";
import TreaFenjiexian from "./TreaFenjiexian.vue";
import TreaFooter from "./TreaFooter.vue";
import TreaGdxx from "./TreaGdxx.vue";
import TreaHeader from "./TreaHeader.vue";
import TreaJjjx from "./TreaJjjx.vue";
import TreaNav from "./TreaNav.vue";
import TreaTjyd from "./TreaTjyd.vue";
import TreaLczs from "./TreaLczs.vue";
import TreaTslc from "./TreaTslc.vue";

import shujufetch from "../../../fetch/shujufetch.js";
    export default{
        components:{
            TreaBanner, 
           TreaBaoxian,
          TreaBeijing,
          TreaDqjx,
            TreaFenjiexian,
             TreaFooter, 
            TreaGdxx, 
            TreaHeader ,
            TreaJjjx ,
            TreaNav ,
            TreaTjyd ,
            TreaTslc ,
            TreaLczs
            
        },
     data:function(){
        return {
            treabanner:[],
            treabaoxian:[],
            treabeijing:[],
              treadqjx:[],
              treafenjiexian:[],
               treafooter:[],
               treagdxx:[],
                treaheader:[],
                 treajjjx:[],
                 treanav:[],
                 treatjyd:[],
                 treatslc:[],
                 trealczs:[]
               
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            
            this.treabanner=data.treabanner;
            this.treabaoxian=data.treabaoxian;
            this.treabeijing=data.treabeijing;
             this.treadqjx=data.treadqjx;
            this.treafenjiexian=data.treafenjiexian;
            this.treafooter=data.treafooter;
            this.treagdxx=data.treagdxx;
            this.treaheader=data.treaheader;
            this.treajjjx=data.treajjjx;
             this.treanav=data.treanav;
            this.treatjyd=data.treatjyd;
            this.treatslc=data.treatslc;
             this.trealczs=data.trealczs;
            

         })
        }

      }, 
      created:function(){
       this.initData(); 
      }  
    }
</script>
<style scoped>
 
	

 </style>