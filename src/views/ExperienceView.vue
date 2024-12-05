<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getExperience } from '@/utils/utils'
import LoadingComponent from '@/components/LoadingComponent.vue'

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
</script>

<template>
  <div class="container">
    <div id="experience" v-if="!isLoading" class="animate__animated animate__backInUp">
      <h1>{{ experience.name }}</h1>
      <div>
        <img :src="'/images/' + experience.image" :alt="experience.name" />
        <p>{{ experience.description }}</p>
      </div>
    </div>
    <div v-else>
      <div>
        <LoadingComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 28em;
}

.container #experience img {
  width: 45%;
}

#experience div {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
</style>
