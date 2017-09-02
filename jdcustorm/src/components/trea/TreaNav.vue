<template>
<nav>
		<ul>
			<li v-for="n in treanav">
				<a href="#">
					<img :src="n.pic" alt="n.auth"/>
				</a>
			</li>
			
		</ul>
	</nav>
</template>

<script type="text/ecmascript-6">
    export default{
       props:["treanav"]

    }
</script>
<style scoped>
nav {
  padding: 0 0.48rem;
  border-bottom: 0.01rem solid #eee; }
  nav ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; }
    nav ul li {
      flex: 0 0 25%;
      padding: 0.36rem 0 0.5rem 0; }
      nav ul li a img {
        display: block;
        width: 2.4rem;
        height: 1.72rem; }


 </style>

