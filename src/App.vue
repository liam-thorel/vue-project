<template>
  <div id="app">
    <HeaderMain></HeaderMain>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <FooterMain></FooterMain>

  </div>
</template>

<script>
import HeaderMain from "@/components/header.vue";
import FooterMain from "@/components/footer.vue";
export default {
  name: 'App',
  components: {
    FooterMain,
    HeaderMain
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
