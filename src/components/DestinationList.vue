<script setup>
import DestinationCard from '@/components/DestinationCard.vue'
import { ref } from 'vue'
import { getDestinations } from '@/utils/utils'

const destinations = ref([])

const fetchDestinations = async () => {
  try {
    destinations.value = await getDestinations()
  } catch (error) {
    console.error('Failed to fetch destinations:', error)
  }
}
fetchDestinations()
</script>

<template>
  <div class="destinations">
    <DestinationCard
      v-for="destination in destinations"
      :key="destination.id"
      :destination="destination"
    />
  </div>
</template>
<style scoped></style>
