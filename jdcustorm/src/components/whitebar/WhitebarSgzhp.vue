<template>
 <div class="sgzhp">
			<div class="title">
				<h2>时光杂货铺</h2>
				<span>白条创意产品</span>
				<i></i>
			</div>
			<ul class="product">
				<li v-for="n in whitebarsgzhp">
					<a href="#">
					<img :src="n.pic" alt="n.auth"/>
						<p>{{n.auth}}</p>
						<span>{{n.span}}</span>
					</a>
				</li>
			
			</ul>
			<a class="more" href="#">查看更多</a>
		</div>
</template>
<script type="text/ecmascript-6">
    export default{
props:["whitebarsgzhp"],
    }
</script>
<style scoped>

.title {
  padding: 0.47rem 0  0.54rem 0;
  text-align: center; }
  .title h2 {
    font: 700 0.42rem/0.67rem "";
    color: #333; }
  .title span {
    font: 700 0.32rem/0.55rem "";
    color: #999; }
  .title i {
    margin-top: 0.27rem;
    margin-left: 5.02rem;
    display: block;
    width: 0.75rem;
    height: 0.03rem;
    background: #4b8aeb; }

.product {
  padding: 0 0.48rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; }
  .product li {
    flex: 0 0 31.7%; }
    .product li a {
      letter-spacing: 0.06rem; }
      .product li a img {
        display: block;
        width: 100%;
        height: 3.12rem; }
      .product li a p {
        margin-top: 0.31rem;
        font: 700 0.36rem/0.55rem "";
        color: #333; }
      .product li a span {
        display: block;
        font: 700 0.28rem/0.38rem "";
        color: #999;
        margin-bottom: 0.64rem; }

.more {
  display: block;
  height: 1.5rem;
  border-top: 0.01rem solid #eee;
  font: 600 0.36rem/1.49rem "";
  color: #4d8dee;
  text-align: center; }

.sgzhp .product li:first-child {
  flex: 0 0 65.854%; }
.sgzhp .product li:nth-child(3) a span, .sgzhp .product li:nth-child(4) a span, .sgzhp .product li:nth-child(5) a span {
  color: #ff8224; }

 </style>