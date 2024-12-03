<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data.json'

const route = useRoute()
let experience = ref()

const updateExperience = (slugValue) => {
  const destination = data.destinations.find((destination) => destination.id == route.params.id)
  const experiences = destination ? destination.experiences : []

  const newExperience = experiences.find((experience) => experience.slug == slugValue)
  experience.value = newExperience
}

updateExperience(route.params.slug)

watch(
  () => route.params,
  (newParams) => {
    updateExperience(newParams.slug)
  }
)

const focusToExperience = async () => {
  await nextTick()
  const experienceElement = document.getElementById('experience')
  if (experienceElement) {
    experienceElement.scrollIntoView({ behavior: 'smooth' })
  }
}

focusToExperience()
</script>

<template>
  <div id="experience" v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="'/images/' + experience.image" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
  <div v-else>
    <p>Error</p>
  </div>
</template>

<style scoped></style>
