<script setup>
import { ref } from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(true)
const fullPage = ref(false)
const onCancel = () => {
  //console.log('canceled')
  isLoading.value = false
}
</script>
<template>
  <div class="vl-parent">
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />

    <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button @click.prevent="doAjax">fetch Data</button>
  </div>
</template>
