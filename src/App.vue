<template>
  <div id="app">
    <header class="header">
      <div class = "je-prends-de-la-place"></div>
      <h1>Recettes</h1>
      <button class="tomPetiteChienne">Compte<img class id="login-picture" src="./assets/login-icon-smol.png"></button>
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
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.tomPetiteChienne {
  background-color: #f2f2f2;
  border: none;
  color: black;
  padding: 15px 32px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.tomPetiteChienne:hover {
  background-color: #f2f2f2;
  color: dimgrey;
}
.je-prends-de-la-place {
  width: 140px;
}
</style>
