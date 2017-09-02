<template>
	<header>
        <router-link to="/Personal">
			<img class="back" src="../../public/img/personinfo_back.png" alt="返回">
		</router-link>
		<p>个人中心</p>
		<a href="#">
			<img class="setting" src="../../public/img/personinfo_setting.png" alt="设置">
		</a>
	</header>
</template>


<style scoped>
	header {
  position: fixed;
  left: 0;
  top: 0;
  width: 9.84rem;
  background: #fff;
  height: 1.39rem;
  padding: 0 0.48rem;
  border-bottom: 0.01rem solid #eee; }
  header .back {
    margin-left: 0.29rem;
    float: left;
    display: block;
    width: 0.36rem;
    height: 1.39rem; }
  header p {
    margin-left: 1.05rem;
    float: left;
    font: 700 0.5rem/1.39rem "";
    color: #666; }
  header .setting {
    float: right;
    display: block;
    width: 0.72rem;
    height: 1.39rem; }
</style>
