<template>
  <div class = "body">
    <div class = "recipe-container">
      <div class = "recette">
        <img :src="recipe.picture" alt="image de la recette">
        <div class = "top">
          <h2> {{ recipe.name }} </h2>
          <span class = "difficulte" v-for="index in 5" :key="index">
          <span v-if="index <= recipe.difficulty">★ </span>
          <span v-else>☆ </span>
          </span>
          <p> {{ recipe.nbPerson }} personnes </p>
          <p> {{ recipe.weight }} g </p>
        <p> {{ recipe.description }} </p>
        <p> {{ recipe.price }} € </p>
        </div>
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
  background-color: cyan;
}
.recette {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: yellow;
}
img {
  width: 500px;
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.difficulte {
  color: magenta;
  scale: 3;
}
</style>
