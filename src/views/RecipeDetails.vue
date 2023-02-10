<template>
  <div class = "body">
    <div class = "recipe-container">
      <div class = "recette">
        <img :src="recipe.picture" alt="image de la recette">
        <div class = "top">
          <h2> {{ recipe.name }} </h2>
          <span class = "difficulte" v-for="index in 5" :key="index">
          <span v-if="index <= recipe.difficulty">★</span>
          <span v-else>☆</span>
          </span>
        </div>
        <p> {{ recipe.description }} </p>
        <p> {{ recipe.price }} € </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'RecipeDetails',
  data () {
    return {
      recipe: {},
    }
  },
mounted () {
  axios.get('https://projet-node-js.vercel.app/recette/'+this.$route.params.id).then(response => (this.recipe = response.data, console.log(this.recipe)))
},
}
</script>
<style>
.recipe-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.recette {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border: black;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: white;
}
img {
  width: 50%;
  height: 100%;
}
</style>
