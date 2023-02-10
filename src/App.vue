<template>
  <div id="app">
    <HeaderMain></HeaderMain>
    <router-view></router-view>
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
</style>
