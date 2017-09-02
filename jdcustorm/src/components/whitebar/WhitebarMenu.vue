<template>

  <div class="menu">
			<ul>
				<li  v-for="n in whitebarmenu">
					<a href="#">
								<img :src="n.pic" alt="n.auth"/>
					</a>
				</li>
				
			</ul>
		<!--	<a class="mingdan" href="#">免单中奖名单新鲜出炉啦</a> -->
		<p class="mingdan">免单中奖名单新鲜出炉啦</p>
		</div>
</template>
<script type="text/ecmascript-6">
    export default{
  props:["whitebarmenu"],
    }
</script>
<style scoped>

.menu {
  padding: 0.6rem 0.48rem 0; }
  .menu ul {
    display: flex;
    justify-content: space-between; }
    .menu ul li {
      width: 1.98rem;
      height: 1.75rem; }
      .menu ul li img {
        display: block;
        width: 100%;
        height: 100%; }
  .menu .mingdan {
    display: block;
    text-align: center;
    font: 0.38rem/1.91rem "";
    color: #5188ed;
    background: url("../../public/img/whitebar_t5.png") no-repeat 2rem 0;
    background-size: 0.4rem 1.91rem; }

 </style>