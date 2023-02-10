<template>
  <div class="container">
    <data-ratio
        v-for="item in items"
        :id="item._id"
        :name="item.name"
        :description="item.description"
        :difficulty="item.difficulty"
        :price="item.price"
        :key="item.id"
        :img= "item.picture"
        :url="item.url">
    </data-ratio>
  </div>
</template>
<script>
import DataRatio from "@/components/data-ratio.vue";
import axios from "axios";
export default {
  name: 'RecipesListView',
  components: {
    DataRatio
  },
  data () {
    return {
      items: {},
    }
  },
  mounted () {
    axios.get('https://projet-node-js.vercel.app/recettes').then(response => (this.items = response.data, console.log(this.items)))
  },
}
</script>
<style>

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
