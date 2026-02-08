<template>
  <header class="site-header">
    <div class="header-top">
      <div class="container header-top-content">
        <!-- Left Side: Phone -->
        <div class="contact-item">
          <Phone :size="16" class="brand-icon" />
          <span>+52 (443) 30 42 443</span>
        </div>

        <!-- Right Side: Info & Socials -->
        <div class="info-group">
          <!-- Hours -->
          <div class="contact-item">
            <Clock :size="16" class="brand-icon" />
            <span>L-V 09 a 19 Hrs | S 09 a 14 Hrs</span>
          </div>

          <!-- Address -->
          <div class="contact-item">
            <MapPin :size="16" class="brand-icon" />
            <span>Juan de Medina Rincon #138. Col. Las Americas.</span>
          </div>

          <!-- Socials -->
          <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61586908706864&mibextid=wwXIfr&rdid=qQp7GmUaBS0iuWY3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E5nu576hH%2F%3Fmibextid%3DwwXIfr#" target="_blank" aria-label="Facebook"><Facebook :size="18" class="brand-icon social-hover" /></a>
            <a href="https://instagram.com/clinicaartface?igsh=MzZ0eGZvazgyMGto" target="_blank" aria-label="Instagram"><Instagram :size="18" class="brand-icon social-hover" /></a>
            <a href="https://www.tiktok.com/@clinica.artface?_r=1&_t=ZS-93hN0vuWrUS" target="_blank" aria-label="TikTok">
              <!-- Custom TikTok SVG since it might not be in all icon sets or to ensure style matching -->
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="brand-icon social-hover lucide-tiktok">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header (Placeholder for future Nav) -->
    <div class="header-main">
      <div class="container header-content">
        <a href="/" class="logo-link">
          <img src="/brand.png" alt="ArtFace Logo" class="brand-logo" />
        </a>
        <nav class="main-nav">
          <a href="/" class="nav-link">Inicio</a>
          <a href="/servicios" class="nav-link">Servicios</a>
          <a href="/nosotros" class="nav-link">Nosotros</a>
          <a href="/contacto" class="nav-link">Contacto</a>
        </nav>
        
        <!-- CTA Button -->
        <a href="https://wa.me/524435690016" target="_blank" class="cta-button desktop-only">
          <Calendar :size="18" class="brand-icon" />
          <span>Agendar Cita</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle Menu">
          <Menu v-if="!isMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>

      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav-overlay" :class="{ 'is-open': isMenuOpen }">
      <nav class="mobile-nav">
        <a href="/" class="nav-link" @click="toggleMenu">Inicio</a>
        <a href="/servicios" class="nav-link" @click="toggleMenu">Servicios</a>
        <a href="/nosotros" class="nav-link" @click="toggleMenu">Nosotros</a>
        <a href="/contacto" class="nav-link" @click="toggleMenu">Contacto</a>
        <a href="https://wa.me/524435690016" target="_blank" class="cta-button mobile-cta" @click="toggleMenu">
          <Calendar :size="18" class="brand-icon" />
          <span>Agendar Cita</span>
        </a>

        <!-- Mobile Info Section (Bottom of Drawer) -->
        <div class="mobile-info">
          <!-- Phone -->
          <div class="contact-item">
            <Phone :size="16" class="brand-icon" />
            <span>+52 (443) 30 42 443</span>
          </div>

          <!-- Hours -->
          <div class="contact-item">
            <Clock :size="16" class="brand-icon" />
            <span>L-V 09 a 19 Hrs | S 09 a 14 Hrs</span>
          </div>
          
          <!-- Address -->
          <div class="contact-item">
            <MapPin :size="16" class="brand-icon" />
            <span>Juan de Medina Rincon #138. Col. Las Americas.</span>
          </div>

          <!-- Socials -->
          <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61586908706864&mibextid=wwXIfr&rdid=qQp7GmUaBS0iuWY3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E5nu576hH%2F%3Fmibextid%3DwwXIfr#" target="_blank" aria-label="Facebook"><Facebook :size="20" class="brand-icon social-hover" /></a>
            <a href="https://instagram.com/clinicaartface?igsh=MzZ0eGZvazgyMGto" target="_blank" aria-label="Instagram"><Instagram :size="20" class="brand-icon social-hover" /></a>
            <a href="https://www.tiktok.com/@clinica.artface?_r=1&_t=ZS-93hN0vuWrUS" target="_blank" aria-label="TikTok">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="brand-icon social-hover lucide-tiktok">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { Phone, Clock, MapPin, Facebook, Instagram, Calendar, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.site-header {
  width: 100%;
  background-color: #ffffff;
  color: #2F2F2F; /* Brand Black */
  font-family: 'Red Hat Text', sans-serif;
  font-size: 0.8rem; /* Small elegant text for top bar */
  position: sticky;
  top: -50px; /* Hide the 50px top bar when scrolling */
  z-index: 1000;
}

/* Colors */
.brand-icon {
  color: #CC9404; /* Brand Yellow */
  stroke-width: 2px;
}

.social-hover:hover {
  opacity: 0.8;
}

/* Layout */
.header-top {
  height: 50px;
  border-bottom: 1px solid #d1d1d1; /* Requested grey border */
  display: flex;
  align-items: center;
}

.header-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.info-group {
  display: flex;
  align-items: center;
  gap: 2rem; /* Spacing between Hours, Address, Socials */
}

.social-icons {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* Main Header */
.header-main {
  height: 70px;
  display: flex;
  align-items: center;
  /* Removed sticky from here, moving to .site-header */
  background-color: #ffffff;
  width: 100%;
}

.header-content {
  width: 100%;
  display: flex;
  align-items: center;
  /* Removed justify-content: space-between to allow nav to push right with margin */
}

.logo-link {
  display: flex;
  align-items: center;
}

.brand-logo {
  max-height: 60px; /* Fits within 70px header with some padding */
  width: auto;
  object-fit: contain;
}

.main-nav {
  display: flex;
  gap: 2rem;
  margin-left: auto; /* Pushes nav to the right */
  margin-right: 2rem; /* Adds space before the CTA button */
}

.desktop-only {
  display: flex;
}

.nav-link {
  font-family: 'PT Serif', serif;
  font-weight: 500;
  font-size: 16px;
  color: #2F2F2F;
  text-decoration: none;
  position: relative; /* For pseudo-element positioning */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #CC9404; /* Brand Yellow */
  transition: width 0.3s ease-in-out;
}

.nav-link:hover {
  /* No color change for text */
}

.nav-link:hover::after {
  width: 100%;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2F2F2F;
}

/* Responsive adjustments if needed */
@media (max-width: 1024px) {
  .info-group {
    gap: 1rem;
  }
  .contact-item span {
    font-size: 0.75rem;
  }
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  border: 2px solid #CC9404;
  border-radius: 15px;
  color: #CC9404;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Red Hat Text', sans-serif;
  text-decoration: none; /* In case it's an anchor */
}

.cta-button:hover {
  background-color: #CC9404;
  color: #ffffff;
}

.cta-button .brand-icon {
  color: inherit; /* Icon takes text color */
}

/* Mobile Menu Styles */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #CC9404; /* Brand Yellow */
  padding: 0;
  margin-left: 1rem;
}

.mobile-nav-overlay {
  position: absolute;
  top: 100%; /* Below header-main */
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #ffffff;
  transform: translateX(100%); /* Hidden by default */
  transition: transform 0.3s ease-in-out;
  padding: 2rem;
  border-top: 1px solid #eee;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.mobile-nav-overlay.is-open {
  transform: translateX(0);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  height: 100%; /* Take full height to allow spacing */
}

.mobile-nav .nav-link {
  font-size: 1.25rem;
}

.mobile-cta {
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}

.mobile-info {
  margin-top: auto; /* Push to bottom */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
}

.mobile-info .contact-item {
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.mobile-info .social-icons {
  margin-top: 0.5rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .header-top {
    display: none;
  }
  
  .main-nav, .desktop-only {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .site-header {
    top: 0; /* Sticky at top on mobile */
  }

  .header-content {
    justify-content: space-between; /* Logo Left, Menu Right */
  }

  .logo-link {
    margin-right: 0;
    order: 0;
  }
  
  /* User Request: "Logo al lado derecho".
     If I just use justify-content: flex-end, they will stack on the right.
     Order: Logo, then Menu (since Menu is after Logo in DOM).
     So it will look like: [Space] [Logo] [Menu]
     This matches "Logo on right, Menu on right".
  */
}
</style>
