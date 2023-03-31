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
      <div class="compare"  v-show="recipe1.name != null && recipe2.name != null ">
        <div class="titre">
          <h3> {{recipe1.name}} </h3>
          <h3>vs</h3>
          <h3> {{recipe2.name}} </h3>
        </div>

        <p>Difficulté : {{difDifficulte}}</p>
        <p>Personne : {{difPersonne}}</p>
        <p>Poids : {{difPoids}} kg</p>
        <p>Prix : {{difPrix}} €</p>
        <p>Prix/Personne : {{difPrixPersonne}} €</p>
      </div>
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
  computed: {
    difPersonne() {
      if (this.recipe1.nbPerson > this.recipe2.nbPerson) {
        return this.recipe1.nbPerson - this.recipe2.nbPerson;
      } else {
        return this.recipe2.nbPerson - this.recipe1.nbPerson;
      }
    },
    difPrix() {
      if (this.recipe1.price > this.recipe2.price) {
        return this.recipe1.price - this.recipe2.price;
      } else {
        return this.recipe2.price - this.recipe1.price;
      }
    },
    difPoids() {
      if (this.recipe1.weight > this.recipe2.weight) {
        return this.recipe1.weight - this.recipe2.weight;
      } else {
        return this.recipe2.weight - this.recipe1.weight;
      }
    },
    difDifficulte() {
      if (this.recipe1.difficulty > this.recipe2.difficulty) {
        return this.recipe1.difficulty - this.recipe2.difficulty;
      } else {
        return this.recipe2.difficulty - this.recipe1.difficulty;
      }
    },
    difPrixPersonne() {
      if (this.recipe1.price / this.recipe1.nbPerson > this.recipe2.price / this.recipe2.nbPerson) {
        return this.recipe1.price / this.recipe1.nbPerson - this.recipe2.price / this.recipe2.nbPerson;
      } else {
        return this.recipe2.price / this.recipe2.nbPerson - this.recipe1.price / this.recipe1.nbPerson;
      }
    }
  }

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
.compare {
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
  width: 500px;
}
.titre{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

}
</style>
