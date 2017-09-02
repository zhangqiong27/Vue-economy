<template>
    <footer>
        <div class="module">
            <router-link to="/Index"><img src="../../public/img/myself.png"/></router-link>
            <router-link to="/Trea"><img src="../../public/img/treasure.png"/></router-link>
            <router-link to="/WhiteBar"><img src="../../public/img/whitebar.png"/></router-link>
            <router-link to="/pro"><img src="../../public/img/life_checked.png"/></router-link>
            <router-link to="/Dynamic"><img src="../../public/img/dynamic.png"/></router-link>
        </div>
    </footer>

</template>

<script type="text/ecmascript-6">
    export default{


    }

</script>

<style scoped>
    footer {
        width: 100%;
        height: 1.1rem;
        position: fixed;
        bottom: 0;
        padding: 0.22rem 0 0.18rem;
        background: white;
        border-top: 0.01rem solid #f5f5f5;
        z-index: 999; }
    footer .module {
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between; }
    footer .module a img {
        width: 1.2rem;
        height: 1.1rem; }

</style>