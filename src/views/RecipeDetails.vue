<template>
  <div class = "body">
    <LoadingSpinner v-show="recipe.picture == null"></LoadingSpinner>
    <div class = "recipe-container" v-if="recipe.picture!=null">
      <div class = "recette">
        <img :src="recipe.picture" alt="image de la recette">
        <div class = "top">
          <h2> {{ recipe.name }} </h2>
          <p class = "etoiles">
            <span class = "difficulte" v-for="index in 5" :key="index">
              <span class = "juif">
                <span v-if="index <= recipe.difficulty">★</span>
                <span v-else>☆</span>
              </span>
            </span>
          </p>
          <br>
          <p> {{ recipe.nbPerson }} personnes </p>
          <p> {{ recipe.weight }} kg </p>
          <p> {{ recipe.price }} € </p>
          <p> {{ recipe.description }} </p>
          <p> {{ getPricePerPerson }} €/personne </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import LoadingSpinner from "@/components/loadingSpinner.vue";

export default {
  components: {
    LoadingSpinner

  },
  name: 'RecipeDetails',
  data () {
    return {
      recipe: {},
      show : false
    }
  },
mounted () {
  axios.get('https://projet-node-js.vercel.app/recette/'+this.$route.params.id).then(response => (this.recipe = response.data, console.log(this.recipe)))
},
computed: {
  getPricePerPerson() {
    return this.recipe.price / this.recipe.nbPerson;
  }
}
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
  box-shadow: rgba(0, 0, 0, 0.117647) 5px 1px 6px, rgba(0, 0, 0, 0.117647) 5px 1px 4px;
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
.etoiles {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
}
.difficulte {
  color: magenta;
  scale: 3;
}
</style>
