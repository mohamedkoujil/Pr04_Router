<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { onUnmounted, ref, watch } from 'vue'
import ExperienceSlider from '@/components/ExperienceSlider.vue'
import { getDestiation } from '@/utils/utils'
import LoadingComponent from '@/components/LoadingComponent.vue'

//reactive props

const props = defineProps({
  id: String
})

const route = useRoute()
const router = useRouter()
let destination = ref()
let isLoading = ref(false)

const fetchDestination = async () => {
  isLoading.value = true
  try {
    const data = await getDestiation(props.id)
    destination.value = data
  } catch (error) {
    console.error('Failed to fetch destination:', error)
  } finally {
    isLoading.value = false
  }
}

fetchDestination()

onUnmounted(() => {
  const container = document.getElementById('container')
  container.classList.remove('animate__fadeIn')
})

watch(
  () => props.id,
  async () => {
    await fetchDestination()
  }
)
</script>

<template>
  <div>
    <div v-if="!isLoading">
      <div id="container" class="animate__animated animate__fadeIn">
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
        <!--
          <router-view v-slot="{ Component }">
          <transition :name="$route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
         -->
        <router-view />
      </div>
    </div>
    <div v-else>
      <LoadingComponent />
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
