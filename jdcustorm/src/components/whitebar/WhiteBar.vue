<template>
<div>
<whitebar-header :whitebarheader="whitebarheader"></whitebar-header>
<whitebar-baitiao :whitebarbaitiao="whitebarbaitiao"></whitebar-baitiao>
<whitebar-swiper :whitebarswiper="whitebarswiper"></whitebar-swiper>
<whitebar-fenjiexian></whitebar-fenjiexian>
<whitebar-menu :whitebarmenu="whitebarmenu"></whitebar-menu>

<whitebar-fenjiexian></whitebar-fenjiexian>
<whitebar-mrmx :whitebarmrmx="whitebarmrmx"></whitebar-mrmx>
<whitebar-fenjiexian></whitebar-fenjiexian>
<whitebar-baijian :whitebarbaijian="whitebarbaijian"></whitebar-baijian>
<whitebar-fenjiexian></whitebar-fenjiexian>
<whitebar-sgzhp :whitebarsgzhp="whitebarsgzhp"></whitebar-sgzhp>
<whitebar-fenjiexian ></whitebar-fenjiexian>
<whitebar-fqjx :whitebarfqjx="whitebarfqjx"></whitebar-fqjx>
<whitebar-fenjiexian></whitebar-fenjiexian>
<whitebar-baiwu :whitebarbaiwu="whitebarbaiwu"></whitebar-baiwu>
<whitebar-fenjiexian ></whitebar-fenjiexian>
<whitebar-dszq :whitebardszq="whitebardszq"></whitebar-dszq>
<whitebar-beijing :whitebarbeijing="whitebarbeijing"></whitebar-beijing>
<whitebar-footer :whitebarfooter="whitebarfooter"></whitebar-footer>

</div>
</template>

<script type="text/ecmascript-6">




import WhitebarHeader from "./WhitebarHeader.vue";
import WhitebarBaitiao from "./WhitebarBaitiao.vue";
import WhitebarSwiper from "./WhitebarSwiper.vue";
import WhitebarFenjiexian from "./WhitebarFenjiexian.vue";
import WhitebarMenu from "./WhitebarMenu.vue";
import WhitebarMrmx from "./WhitebarMrmx.vue";
import WhitebarBaijian from "./WhitebarBaijian.vue";
import WhitebarSgzhp from "./WhitebarSgzhp.vue";
import WhitebarFqjx from "./WhitebarFqjx.vue";
import WhitebarBaiwu from "./WhitebarBaiwu.vue";
import WhitebarDszq from "./WhitebarDszq.vue";
import WhitebarBeijing from "./WhitebarBeijing.vue";
import WhitebarFooter from "./WhitebarFooter.vue";
    
import shujufetch from "../../../fetch/shujufetch.js";

    export default{
        components:{
            WhitebarHeader, 
           WhitebarBaitiao,
          WhitebarSwiper,
          WhitebarFenjiexian,
         WhitebarMenu,
         WhitebarMrmx, 
        WhitebarBaijian, 
        WhitebarSgzhp ,
        WhitebarFqjx ,
        WhitebarBaiwu ,
        WhitebarDszq ,
        WhitebarBeijing ,
        WhitebarFooter,
        },
data:function(){
        return {
            whitebarheader:[],
            whitebarbaitiao:[],
            whitebarswiper:[],
              whitebarfenjiexian:[],
              whitebarmenu:[],
               whitebarmrmx:[],
               whitebarbaijian:[],
                whitebarsgzhp:[],
                 whitebarfqjx:[],
                 whitebarbaiwu:[],
                 whitebardszq:[],
                 whitebarbeijing:[],
                 whitebarfooter:[]
               
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            
            this.whitebarheader=data.whitebarheader;
            this.whitebarbaitiao=data.whitebarbaitiao;
            this.whitebarswiper=data.whitebarswiper;
             this.whitebarfenjiexian=data.whitebarfenjiexian;
            this.whitebarmenu=data.whitebarmenu;
            this.whitebarmrmx=data.whitebarmrmx;
            this.whitebarbaijian=data.whitebarbaijian;
            this.whitebarsgzhp=data.whitebarsgzhp;
            this.whitebarfqjx=data.whitebarfqjx;
             this.whitebarbaiwu=data.whitebarbaiwu;
            this.whitebardszq=data.whitebardszq;
            this.whitebarbeijing=data.whitebarbeijing;
             this.whitebarfooter=data.whitebarfooter;
            

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