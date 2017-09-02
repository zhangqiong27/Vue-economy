<template>
	
			<ul class="wenzhang">
				<li class="clear"  v-for="n in treatjyd2">
					<a href="#">
						<p>{{n.p}}</p>
						<span>{{n.auth}}</span>
						<img :src="n.pic" alt="n.auth">
					</a>
				</li>
			
				
			</ul>
</template>

<script type="text/ecmascript-6">
    export default{
       props:["treatjyd2"]

    }
</script>
<style scoped>
   .wenzhang {
    padding-left: 0.48rem; }
    .wenzhang li {
      padding: 0.51rem 0 0.51rem 0;
      height: 2.1rem;
      border-bottom: 0.01rem solid #eee; }
      .wenzhang li a {
        display: block; }
        .wenzhang li a p {
          float: left;
          width: 7rem;
          font: 700 0.4rem/0.52rem "";
          color: #444; }
        .wenzhang li a span {
          display: block;
          float: left;
          width: 7rem;
          font: 700 0.3rem/1.06rem "";
          color: #999; }
       .wenzhang li a img {
          display: block;
          margin-top: 0;
          padding-left: 0.3rem;
          width: 2.1rem;
          height: 2.1rem; }
 </style>

