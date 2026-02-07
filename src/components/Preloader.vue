<template>
  <transition name="fade">
    <div v-if="isLoading" class="preloader">
      <div class="preloader-content">
        <img src="/brand.png" alt="ArtFace Logo" class="brand-logo" />
        <div class="spinner"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2F2F2F;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.brand-logo {
  max-width: 150px;
  height: auto;
  animation: pulse 2s infinite ease-in-out;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: #CC9404; /* Brand Yellow */
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
