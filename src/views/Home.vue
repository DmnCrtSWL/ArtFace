<template>
  <div class="home-view">
    <!-- Inicio / Hero Section -->
    <section
      id="inicio"
      class="hero-section full-width-section"
      @mousemove="handleMouseMove"
    >
      <!-- Removed Video Background -->

      <div class="hero-grid">
        <div class="hero-col-left">
          <div class="hero-content">
            <h1 class="title">
              Cuidado Visual y Facial Especializado, con un Toque Estético y
              Funcional
            </h1>
            <p class="subtitle">
              Desde cirugías de párpados, rinoplastía ultrasónica y tratamientos
              reconstructivos, hasta óptica con garantía y auxiliares auditivos
              de última generación. Somos dos especialistas trabajando en
              conjunto para brindarte soluciones integrales que cuidan tu
              bienestar y tu imagen.
            </p>
            <div class="hero-buttons">
              <button class="btn btn-secondary" @click="explore">
                Leer más
              </button>
              <a
                href="https://wa.me/524435690016"
                target="_blank"
                class="btn btn-primary"
              >
                <Calendar :size="18" />
                Agendar Cita
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column with Banner Image -->
        <div class="hero-col-right" :style="bgStyle">
          <img
            src="/banner-mobile.png"
            class="mobile-banner-img"
            alt="Banner Mobile"
          />
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Calendar } from "lucide-vue-next";
import ServicesSection from "../components/sections/ServicesSection.vue";
import CtaSection from "../components/sections/CtaSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";

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
    backgroundPosition: `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`,
  };
};

const router = useRouter();

const explore = () => {
  router.push("/nosotros");
};
</script>

<style scoped>
.mobile-banner-img {
  display: none; /* Hidden on desktop, shown in mobile query */
}

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
  background-color: #2f2f2f; /* Fallback background */
}

/* Removed Hero Bg Video styles */

.hero-grid {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  height: 100vh; /* Force full height */
  position: relative;
  z-index: 1;
}

.hero-col-left {
  background-color: #2f2f2f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  z-index: 2;
}

.hero-col-right {
  background-color: white;
  background-image: url("/banner-desk.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
  padding: 15%;
  width: 100%;
  height: 100%;
  transition: background-position 0.1s ease-out;
}

.hero-content {
  max-width: 600px;
  text-align: left; /* Usually left-aligned in a split layout looks better */
}

.title {
  font-family: "PT Serif", serif;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  color: #cc9404; /* Brand Yellow */
}

.subtitle {
  color: #ababab !important;
  font-family: "Red Hat Text" !important;
  margin-bottom: 35px;
  text-align: justify;
}

/* Media Query for Mobile */
@media (max-width: 768px) {
  .full-width-section {
    padding: 0;
  }

  .hero-grid {
    display: flex;
    flex-direction: column-reverse; /* Image (right col) first */
    height: auto;
    min-height: auto; /* Remove 100vh forcing to avoid gaps */
    padding-bottom: 2rem; /* Add some space at bottom if needed, or keeping it clean */
  }

  .hero-col-left {
    padding: 4rem 2rem;
    min-height: auto; /* Let content dictate height */
  }

  .hero-col-right {
    background-image: url("/banner-mobile.png"); /* Keep for reference or fallback if needed, but we override */
    background: none !important; /* Remove background on mobile */
    min-height: auto; /* Remove 50vh forcing */
    height: auto;
    width: 100%;
    padding: 0;
  }

  .mobile-banner-img {
    display: block;
    width: 100%;
    height: auto;
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
  border: 2px solid #cc9404;
  color: #cc9404;
}

.btn-primary:hover {
  background: #cc9404;
  color: white;
  transform: translateY(-2px);
}

/* Leer más: Filled Yellow */
.btn-secondary {
  background: #cc9404;
  color: white;
  border: 2px solid #cc9404; /* Match size if needed */
}

.btn-secondary:hover {
  background: #b38303;
  border-color: #b38303;
  transform: translateY(-2px);
}
</style>
