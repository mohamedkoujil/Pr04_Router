<script setup>
import { onMounted } from 'vue'

//define props
const { experience, handleClick } = defineProps({
  experience: Object,
  handleClick: Function
})

onMounted(() => {
  //console.log(description.value)
})
</script>
<template>
  <div class="card" @click="handleClick(experience.slug)">
    <img :src="'/images/' + experience.image" alt="experience.title" />
    <div class="card__text">{{ experience.name }}</div>
  </div>
</template>

<style scoped></style>
