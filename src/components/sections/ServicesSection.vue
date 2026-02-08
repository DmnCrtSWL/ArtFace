<template>
  <section id="servicios" class="services-section full-width-section">
    <div class="services-header">
      <h2 class="section-title">Nuestros Servicios</h2>
    </div>
    <!-- Removed container to allow full width control -->
    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card"
        @click="toggleService(index)"
      >
        <div v-if="!service.active" class="service-front">
          <component
            :is="service.icon"
            :size="64"
            stroke-width="1.5"
            class="service-icon"
          />
          <h3 class="service-title">{{ service.title }}</h3>
        </div>
        <div v-else class="service-back">
          <h3 class="service-title" style="margin-bottom: 1rem">
            {{ service.title }}
          </h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  Eye,
  Stethoscope,
  Sparkles,
  Smile,
  Glasses,
  Ear,
} from "lucide-vue-next";

const services = ref([
  {
    title: "Oftalmología General",
    icon: Eye,
    description:
      "Consultas completas para la salud visual: cataratas, glaucoma, retina y diagnóstico integral.",
    active: false,
  },
  {
    title: "Cirugía Especializada",
    icon: Stethoscope,
    description:
      "Procedimientos estéticos y reconstructivos en párpados y órbita.",
    active: false,
  },
  {
    title: "Rinoplastía Ultrasónica",
    icon: Sparkles,
    description:
      "Técnicas modernas para resultados naturales en nariz, bichectomía y perfilamiento facial.",
    active: false,
  },
  {
    title: "Tratamientos Faciales",
    icon: Smile,
    description:
      "Aplicación de botox, rellenos y dermapen para rejuvenecimiento seguro con respaldo médico.",
    active: false,
  },
  {
    title: "Óptica con Garantía",
    icon: Glasses,
    description:
      "Venta de lentes oftálmicos y de sol de calidad, con asesoría personalizada y precios accesibles.",
    active: false,
  },
  {
    title: "Auxiliares Auditivos",
    icon: Ear,
    description:
      "Técnicas modernas para resultados naturales en nariz, bichectomía y perfilamiento facial.",
    active: false,
  },
]);

const toggleService = (index) => {
  services.value[index].active = !services.value[index].active;
};
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

.section-title {
  font-family: "PT Serif", serif;
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #2f2f2f; /* Requested Dark Grey */
}

/* Servicios */
.services-section {
  background-color: #ffffff; /* White background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 1px; Removed gap-based borders */
  /* background-color: #ababab; Removed background */
  max-width: 1150px;
  width: 70%;
  margin: 0 auto;
  padding: 0;
  border: none;
  border-radius: 20px;
  overflow: hidden;
}

.service-card {
  background-color: #ffffff; /* White card background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 1.5rem;
  transition: background-color 0.3s ease;
  aspect-ratio: 1;
  width: 100%;
  height: auto;
  cursor: pointer;
  overflow: hidden;

  /* Internal Borders */
  border-right: 1px solid #ababab;
  border-bottom: 1px solid #ababab;

  position: relative; /* For pseudo-element positioning */
  z-index: 1; /* Content above background */
}

/* Remove right border on the last column (every 3rd item) */
.service-card:nth-child(3n) {
  border-right: none;
}

/* Remove bottom border on the last row (items 4-6) */
.service-card:nth-last-child(-n + 3) {
  border-bottom: none;
}

/* Hover Effect Background */
.service-card::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #cc9404; /* Brand Yellow */
  transition: height 0.3s ease-out;
  z-index: -1; /* Behind content */
}

.service-card:hover {
  background-color: transparent; /* Allow pseudo-element to show */
}

.service-card:hover::before {
  height: 100%;
}

/* Hover Content Color Changes */
.service-card:hover .service-icon,
.service-card:hover .service-description {
  color: #ffffff;
  transition: color 0.3s ease;
}

.service-card:hover .service-title {
  color: #2f2f2f; /* Requested Dark Grey on Hover */
  transition: color 0.3s ease;
}

.service-front,
.service-back {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.service-description {
  font-family: "Red Hat Text", sans-serif;
  font-size: 1.25rem;
  color: #333;
  line-height: 1.5;
  margin: 0;
}

.service-icon {
  color: #262626; /* Requested default color */
  transition: color 0.3s ease;
}

.service-title {
  font-family: "PT Serif", serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #cc9404; /* Brand Yellow */
  margin: 0;
  line-height: 1.4;
  transition: color 0.3s ease;
  z-index: 2; /* Ensure on top */
  position: relative;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    /* gap: 3rem; Removed legacy gap */
  }

  /* Reset Desktop borders */
  .service-card {
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  }

  /* Remove right on 2nd column */
  .service-card:nth-child(2n) {
    border-right: none;
  }

  /* Remove right on last column (override 3n which doesn't apply cleanly here but reset ensures correctness) */
  .service-card:nth-child(3n) {
    border-right: 1px solid #ababab; /* Reset from desktop if needed, though 2n overrides even items */
  }

  /* Remove bottom on last row (items 5-6) */
  .service-card:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  /* Reset bottom on item 4 which was last row in desktop */
  .service-card:nth-child(4) {
    border-bottom: 1px solid #ababab;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    /* gap: 2.5rem; Removed legacy gap */
  }

  .service-card {
    border-right: none; /* No vertical dividers in 1 col */
    border-bottom: 1px solid #ababab;
  }

  /* Reset the 3n rule from tablet that causes right border on item 3 and 6 */
  .service-card:nth-child(3n) {
    border-right: none;
  }

  /* Reset the last-2 rule from tablet that removes bottom border on item 5 and 6 */
  .service-card:nth-last-child(-n + 2) {
    border-bottom: 1px solid #ababab;
  }

  /* User requested bottom border on Auxiliares (last item), so we ensure it exists */
  .service-card:last-child {
    border-bottom: 1px solid #ababab;
  }
}
</style>
