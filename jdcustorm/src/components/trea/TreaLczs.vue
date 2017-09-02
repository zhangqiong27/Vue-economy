<template>
   <div class="lczs">
			<h2>理财助手</h2>
			<ul class="clear">
				<li  v-for="n in trealczs">
					<a href="#">
						<img :src="n.pic" alt="n.auth">
						<p>{{n.auth}}</p>
						<span>{{n.span}}</span>
					</a>
				</li>
				
			</ul>
		</div>
</template>

<script type="text/ecmascript-6">
    export default{
       props:["trealczs"]

    }
</script>
<style scoped>
 .lczs h2 {
    padding-left: 0.48rem;
    font: 700 0.42rem/1.5rem "";
    color: #333; }
   .lczs ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; }
     .lczs ul li {
      flex: 0 0 46.5%;
      padding: 0.62rem 0 0.62rem 0.34rem;
      border-bottom: 0.01rem solid #eee;
      border-right: 0.01rem solid #eee; }
       .lczs ul li a img {
        display: block;
        width: 0.7rem;
        height: 1rem;
        float: left; }
       .lczs ul li a p {
        float: left;
        width: 3.5rem;
        padding-left: 0.34rem;
        font: 700 0.4rem/0.54rem "";
        color: #444; }
       .lczs ul li a span {
        float: left;
        width: 3.5rem;
        padding-left: 0.34rem;
        font: 700 0.3rem/0.46rem "";
        color: #999; }
     .lczs ul li:nth-child(2) {
      border-right: 0.01rem solid #fff; }
     .lczs ul li:nth-child(3) {
      border-bottom: 0.01rem solid #fff; }
     .lczs ul li:nth-child(4) {
      border-bottom: 0.01rem solid #fff;
      border-right: 0.01rem solid #fff; }

 </style>

