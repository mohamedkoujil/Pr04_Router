<script setup>
import { getBasePath } from '@/utils/utils'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

//define props
const { experience } = defineProps({
  experience: Object
})
</script>
<template>
  <RouterLink :to="getBasePath(router.currentRoute.value.path) + '/experience/' + experience.slug">
    <div class="card">
      <img :src="'/images/' + experience.image" alt="experience.title" />
      <div class="card__text">{{ experience.name }}</div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
