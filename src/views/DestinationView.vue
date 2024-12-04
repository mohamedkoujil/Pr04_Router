<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import ExperienceSlider from '@/components/ExperienceSlider.vue'
import { getDestiation } from '@/utils/utils'

const route = useRoute()
const router = useRouter()
let destination = ref()
let isLoading = ref(false)
let id = ref(route.params.id)

const fetchDestination = async () => {
  isLoading.value = true
  try {
    const data = await getDestiation(id.value)
    destination.value = data
  } catch (error) {
    console.error('Failed to fetch destination:', error)
  } finally {
    isLoading.value = false
  }
}

fetchDestination()

watch(
  () => route.params.id,
  async (newId) => {
    id.value = newId
    await fetchDestination()
  }
)
</script>

<template>
  <div>
    <div v-if="!isLoading">
      <div>
        <h1>{{ destination.name }}</h1>
        <hr />

        <button class="btn" @click="router.back()">Go Back</button>

        <br />
        <br />

        <div class="destination-details">
          <img :src="'/images/' + destination.image" :alt="destination.name" />
          <p>{{ destination.description }}</p>
        </div>

        <ExperienceSlider :experiences="destination.experiences" />

        <router-view v-slot="{ Component }">
          <transition :name="$route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
