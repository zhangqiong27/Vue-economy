<template>
	<div>
		<indexmainlogin></indexmainlogin>
		<indexmainfenjiexian></indexmainfenjiexian>
		<indexmaingift :gift="gift"></indexmaingift>
		<indexmainfenjiexian></indexmainfenjiexian>
		<indexmaingiftbag :giftbag="giftbag"></indexmaingiftbag>
		<indexmainbeijing :beijing="beijing"></indexmainbeijing>
	</div>
</template>
<script type="text/ecmascript-6">
	
    import Indexmainlogin from "./Indexmainlogin.vue";
    import Indexmainfenjiexian from "./Indexmainfenjiexian.vue";
    import Indexmaingift from "./Indexmaingift.vue";
    import Indexmaingiftbag from "./Indexmaingiftbag.vue";
    import Indexmainbeijing from "./Indexmainbeijing.vue";
    import shujufetch from "../../../fetch/shujufetch.js";
    export default{
    	components:{
    		Indexmainlogin,
    		Indexmainfenjiexian,
    		Indexmaingift,
    		Indexmaingiftbag,
    		Indexmainbeijing
    	},
        data:function(){
            return{
				gift:[],
				giftbag:[],
				beijing:""
            }
        },
        methods:{
            initData:function(){
                shujufetch.getShujuinfo((data)=>{
                    this.gift=data.gift;
                    this.giftbag=data.giftbag;
                    this.beijing=data.indexbeijing;
//                    console.log(this.beijing)
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
