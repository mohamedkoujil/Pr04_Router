<script setup>
import { RouterLink } from 'vue-router'
import data from '../data.json'
//console.log(data.destinations)
</script>

<template>
  <nav id="nav">
    <RouterLink active-class="router-link-active" to="/">Home</RouterLink>
    <RouterLink
      active-class="router-link-active"
      v-for="item in data.destinations"
      :key="item.id"
      :to="'/destination/' + item.id"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>

<style scoped></style>
