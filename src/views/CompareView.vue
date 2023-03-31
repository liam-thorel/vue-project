<template>
  <div>
    <div class="loader">
      <LoadingSpinner v-show="recipe1.name == null || recipe2.name == null "></LoadingSpinner>
    </div>

    <div class="container">

      <DetailsCard v-show="recipe1.picture != null"
                   :name="recipe1.name"
                   :description="recipe1.description"
                   :difficulty="recipe1.difficulty"
                   :price="recipe1.price"
                   :picture="recipe1.picture"
                   :nbPerson="recipe1.nbPerson"
                   :weight="recipe1.weight">
      </DetailsCard>
      <DetailsCard v-show="recipe2.picture != null"
                   :name="recipe2.name"
                   :description="recipe2.description"
                   :difficulty="recipe2.difficulty"
                   :price="recipe2.price"
                   :picture="recipe2.picture"
                   :nbPerson="recipe2.nbPerson"
                   :weight="recipe2.weight">
      </DetailsCard>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/loadingSpinner.vue";
import axios from "axios";
import DetailsCard from "@/components/DetailsCard.vue";

export default {
  name: "CompareView",
  components: {
    DetailsCard,
    LoadingSpinner
  },
  data () {
    return {
      recipe1: {},
      recipe2: {},
    }
  },
  mounted () {
    axios.get('https://projet-node-js.vercel.app/recette/'+this.$route.params.id1).then(response => (this.recipe1 = response.data, console.log(this.recipe1)));
    axios.get('https://projet-node-js.vercel.app/recette/'+this.$route.params.id2).then(response => (this.recipe2 = response.data, console.log(this.recipe2)));
  },
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
.loader{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>
