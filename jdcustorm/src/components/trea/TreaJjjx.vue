<template>
  <div class="jjjx">
			<h2>基金精选</h2>
			<ul>
				<li v-for="n in treajjjx">
					<a href="#">
						<div class="product-l">
							<p>{{n.p1}}</p>
							<span>{{n.span1}}</span>
						</div>
						<div class="product-r">
							<p>{{n.p2}}</p>
							<span>{{n.span2}}</span>
						</div>
					</a>
				</li>
				
			</ul>
         <trea-jjjx1 :treajjjx1="treajjjx1"></trea-jjjx1>
			<a class="more" href="#">查看更多定期产品</a>
		</div>
</template>

<script type="text/ecmascript-6">
import TreaJjjx1 from "./TreaJjjx1.vue";
import shujufetch from "../../../fetch/shujufetch.js";
    export default{
       props:["treajjjx"],
       
        components:{
            TreaJjjx1 ,
            
        },
     data:function(){
        return {
            treajjjx1:[],
        }
      },
      methods:{
        initData:function(){
         shujufetch.getShujuinfo((data)=>{
            this.treajjjx1=data.treajjjx1;
         })
        }

      }, 
      created:function(){
       this.initData(); 
      }  

    }
</script>
<style scoped>
 .jjjx h2 {
    padding-left: 0.48rem;
    font: 700 0.42rem/1.5rem "";
    color: #333; }
   .jjjx ul {
    padding-left: 0.48rem; }
     .jjjx ul li {
      border-top: 0.01rem solid #eee;
      padding: 0.58rem 0 0.57rem;
      height: 1.23rem; }
       .jjjx ul li a .product-l {
        float: left;
        width: 3.4rem; }
         .jjjx ul li a .product-l p {
          font: 900 0.5rem/0.62rem "";
          color: #f88220; }
         .jjjx ul li a .product-l span {
          display: block;
          margin-top: 0.29rem;
          font: 700 0.32rem/0.32rem "";
          color: #999; }
       .jjjx ul li a .product-r {
        float: left;
        margin-left: 0.43rem;
        border-left: 0.01rem solid #eee;
        padding-left: 0.5rem; }
         .jjjx ul li a .product-r p {
          font: 600 0.44rem/0.68rem "";
          color: #666; }
         .jjjx ul li a .product-r span {
          display: block;
          margin-top: 0.23rem;
          font: 700 0.32rem/0.32rem "";
          color: #999; }
     .jjjx ul li:nth-child(2) a .product-r span {
      color: #ff7e12; }
     .jjjx ul li:nth-child(4) a .product-r span {
      color: #ff7e12; }
      .jjjx .more {
    display: block;
    height: 1.51rem;
    font: 600 0.36rem/1.49rem "";
    color: #4d8dee;
    text-align: center; }
 </style>

