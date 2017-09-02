<template>
<div>
    <section id="main">
        <dyn-gz-btn></dyn-gz-btn>
        <dyn-register-cont ></dyn-register-cont>
    </section>
</div>

</template>

<script type="text/ecmascript-6">

    import DynGzBtn from "./DynGzBtn.vue";
    import DynRegisterCont from "./DynRegisterCont.vue";
    export default {
        components:{
            DynGzBtn,
            DynRegisterCont
        }
    }
</script>
<style scoped>
    #main { margin-top: 1.64rem; }
</style>