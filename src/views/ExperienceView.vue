<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data.json'
import { getExperience } from '@/utils/utils'

const route = useRoute()
const isLoading = ref(false)
const id = ref(route.params.id)
const slug = ref(route.params.slug)
let experience = ref()

const fetchExperience = async () => {
  isLoading.value = true
  try {
    experience.value = await getExperience(id.value, slug.value)
  } catch (error) {
    console.error('Failed to fetch experience:', error)
  } finally {
    isLoading.value = false
    focusToExperience() // Ensure focus happens after data is fetched
  }
}

fetchExperience(slug.value)

watch(
  () => route.params,
  (newParams) => {
    id.value = newParams.id
    slug.value = newParams.slug
    fetchExperience(slug.value)
  }
)

const focusToExperience = async () => {
  await nextTick() // Ensure the DOM is updated
  const experienceElement = document.getElementById('experience')
  if (experienceElement) {
    experienceElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="container">
    <div id="experience" v-if="!isLoading">
      <h1>{{ experience.name }}</h1>
      <div>
        <img :src="'/images/' + experience.image" :alt="experience.name" />
        <p>{{ experience.description }}</p>
      </div>
    </div>
    <div v-else>
      <div>Loading...</div>
    </div>
  </div>
</template>

<style scoped>
.container #experience img {
  width: 25%;
}

#experience div {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
