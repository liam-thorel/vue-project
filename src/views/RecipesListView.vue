<template>
  <div class="container">
    <input class = "searchbar" type="text" v-model="search" placeholder="Search ratio..." />
    <data-ratio
        v-for="item in filteredList"
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
      search: '',
      items: [],
    }
  },
  mounted () {
    axios.get('https://projet-node-js.vercel.app/recettes').then(response => (this.items = response.data, console.log(this.items)))
  },computed: {
    filteredList() {
      return this.items.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
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
.searchbar {
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
}
</style>
