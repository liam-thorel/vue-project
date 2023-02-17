<template>
  <div class="container">
    <LoadingSpinner v-show="items.length === 0"></LoadingSpinner>
    <input class = "searchbar" type="text" v-model="search" placeholder="Search ratio..." />
    <CardLink v-for="item in filteredList" :redirect="redirectMode" :key="item._id" :id="item._id">
      <data-ratio
          :id="item._id"
          :name="item.name"
          :description="item.description"
          :difficulty="item.difficulty"
          :price="item.price"
          :img= "item.picture"
          :url="item.url">
      </data-ratio>
    </CardLink>


    <input type="button" v-on:click="toogleMode()" class="styleButton" value="Comparer 2 produits">
  </div>
</template>
<script>
import DataRatio from "@/components/data-ratio.vue";
import axios from "axios";
import LoadingSpinner from "@/components/loadingSpinner.vue";
import CardLink from "@/components/CardLink.vue";
export default {
  name: 'RecipesListView',
  components: {
    CardLink,
    DataRatio,
    LoadingSpinner
  },

  data () {
    return {
      search: '',
      items: [],
      redirectMode : true,
    }
  },
  mounted () {
    axios.get('https://projet-node-js.vercel.app/recettes').then(response => (this.items = response.data, console.log(this.items)))
  },computed: {
    filteredList() {
      return this.items.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  methods: {
    toogleMode() {
      this.redirectMode = !this.redirectMode;
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
.styleButton{
  width: 25%;
  height: 50px;
  font-size: 20px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: lightgray;
}
.styleButton:active{
  background-color: gray;
}
</style>
