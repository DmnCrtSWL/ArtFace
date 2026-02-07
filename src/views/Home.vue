<template>
  <div class="home-view">
    <!-- Inicio / Hero Section -->
    <section id="inicio" class="hero-section full-width-section" @mousemove="handleMouseMove">
      <video class="hero-bg" :style="bgStyle" autoplay muted loop playsinline>
        <source src="/herobg.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      
      <div class="hero-grid">
        <div class="hero-col-left">
          <div class="hero-content">
            <h1 class="title">Cuidado Visual y Facial Especializado, con un Toque Estético y Funcional</h1>
            <p class="subtitle">Desde cirugías de párpados, rinoplastía ultrasónica y tratamientos reconstructivos, hasta óptica con garantía y auxiliares auditivos de última generación. Somos dos especialistas trabajando en conjunto para brindarte soluciones integrales que cuidan tu bienestar y tu imagen.</p>
            <div class="hero-buttons">
              <button class="btn btn-secondary" @click="explore">Leer más</button>
              <a href="/contacto" class="btn btn-primary">
                <Calendar :size="18" />
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
     
      </div>
    </section>

    <!-- Components -->
    <ServicesSection />
    <CtaSection />
    <AboutSection />
    <ContactSection />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from 'lucide-vue-next';
import ServicesSection from '../components/sections/ServicesSection.vue';
import CtaSection from '../components/sections/CtaSection.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';

const bgStyle = ref({});

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;
  
  // Calculate percentage from center (-1 to 1)
  const x = (clientX - innerWidth / 2) / innerWidth;
  const y = (clientY - innerHeight / 2) / innerHeight;
  
  // Move styling (inverse direction for depth)
  const moveX = x * -20; // Max movement px
  const moveY = y * -20;
  
  bgStyle.value = {
    transform: `translate(${moveX}px, ${moveY}px) scale(1.1)`
  };
};

const explore = () => {
  // If we are on Home, we can scroll to services if component is present, 
  // or just navigate to /servicios
  window.location.href = '/servicios';
}
</script>

<style scoped>
.full-width-section {
  width: 100%;
  padding: 6rem 0;
  min-height: 80vh;
  display: flex;
  flex-direction: column; /* Allow stacking title and grid */
  align-items: center;
}

/* Inicio / Hero */
.hero-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 0; /* Removing padding to let columns fill height */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: transform 0.1s ease-out;
  transform: scale(1.1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6));
  z-index: 0;
  pointer-events: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh; /* Force full height */
  position: relative;
  z-index: 1;
}

.hero-col-left {
  background-color: rgba(47, 47, 47, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
}

.hero-content {
  max-width: 600px;
  text-align: left; /* Usually left-aligned in a split layout looks better */
}

.title {
  font-family: 'PT Serif', serif;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  color: #CC9404; /* Brand Yellow */
}

.subtitle {
    color: #ababab !important;
    font-family: 'Red Hat Text' !important;
    margin-bottom: 35px;
    text-align: justify;
}

/* Media Query for Mobile */
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100vh;
  }
  
  .hero-col-left {
    padding: 6rem 2rem 4rem;
    min-height: 60vh;
  }
}

/* Button Container */
.hero-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* Button Styles */
.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  font-family: var(--font-main);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* For icon spacing */
}

/* Agendar Cita: Outlined Yellow */
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

/* Leer más: Filled Yellow */
.btn-secondary {
  background: #CC9404;
  color: white;
  border: 2px solid #CC9404; /* Match size if needed */
}

.btn-secondary:hover {
  background: #b38303;
  border-color: #b38303;
  transform: translateY(-2px);
}
</style>
