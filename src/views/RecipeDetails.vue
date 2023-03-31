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
    <button v-show="jwtToken" class="btn btn-primary" @click="edit = !edit">Modifier</button>
    <CreateOrEdit
        v-show="edit"
        :name="recipe.name"
        :description="recipe.description"
        :difficulty="recipe.difficulty"
        :price="recipe.price"
        :picture="recipe.picture"
        :nbPerson="recipe.nbPerson"
        :weight="recipe.weight"
        :id="getId"
    />
  </div>
</template>
<script>
import axios from "axios";
import LoadingSpinner from "@/components/loadingSpinner.vue";
import DetailsCard from "@/components/DetailsCard.vue";
import CreateOrEdit from "@/components/CreateOrEdit.vue";
import Vue from "vue";

export default {
  components: {
    CreateOrEdit,
    LoadingSpinner,
    DetailsCard
  },
  name: 'RecipeDetails',
  data () {
    return {
      recipe: {},
      show : false,
      edit : false,
    }
  },
mounted () {
  axios.get('https://projet-node-js.vercel.app/recette/'+this.$route.params.id).then(response => (this.recipe = response.data, console.log(this.recipe)))
},
computed: {
  getPricePerPerson() {
    return this.recipe.price / this.recipe.nbPerson;
  },
  jwtToken() {
    return Vue.prototype.$jwt !== '';
  },
  getId() {
    return this.$route.params.id;
  },
},
}
</script>

<style>

</style>
