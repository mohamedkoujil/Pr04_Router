<script setup>
import ExperienceCard from './ExperienceCard.vue'
//define props
const { experiences } = defineProps({
  experiences: Array
})
// const router = useRouter()

// const handleClick = (slug) => {
//   router.push(getBasePath(router.currentRoute.value.path) + '/experience/' + slug)
// }
</script>

<template>
  <div class="experiences">
    <ExperienceCard
      v-for="experience in experiences"
      :key="experience.slug"
      :experience="experience"
    />
  </div>
</template>

<style scoped></style>
