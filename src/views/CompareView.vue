<template>
  <div class="container">
    <LoadingSpinner v-show="items.length === 0"></LoadingSpinner>
  </div>

</template>

<script>
import LoadingSpinner from "@/components/loadingSpinner.vue";
import axios from "axios";

export default {
  name: "CompareView",
  components: {
    LoadingSpinner
  },
  data () {
    return {
      items: [],
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

</style>
