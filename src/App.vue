<template>
  <div id="app">
    <HeaderMain></HeaderMain>
    <router-view></router-view>

  </div>
</template>

<script>
import axios from "axios";
import HeaderMain from "@/components/header.vue";
export default {
  name: 'App',
  components: {
    HeaderMain
  },
  data () {
    return {
      items: null,
    }
  },
  mounted () {
    axios.get('https://projet-node-js.vercel.app/recettes').then(response => (this.items = response.data, console.log(this.items)))
  },
  methods: {
    menuAddRecette() {
      this.$router.push('/addRecette');
    }
  }
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
