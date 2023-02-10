<template>
  <div id="app">
    <HeaderMain></HeaderMain>
    <div class="container">
      <data-ratio
          v-for="item in items"
          :id="item.id"
          :name="item.name"
          :description="item.description"
          :difficulty="item.difficulty"
          :price="item.price"
          :key="item.id"
          :img= "item.picture"
          :url="item.url">
      </data-ratio>
    </div>
  </div>
</template>

<script>
import DataRatio from "@/components/data-ratio.vue";
import axios from "axios";
import HeaderMain from "@/components/header.vue";
export default {
  name: 'App',
  components: {
    HeaderMain,
    DataRatio
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

.container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
