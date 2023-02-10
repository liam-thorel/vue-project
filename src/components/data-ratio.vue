<template>
  <router-link :to="{ name: 'recipeDetails', params: { id: id }}"  class="card">
    <div class="data-item" :style="{backgroundImage: 'url(' + img + ')'}">
      <span class="description">
        <p class="title">{{ name }}</p>
        <span class = "difficulte" v-for="index in 5" :key="index">
          <span v-if="index <= difficulty">★</span>
          <span v-else>☆</span>
        </span>
      </span>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'data-ratio',
  props: {
    id: String,
    name: String,
    description: String,
    difficulty: Number,
    price: Number,
    img: String,
    nbPerson: Number,
    weight: Number,
  }
}
</script>

<style scoped>
.card{
  color: white;
  text-decoration: none;
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Monospace', sans-serif;
}
.difficulte {
  color: gold;
}
.title {
  font-size: 30px;
  font-weight: bold;
  font-family: 'sans-serif', sans-serif;
}
.data-item {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: end;
  width: 300px;
  height: 450px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  transition: .3s all ease-in-out;
}
.data-item:hover {
  background-size: cover;
  transform-origin: center;
  transform: scale(1.05);
}
</style>
