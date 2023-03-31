<template>
  <div class="container">
    <LoadingSpinner v-show="items.length === 0"></LoadingSpinner>
    <button v-show="isConnected" class="btn btn-primary" @click="add = !add">Ajouter une recette</button>
    <CreateOrEdit
        v-show="add"
    />
    <input class = "searchbar" type="text" v-model="search" placeholder="Search ratio..." />
    <div v-for="item in filteredList" :key="item._id" :id="item._id">
    <CardLink :redirect="redirectMode" :id="item._id"  @click="prepareComparaison(item._id)">
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
    <div class="center-button" v-show="isConnected">
      <button @click="deleteItem(item._id)" :id="item._id">Supprimer {{item.name}}</button>
    </div>
    </div>


    <input type="button" v-on:click="toogleMode()" class="styleButton" :value="this.mode">
  </div>
</template>
<script>
import DataRatio from "@/components/data-ratio.vue";
import axios from "axios";
import LoadingSpinner from "@/components/loadingSpinner.vue";
import CardLink from "@/components/CardLink.vue";
import Vue from "vue";
import CreateOrEdit from "@/components/CreateOrEdit.vue";
export default {
  name: 'RecipesListView',
  components: {
    CreateOrEdit,
    CardLink,
    DataRatio,
    LoadingSpinner
  },

  data () {
    return {
      search: '',
      items: [],
      redirectMode : true,
      mode : "Mode Sélection",
      tabIdComparaison : [],
      add : false
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
    isConnected(){
      return Vue.prototype.$jwt !== '';
    }
  },
  methods: {
    toogleMode() {
      this.redirectMode = !this.redirectMode;
      if(this.redirectMode){
        this.mode = "Mode Sélection";
      }else{
        this.mode = "Mode Comparaison";
      }
    },
    prepareComparaison(id){
      if(this.tabIdComparaison.indexOf(id) !==-1){
        this.$delete(this.tabIdComparaison, this.tabIdComparaison.indexOf(id));
        return;
      }
      this.tabIdComparaison.push(id);

      if(this.tabIdComparaison.length === 2){
        this.$router.push({ name: 'Compare', params: { id1: this.tabIdComparaison[0], id2: this.tabIdComparaison[1] } });
      }
    },
    deleteItem(id){
      const config ={
        headers: {
          'Authorization': 'Bearer ' + Vue.prototype.$jwt
        }
      }
      axios.delete('https://projet-node-js.vercel.app/recettes/delete/'+id,config).then(response => this.deleteItemVisuel(response.status,id))
      //this.items = this.items.filter(item => item._id !== id);
    },
    deleteItemVisuel(status,id){
      if(status === 200){
        this.items = this.items.filter(item => item._id !== id);
      }
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
