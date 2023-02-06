<template>
  <a :href="url" class="card">
    <div class="data-item" :style="img">
      <span class="description">
        <p class="title">{{ name }}</p>
        <span class = "difficulte" v-for="index in 5" :key="index">
          <span v-if="index <= dificulty">★</span>
          <span v-else>☆</span>
        </span>
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'data-ratio',
  props: {
    id: Number,
    name: String,
    description: String,
    dificulty: Number,
    price: Number,
    img: String,
    url: String
  },
  viewRecette() {
    this.$emit('viewRecette', this.id);
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
}

</style>
