<template>
    
    <div id="main">
    	<personalifo-main-person :portrait="portrait"></personalifo-main-person>
    	<Fenjiexian></Fenjiexian>
    	<main-information-one :One="One"></main-information-one>
    	<Fenjiexian></Fenjiexian>
    	<main-information-two :Two="Two"></main-information-two>
    	<Fenjiexian></Fenjiexian>
    	<main-information-three :Three="Three"></main-information-three>
    	<Fenjiexian></Fenjiexian>
    	<main-information-four :Four="Four"></main-information-four>
    	<Fenjiexian></Fenjiexian>
    	<main-information-five :Five="Five"></main-information-five>
    
    </div>
	

</template>

<script>
	

    import PersonalifoMainPerson from "./PersonalifoMainPerson.vue";
    import Fenjiexian from "./Fenjiexian.vue";
    import MainInformationOne from "./MainInformationOne.vue";
    import MainInformationTwo from "./MainInformationTwo.vue";
    import MainInformationThree from "./MainInformationThree.vue";
    import MainInformationFour from "./MainInformationFour.vue";
    import MainInformationFive from "./MainInformationFive.vue";

    import shujufetch from "../../../fetch/shujufetch.js";

    export default{
        components:{
            PersonalifoMainPerson,
            Fenjiexian,
            MainInformationOne,
            MainInformationTwo,
            MainInformationThree,
            MainInformationFour,
            MainInformationFive
            
        },
        data:function(){
           return {
                portrait:[],
                One:[],
                Two:[],
                Three:[],
                Four:[],
                Five:[]  
           }
        },
        methods: {
            initData:function(){
               shujufetch.getShujuinfo((data)=>{
                    this.portrait=data.portrait;
                   this.One=data.One;
                   this.Two=data.Two;
                   this.Three=data.Three;
                   this.Four=data.Four;
                   this.Five=data.Five;
               })
            }
        },
        mounted: function () {
            this.initData();
        }
        
    }
    
</script>

<style scoped>
	
	#main {
  margin-top: 1.4rem; }

</style>
