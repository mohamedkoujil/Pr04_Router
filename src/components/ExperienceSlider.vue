<script setup>
import ExperienceCard from './ExperienceCard.vue'
import { useRouter } from 'vue-router'
//define props
const { experiences } = defineProps({
  experiences: Array
})
const router = useRouter()
console.log(router)
const handleClick = (slug) => {
  console.log(slug)
  router.push(`/destination/${router.params.id}/experience/${slug}`)
}
</script>

<template>
  <div class="experiences">
    <ExperienceCard
      :handleClick="handleClick"
      v-for="experience in experiences"
      :key="experience.slug"
      :experience="experience"
    />
  </div>
</template>

<style scoped></style>
