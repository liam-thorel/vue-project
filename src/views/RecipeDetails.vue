<template>
  <div class = "body">
    <LoadingSpinner v-show="recipe.picture == null"></LoadingSpinner>
    <DetailsCard v-show="recipe.picture != null"
                 :name="recipe.name"
                 :description="recipe.description"
                 :difficulty="recipe.difficulty"
                 :price="recipe.price"
                 :picture="recipe.picture"
                 :nbPerson="recipe.nbPerson"
                 :weight="recipe.weight">
    </DetailsCard>
  </div>
</template>
<script>
import axios from "axios";
import LoadingSpinner from "@/components/loadingSpinner.vue";
import DetailsCard from "@/components/DetailsCard.vue";

export default {
  components: {
    LoadingSpinner,
    DetailsCard

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

</style>
