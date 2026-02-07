<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <img src="/brand.png" alt="ArtFace Logo" class="footer-logo" />
      
      <div class="footer-links">
        <a href="#" class="footer-link">Conoce nuestra política de privacidad.</a>
        <p class="copyright">Artface | 2026 Todos los Derechos Reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  height: 160px; /* Reduced height per user request */
  background-color: #2F2F2F;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Red Hat Text', sans-serif;
  color: #ffffff;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem; /* Reduced gap to bring logo and text closer */
}

.footer-logo {
  max-width: 150px; /* Reduced to half (was 300px) */
  height: auto;
  filter: none; 
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #CC9404;
}

.copyright {
  color: #888888;
  font-size: 0.8rem;
  margin: 0;
}
</style>
