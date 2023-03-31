<template>
    <div class = "recipe-container">
      <div class = "recette">
        <img :src="picture" alt="image de la recette">
        <div class = "top">
          <h2> {{ name }} </h2>
          <p class = "etoiles">
            <span class = "difficulte" v-for="index in 5" :key="index">
              <span class = "juif">
                <span v-if="index <= difficulty">★</span>
                <span v-else>☆</span>
              </span>
            </span>
          </p>
          <br>
          <p> {{ nbPerson }} personnes </p>
          <p> {{ weight }} kg </p>
          <p> {{ price }} € </p>
          <p> {{ description }} </p>
          <p> {{ getPricePerPerson }} €/personne </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DetailsCard",
  props: {
    name: String,
    description: String,
    difficulty: Number,
    price: Number,
    picture: String,
    nbPerson: Number,
    weight: Number,
  },
  computed: {
    getPricePerPerson() {
      return this.price / this.nbPerson;
    }
  }
}
</script>

<style scoped>

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
