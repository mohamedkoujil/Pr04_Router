<script setup>
import { defineProps } from 'vue'
//get props from parent
const { destination } = defineProps({
  destination: Object
})
</script>

<template>
  <div class="destination">
    <h2>{{ destination.name }}</h2>
    <img :src="'/images/' + destination.image" :alt="destination.title" />
  </div>
</template>

<style scoped></style>
