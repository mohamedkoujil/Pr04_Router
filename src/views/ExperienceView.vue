<script setup>
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data.json'

const route = useRoute()
console.log(route.params)
let slug = ref(route.params.slug)
let experience = reactive({})

experience = data.destinations.find((destination) =>
  destination.experiences.find((experience) => experience.slug == slug.value)
)

console.log(experience)

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug
    experience = data.destinations.find((destination) =>
      destination.experiences.find((experience) => experience.slug == slug.value)
    )
  }
)
</script>

<template>
  <div>
    <h2>{{ experience.name }}</h2>
    <img :src="'/images/' + experience.image" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
</template>

<style scoped></style>
