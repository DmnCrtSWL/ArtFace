<template>
  <section class="cta-section full-width-section">
    <div class="cta-overlay"></div>
    <div class="cta-content">
      <h2 class="cta-title">¿Necesitas una valoración?</h2>
      <p class="cta-desc">Brindamos atención médica y estética en oftalmología, oculoplástica y otorrinolaringología con enfoque personalizado. Llámanos o envíanos un mensaje para agendar tu cita o resolver cualquier duda.</p>
      <!-- If on an individual page, anchor to contact might need to change to RouterLink or explicit URL. 
           For now, href="#contacto" works if ContactSection is on the same page, or we might need to route to /contacto -->
      <a href="https://wa.me/524435690016" target="_blank" class="btn btn-primary cta-btn">
        <Calendar :size="18" />
        Agendar Cita
      </a>
    </div>
  </section>
</template>

<script setup>
import { Calendar } from 'lucide-vue-next';
</script>

<style scoped>
.full-width-section {
  width: 100%;
  padding: 6rem 0;
  min-height: 80vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
}

.cta-section {
  position: relative;
  background-image: url('/bg-2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  min-height: 50vh; /* Substantial but not full screen */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(47, 47, 47, 0.7); /* #2f2f2f style with opacity */
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  padding: 0 2rem;
}

.cta-title {
  font-family: 'PT Serif', serif;
  font-size: 2.5rem;
  margin: 0;
}

.cta-desc {
  font-family: 'Red Hat Text', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 700px;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  font-family: 'Red Hat Text', sans-serif; /* fallback */
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
}

.btn-primary {
  background: transparent;
  border: 2px solid #CC9404;
  color: #CC9404;
}

.btn-primary:hover {
  background: #CC9404;
  color: white;
  transform: translateY(-2px);
}

.cta-btn {
  font-size: 1.1rem;
  padding: 1rem 2rem;
}
</style>
