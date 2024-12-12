<script setup>
import { RouterLink } from 'vue-router'

//define props
const { experience } = defineProps({
  experience: Object
})
</script>
<template>
  <!-- <RouterLink :to="getBasePath(router.currentRoute.value.path) + '/experience/' + experience.slug"> -->
  <RouterLink :to="{ name: 'experience', params: { slug: experience?.slug } }">
    <div class="card">
      <img :src="'/images/' + experience.image" alt="experience.title" />
      <div class="card__text">{{ experience.name }}</div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
