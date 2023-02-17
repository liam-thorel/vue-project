<template>
<div>
  <RouterLink v-if="redirect" :to="{ name: 'recipeDetails', params: { id: id }}">
    <slot></slot>
  </RouterLink>
  <div v-else @click="click">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "CardLink",
  props: {
    redirect: {
      type: Boolean,
      default: true,
    },
    id: String,
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
}
</script>

<style scoped>

</style>
