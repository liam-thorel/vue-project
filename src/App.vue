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
          :img="item.img"
          :url="item.url">
        </data-ratio>
    </div>
  </div>
</template>

<script>
import DataRatio from "@/components/data-ratio.vue";

export default {
  name: 'App',
  components: {
    DataRatio
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Poulet cru',
          description: 'description 1',
          difficulty: 1,
          price: 10,
          img: { backgroundImage: "url(https://www.pratique.fr/images/unsized/po/poulet-cru.jpg)" },
          url:"pouletcru"
        },
        {
          id: 2,
          name: 'Poulet pas trop cuit',
          description: 'description 2',
          difficulty: 2,
          price: 20,
          img: { backgroundImage: "url(https://lafermedecollonge.fr/wp-content/uploads/2021/02/Poulet20cuit-900x600.jpg)" },
          url:"pouletpastropcuit"
        },
        {
          id: 3,
          name: 'Poulet cuit',
          description: 'description 3',
          difficulty: 3,
          price: 30,
          img: { backgroundImage: "url(https://lafermedecollonge.fr/wp-content/uploads/2021/02/Poulet20cuit-900x600.jpg)" },
          url:"pouletcuit"
        }
      ]
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
