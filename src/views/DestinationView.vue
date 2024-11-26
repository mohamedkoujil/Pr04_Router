<script setup>
import { useRoute } from 'vue-router'
import { reactive, ref, watch } from 'vue'
import data from '@/data.json' // Assuming data.json is in the root directory
import ExperienceSlider from '@/components/ExperienceSlider.vue'

const route = useRoute()
let destination = reactive({})
let id = ref(route.params.id)

destination = data.destinations.find((destination) => destination.id == id.value)

watch(
  () => route.params.id,
  (newId) => {
    id.value = newId
    destination = data.destinations.find((destination) => destination.id == id.value)
  }
)

console.log(id)
console.log(destination)
</script>

<template>
  <h1>{{ destination.name }}</h1>
  <hr />

  <RouterLink :to="{ name: 'home' }">Back</RouterLink>
  <br />
  <br />

  <div class="destination-details">
    <img :src="'/images/' + destination.image" :alt="destination.name" />
    <p>{{ destination.description }}</p>
  </div>

  <ExperienceSlider :experiences="destination.experiences" />

  <router-view />
</template>

<style scoped></style>
