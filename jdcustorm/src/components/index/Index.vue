<template>
	<div>
		<indexbanner :Indexlist="Indexlist"></indexbanner>
		<indexmain></indexmain>
		<indexfooter></indexfooter>
	</div>
</template>

<script type="text/ecmascript-6">
    import Indexbanner from "./Indexbanner.vue";
    import Indexmain from "./Indexmain.vue";
    import Indexfooter from "./Indexfooter.vue";
	import shujufetch from "../../../fetch/shujufetch.js";
    export default{
        components:{
            Indexbanner,
            Indexmain,
            Indexfooter
    	},
    	data:function(){
            return{
            	Indexlist:[],
                main:[]
			}
		},
		methods:{
    	    initData:function(){
    	        shujufetch.getShujuinfo((data)=>{
    	            this.Indexlist=data.banner;
				})
			}
		},
		created:function(){
    	    this.initData();
		}
    }
</script>
