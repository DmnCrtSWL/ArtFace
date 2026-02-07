<template>
  <Preloader :isLoading="isLoading" />
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import Preloader from './components/Preloader.vue'

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time or wait for resources
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // 2 seconds delay for effect
});
</script>

<style>
</style>
