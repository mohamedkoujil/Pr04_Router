<script setup>
import DestinationCard from '@/components/DestinationCard.vue'
import data from '../data.json'
</script>

<template>
  <div class="destinations">
    <DestinationCard
      v-for="destination in data.destinations"
      :key="destination.id"
      :destination="destination"
    />
  </div>
</template>
<style scoped></style>
