<template>
    <div>
       <personalhead :personalhead="personalhead"></personalhead>
        <personalmain :personalmain="personalmain"></personalmain>
        <personalfooter></personalfooter>
    </div>
</template>
<script type="text/ecmascript-6">
    import "../../public/js/jquery-1.8.3.min.js";
    import "../../public/js/swiper.animate1.0.2.min.js";
    import "../../public/js/swiper.js";
    import "../../public/css/swiper.css";
    import "../../public/css/animate.css";
    import personalhead from "./personalhead.vue";
    import personalmain from "./personalmain.vue";
    import personalfooter from "./personalfooter.vue";
    import shujufetch from "../../../fetch/shujufetch.js";
    export default{
        components:{
            personalhead,
            personalmain,
            personalfooter
        },
        data:function(){
            return{
                personalhead:[],
                personalmain:[],


            }
        },
        methods:{
            initData:function(){
                shujufetch.getShujuinfo((data)=>{
                    this.personalhead=data.personalhead;
                    this.personalmain=data.personalmain;
                })
            }
        },
        created:function(){
            this.initData();
        }
    }
</script>
<style scoped>
    ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #d5d5d5; }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #d5d5d5;
        opacity: 1; }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #d5d5d5;
        opacity: 1; }

    :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #d5d5d5; }
</style>