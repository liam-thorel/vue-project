<template>
  <div>
    <div class = "top">
      <h2> {{ recipe.name }} </h2>
      <span class = "difficulte" v-for="index in 5" :key="index">
      <span v-if="index <= recipe.difficulty">★</span>
      <span v-else>☆</span>
    </span>
    </div>
    <p> {{ recipe.description }} </p>
    <p> {{ recipe.price }} </p>
  </div>

</template>
<script>
import axios from "axios";

export default {
  name: 'RecipeDetails',
  data () {
    return {
      recipe: null,
    }
  },
mounted () {
  axios.get('https://projet-node-js.vercel.app/recette/'+this.$route.params.id).then(response => (this.recipe = response.data, console.log(this.recipe)))
},
}

</script>
<style>

</style>
