<template>
  <div id="app">
    <header class="header">
      <h1>Recettes</h1>
    </header>
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

export default {
  name: 'App',
  components: {
    DataRatio
  },
  data () {
    return {
      items: null,
    }
  },
  mounted () {
    axios.get('http://localhost:3000/recettes').then(response => (this.items = response.data, console.log(this.items)))
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
.header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
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
