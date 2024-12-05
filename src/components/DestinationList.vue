<script setup>
import DestinationCard from '@/components/DestinationCard.vue'
import { ref } from 'vue'
import { getDestinations } from '@/utils/utils'
import LoadingComponent from './LoadingComponent.vue'

const destinations = ref([])
const isLoading = ref(false)

const fetchDestinations = async () => {
  isLoading.value = true
  try {
    destinations.value = await getDestinations()
  } catch (error) {
    console.error('Failed to fetch destinations:', error)
  } finally {
    isLoading.value = false
  }
}
fetchDestinations()
</script>

<template>
  <div>
    <div class="destinations" v-if="!isLoading">
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
      />
    </div>
    <div v-else>
      <LoadingComponent />
    </div>
  </div>
</template>
<style scoped></style>
