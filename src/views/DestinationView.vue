<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { reactive, ref, watch } from 'vue'
import data from '@/data.json' // Assuming data.json is in the root directory
import ExperienceSlider from '@/components/ExperienceSlider.vue'

const route = useRoute()
const router = useRouter()
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

//console.log(id)
//console.log(destination)
</script>

<template>
  <div>
    <h1>{{ destination.name }}</h1>
    <hr />

    <button @click="router.back()">Go Back</button>

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
