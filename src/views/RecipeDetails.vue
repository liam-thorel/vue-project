<template>
  <div class = "top">
    <h1>oui</h1>
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
