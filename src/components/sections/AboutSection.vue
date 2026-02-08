<template>
  <section id="nosotros" class="about-section full-width-section">
    <div class="about-grid">
      <div class="about-col-left">
        <img src="/nosotros.png" alt="Doctores Especialistas" class="about-image" />
      </div>
      <div class="about-col-right">
        <h4 class="about-subtitle">Acerca de Nosotros</h4>
        <h2 class="about-headline">Cuidamos tu visión y tu imagen con precisión médica y sentido estético.</h2>
        <p class="about-text">
          Somos la Dra. Ana Luisa Solorio y el Dr. Álvaro Suárez Ortega, especialistas en oftalmología, oculoplástica y otorrinolaringología con enfoque estético y funcional. Nuestro propósito es ofrecer tratamientos médicos y quirúrgicos que mejoren la salud, la apariencia y la confianza de cada paciente, con procedimientos seguros, tecnología moderna y una atención cercana.
        </p>
        
        <div class="about-features">
          <div class="feature-item">
            <div class="check-icon"><Check :size="16" /></div>
            <span>Tecnología de vanguardia</span>
          </div>
          <div class="feature-item">
            <div class="check-icon"><Check :size="16" /></div>
            <span>Resultados naturales</span>
          </div>
          <div class="feature-item">
            <div class="check-icon"><Check :size="16" /></div>
            <span>Especialistas certificados</span>
          </div>
          <div class="feature-item">
            <div class="check-icon"><Check :size="16" /></div>
            <span>Atención integral</span>
          </div>
          <div class="feature-item">
            <div class="check-icon"><Check :size="16" /></div>
            <span>Enfoque funcional y estético</span>
          </div>
          <div class="feature-item">
            <div class="check-icon"><Check :size="16" /></div>
            <span>Experiencia Conjunta</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next';
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

/* Nosotros */
.about-section {
  background-color: #f4f4f4; /* Light grey background as per visual reference */
  padding: 6rem 10%; /* Ensure side padding */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure full screen height */
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  align-items: center;
}

.about-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.about-subtitle {
  color: #CC9404;
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: block;
}

.about-headline {
  font-family: 'PT Serif', serif;
  font-size: 2.5rem;
  color: #2f2f2f;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.about-text {
  font-family: 'Red Hat Text', sans-serif;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: justify;
}

.about-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Red Hat Text', sans-serif;
  color: #555;
  font-size: 1rem;
}

.check-icon {
  background-color: #CC9404;
  color: white;
  border-radius: 4px; /* Square with slight radius */
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-section {
    padding: 4rem 24px; /* Increased to 24px for better visibility */
  }

  .about-col-right {
    padding: 96px 32px 64px 32px;
  }
}
</style>
