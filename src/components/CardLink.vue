<template>
<div>
  <RouterLink v-if="redirect" :to="{ name: 'recipeDetails', params: { id: id }}"><slot></slot></RouterLink>
  <div v-else>
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
}
</script>

<style scoped>

</style>
