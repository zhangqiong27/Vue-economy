<template>
    <div>
    	<personalifo-header></personalifo-header>
		<personalifo-main></personalifo-main>
    </div>
	

</template>

<script type="text/ecmascript-6">
	

    import PersonalifoHeader from "./PersonalifoHeader.vue";
    import PersonalifoMain from "./PersonalifoMain.vue";

    import shujufetch from "../../../fetch/shujufetch.js";

    export default{
        components:{
            PersonalifoHeader,
            PersonalifoMain
        }
    }
    
</script>

<style scoped>
	

</style>
