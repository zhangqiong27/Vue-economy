<template>
   <div class="baitiao">
   		<div class="baitiao_t">
   			<a href="#">
   				<p>{{whitebarbaitiao.p1}}</p>
   				<span>{{whitebarbaitiao.span1}}</span>
   			</a>
   		</div>
   		<div class="baitiao_b">
   			<div class="clear">
   				<div class="baitiao_b_l">
   					<a href="#">
   						<p>{{whitebarbaitiao.p2}}</p>
   						<span>{{whitebarbaitiao.span2}}</span>
   					</a>
   				</div>
   				<div class="baitiao_b_r">
   					<a href="#">
   						<p>{{whitebarbaitiao.p3}}</p>
   						<span>{{whitebarbaitiao.span3}}</span>
   					</a>
   				</div>
   			</div>
   			<a class="jh" href="#">{{whitebarbaitiao.a}}</a>
   		</div>
   	</div>
</template>
<script type="text/ecmascript-6">
    export default{
         props:["whitebarbaitiao"]
    }
</script>
<style scoped>

.baitiao {
  margin-top: 1.64rem;
  padding: 0 0.48rem; }
  .baitiao .baitiao_t {
    padding: 0.69rem 0 0.94rem;
    text-align: center;
    border-bottom: 0.01rem solid #eee; }
    .baitiao .baitiao_t p {
      letter-spacing: 0.1rem;
      font: 700 0.55rem/0.80rem "";
      color: #333; }
    .baitiao .baitiao_t span {
      font: 700 0.36rem/0.6rem "";
      color: #666; }
  .baitiao .baitiao_b {
    padding: 0 0.8rem 0.63rem 0.8rem; }
    .baitiao .baitiao_b .clear {
      padding: 0.64rem 0 0.62rem 0;
      text-align: center; }
      .baitiao .baitiao_b .clear .baitiao_b_l {
        float: left; }
        .baitiao .baitiao_b .clear .baitiao_b_l p {
          font: 700 0.48rem/0.8rem "";
          color: #ff8315; }
        .baitiao .baitiao_b .clear .baitiao_b_l span {
          font: 700 0.36rem/0.68rem "";
          color: #999; }
      .baitiao .baitiao_b .clear .baitiao_b_r {
        float: right; }
        .baitiao .baitiao_b .clear .baitiao_b_r p {
          font: 700 0.48rem/0.8rem "";
          color: #666; }
        .baitiao .baitiao_b .clear .baitiao_b_r span {
          font: 700 0.36rem/0.68rem "";
          color: #999; }
    .baitiao .baitiao_b .jh {
      text-align: center;
      display: block;
      width: 100%;
      height: 1.35rem;
      font: 700 0.4rem/1.35rem "";
      color: #fff;
      background: #4e8dee;
      border-radius: 10px; }

 </style>