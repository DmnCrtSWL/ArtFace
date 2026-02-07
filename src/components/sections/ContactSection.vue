<template>
  <section id="contacto" class="contact-section full-width-section">
    <!-- Background Map -->
    <div class="contact-map-bg">
      <iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://maps.google.com/maps?q=Juan%20de%20Medina%20Rinc%C3%B3n%20138%2C%20Las%20Am%C3%A9ricas%2C%20Morelia%20ArtFace&t=p&z=16&ie=UTF8&iwloc=&output=embed"
        style="opacity: 0.8;">
      </iframe>
      <div class="map-overlay"></div>
    </div>

    <div class="container contact-container">
      <!-- Left Column: Agenda Wrapper -->
      <div class="contact-form-col">
        <div class="agenda-wrapper">
          <!-- Main Content Card -->
          <div class="contact-card agenda-card">
            
            <!-- Content: Envelope (Form) -->
            <div v-if="activeTab === 'envelope'" class="agenda-pane fade-in">
              <h3 class="contact-title">Contacto</h3>
              <form class="contact-form" @submit.prevent>
                <div class="form-group"><input type="text" id="name" placeholder="Nombre" class="form-input" /></div>
                <div class="form-group"><input type="tel" id="phone" placeholder="Tel de Contacto" class="form-input" /></div>
                <div class="form-group"><input type="text" id="subject" placeholder="Tema" class="form-input" /></div>
                <div class="form-group"><textarea id="message" rows="4" placeholder="Mensaje" class="form-input"></textarea></div>
                <button type="submit" class="btn btn-brand-filled">Enviar</button>
              </form>
            </div>

            <!-- Content: Phone -->
            <div v-if="activeTab === 'phone'" class="agenda-pane fade-in centered-pane">
              <h3 class="contact-title">Llámanos</h3>
              <div class="phone-display">
                <Phone :size="48" class="brand-icon" />
                <p class="phone-number">+52 (443) 30 42 443</p>
                <a href="https://wa.me/524433042443" target="_blank" class="btn btn-whatsapp">
                   Enviar WhatsApp
                </a>
              </div>
            </div>

            <!-- Content: Location -->
            <div v-if="activeTab === 'location'" class="agenda-pane fade-in centered-pane">
              <h3 class="contact-title">Ubicación</h3>
              <div class="location-display">
                <MapPin :size="48" class="brand-icon" />
                <p class="address-text">
                  Juan de Medina Rincon #138.<br>
                  Col. Las Americas.<br>
                  Morelia, Michoacán.
                </p>
                <a href="https://maps.google.com/?q=Juan+de+Medina+Rincon+138+Morelia" target="_blank" class="btn btn-brand-filled">
                  Ver en Mapa
                </a>
              </div>
            </div>

          </div>

          <!-- Right Tabs ("Cejitas") -->
          <div class="agenda-tabs">
            <button 
              class="agenda-tab" 
              :class="{ active: activeTab === 'envelope' }"
              @click="switchTab('envelope')"
              title="Mensaje"
            >
              <Mail :size="20" />
            </button>
            
            <button 
              class="agenda-tab" 
              :class="{ active: activeTab === 'phone' }"
              @click="switchTab('phone')"
              title="Teléfono"
            >
              <Phone :size="20" />
            </button>
            
            <button 
              class="agenda-tab" 
              :class="{ active: activeTab === 'location' }"
              @click="switchTab('location')"
              title="Ubicación"
            >
              <MapPin :size="20" />
            </button>
            
            <div class="tab-separator"></div>

            <button class="agenda-tab social-tab" @click="switchTab('instagram')" title="Instagram">
              <Instagram :size="20" />
            </button>
            <button class="agenda-tab social-tab" @click="switchTab('facebook')" title="Facebook">
              <Facebook :size="20" />
            </button>
            <button class="agenda-tab social-tab" @click="switchTab('tiktok')" title="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tiktok">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column: Spacer for Map Visibility -->
      <div class="contact-map-spacer"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-vue-next';

const activeTab = ref('envelope'); // Default to contact form

const switchTab = (tab) => {
  if (['instagram', 'facebook', 'tiktok'].includes(tab)) {
    // Handle external links
    const links = {
      instagram: 'https://instagram.com/clinicaartface?igsh=MzZ0eGZvazgyMGto',
      facebook: 'https://www.facebook.com/profile.php?id=61586908706864&mibextid=wwXIfr&rdid=qQp7GmUaBS0iuWY3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E5nu576hH%2F%3Fmibextid%3DwwXIfr#',
      tiktok: 'https://www.tiktok.com/@clinica.artface?_r=1&_t=ZS-93hN0vuWrUS'
    };
    window.open(links[tab], '_blank');
  } else {
    activeTab.value = tab;
  }
};
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

/* Contacto Section */
.contact-section {
  position: relative;
  min-height: 100vh;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.contact-map-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* Inactive for mouse interaction as requested */
}

/* Optional overlay to ensure contrast if needed, currently unused strictly but good to have */
.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1); /* Very subtle wash */
  pointer-events: none;
}

.contact-container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 4rem 2rem;
}

.contact-form-col {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 650px;
}

.agenda-wrapper {
  display: flex;
  align-items: flex-start; /* Tabs align to top */
  width: 100%;
  max-width: 550px; /* Card width + tabs */
}

/* Updated Contact Card (Agenda Body) */
.contact-card.agenda-card {
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 1rem 0 0 1rem; /* Rounded left only */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%; /* Fill wrapper minus tabs */
  flex: 1;
  height: 70vh; /* Fixed height per user request (largest size) */
  overflow-y: auto; /* Scroll if content exceeds height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically if smaller */
  position: relative;
  z-index: 2;
}

/* Tab Column */
.agenda-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem; /* Offset tabs slightly from top */
  z-index: 1;
}

.agenda-tab {
  background-color: #2F2F2F; /* Dark default */
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 0 8px 8px 0; /* Rounded right only */
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
}

.agenda-tab:hover {
  transform: translateX(5px);
  background-color: #CC9404;
}

.agenda-tab.active {
  background-color: #CC9404;
  width: 55px; /* Slightly wider */
}

.tab-separator {
  height: 1px;
  background-color: #ddd;
  margin: 0.5rem 0;
  width: 80%;
  align-self: center;
}

.social-tab {
  background-color: #444; /* Slightly lighter for socials distinctness maybe? Or same */
  background-color: #2F2F2F;
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.contact-title {
  font-family: 'PT Serif', serif;
  font-size: 2rem;
  color: #2f2f2f;
  margin-bottom: 0.5rem;
  text-align: center;
}

.contact-subtitle {
  font-family: 'Red Hat Text', sans-serif;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
}

.centered-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.phone-display, .location-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.phone-number {
  font-family: 'PT Serif', serif;
  font-size: 1.5rem;
  color: #2f2f2f;
}

.address-text {
  font-family: 'Red Hat Text', sans-serif;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

.btn-whatsapp {
  background-color: #CC9404; /* Brand Yellow */
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  display: inline-block;
  margin-top: 0.5rem;
  transition: background-color 0.2s;
}

.btn-whatsapp:hover {
  background-color: #b38303; /* Darker Brand Yellow */
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Red Hat Text', sans-serif;
  background-color: #f9f9f9;
}

.form-input:focus {
  outline: none;
  border-color: #CC9404;
}

.btn-brand-filled {
  background-color: #CC9404;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-brand-filled:hover {
  background-color: #b38303;
}

.contact-map-spacer {
  display: none; 
}
</style>
