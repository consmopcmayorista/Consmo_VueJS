<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Acerca de nosotros</h5>
          <p>¡Consmo PC Mayorista - Tu Socio Tecnológico!.
            Despega hacia la tecnología con Consmo PC Mayorista! Somos la punta de lanza en la distribución de equipos tecnológicos para hogares y empresas.</p>
          <ul class="social-media">
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Enlaces útiles</h5>
          <ul>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Newsletter</h5>
          <p>Registra tu correo electrónico para recibir noticias y actualizaciones.</p>
          <form>
            <input type="email" placeholder="Correo electrónico">
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; Consmo PC Mayorista SAS - Derechos Reservados - Diseñado por <a href="www.colcodec.com">Colcodec</a>.</p>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
  name: 'footer'
}
  </script>
  
  <style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 60px 0;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer .col-md-4 {
  flex-basis: 33.33%;
}

.footer h5 {
  font-weight: bold;
  margin-bottom: 20px;
}

.footer p {
  margin-bottom: 20px;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer a {
  color: #fff;
  text-decoration: none;
}

.footer a:hover {
  color: #ccc;
}

.social-media {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.social-media li {
  margin-right: 20px;
}

.social-media a {
  font-size: 24px;
}

.copyright {
  background-color: #444444;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  clear: both;
}
</style>