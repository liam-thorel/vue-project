<template>
  <div>
    <form>
      <div class="form-group">
        <label for="name">Nom</label>
        <input v-bind:value="name" type="text" class="form-control" id="name" placeholder="Nom de la recette">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input v-bind:value="description" type="text" class="form-control" id="description" placeholder="Description de la recette">
      </div>
      <div class="form-group">
        <label for="difficulty">Difficulté</label>
        <input v-bind:value="difficulty" type="number" class="form-control" id="difficulty" placeholder="Difficulté de la recette">
      </div>
      <div class="form-group">
        <label for="price">Prix</label>
        <input v-bind:value="price" type="number" class="form-control" id="price" placeholder="Prix de la recette">
      </div>
      <div class="form-group">
        <label for="picture">Image</label>
        <input v-bind:value="picture" type="text" class="form-control" id="picture" placeholder="Image de la recette">
      </div>
      <div class="form-group">
        <label for="nbPerson">Nombre de personnes</label>
        <input v-bind:value="nbPerson" type="number" class="form-control" id="nbPerson" placeholder="Nombre de personnes pour la recette">
      </div>
      <div class="form-group">
        <label for="weight">Poids</label>
        <input v-bind:value="weight" type="number" class="form-control" id="weight" placeholder="Poids de la recette">
      </div>
      <button @click.prevent="click" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateOrEdit",
  props: {
    name: String,
    description: String,
    difficulty: Number,
    price: Number,
    picture: String,
    nbPerson: Number,
    weight: Number,
  },
  methods: {
    click() {
      const recette = {
        name: this.name,
        description: this.description,
        difficulty: this.difficulty,
        price: this.price,
        picture: this.picture,
        nbPerson: this.nbPerson,
        weight: this.weight,
      };
      axios.post("https://projet-node-js.vercel.app/recettes/create", recette).then((response) => {
        console.log(response);
      });
    },
  },
}
</script>
