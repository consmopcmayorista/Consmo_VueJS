<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue';
import services from '@/components/services.vue';

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Número de elementos por vista
        loop: true, // Repetir el carrusel automáticamente
        autoplay: true, // Habilitar el autoplay
        autoplayTimeout: 5000, // Duración de cada diapositiva en milisegundos (5 segundos en este caso)
        autoplayHoverPause: true // Pausar el autoplay cuando el mouse pasa sobre el carrusel
    });

    const swiper = new Swiper('.swiper-container', {
slidesPerView: 4,
spaceBetween: 20,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
autoplay: {
    delay: 3000, // Ajusta el tiempo de retardo según lo necesites
    disableOnInteraction: false, // Esto permite que la reproducción automática no se detenga tras la interacción
},
observer: true,
observeParents: true,
});
setInterval(() => {
const paginationBullet = document.getElementById('button-next');
if (paginationBullet) {
    paginationBullet.click();
    console.log('Clic simulado en el botón Next');
} else {
    console.log('No se encontró el botón con id "button-next"');
}
}, 5000);

});
</script>

<template>
     <div class="banner_slider">
        <div class="owl-carousel owl-theme">
          <!-- Primer Banner -->
          <a href="pdfs/Catalogo.pdf" target="_blank">
            <div class="hero_area" style="background-image: url('images2/banner_equipos.jpg');"></div>
          </a>
      
          <!-- Segundo Banner -->
          <a href="pdfs/CatalogoImpresoras.pdf" target="_blank">
            <div class="hero_area" style="background-image: url('images2/banner_impresoras.jpg');"></div>
          </a> 
      
          <!-- Tercer Banner 
          <a href="pdfs/junto.pdf" target="_blank">
            <div class="hero_area" style="background-image: url('images2/banner_welcome.jpg');"></div>
          </a> -->
        </div>
      </div>
      <services />
              <!-- categories -->
              <div class="shop_bycat section_padding_b">
            <div class="container">
                <h2 class="section_title_3">Todas las Categorias</h2>
                
                <div class="row gx-2 gy-2">
                    <!-- single categorie  -->
                   
                  <div class="col-lg-4 col-6" v-for="(dato, index) of categorias_s_f" :value="dato.id" v-if="index <= 5" >
                    <a   :href="'shop-list.html?Pag=' + dato.categoria + '&criterio=categoria'"   class="single_shopbycat bg_1" :style="{ backgroundImage: `url('${dato.imagen}')` }">
                        <div class="shopcat_cont">
                            <h4>{{ dato.categoria }}</h4>
                            <div class="icon">
                                <i class="las la-long-arrow-alt-right"></i>
                            </div>
                       </div>
                    </a>
                </div>
                </div>
            </div>
              </div>


            <!-- offer deal -->
<!-- offer deal -->
<div class="offer_wrp section_padding_b">
    <div class="container">
        <div class="row">
            <!-- single offer  -->
            <div class="col-md-6 mb-4 mb-md-0">
                <div class="single_offercard h-100">
                    <div class="offertext">
                        <h3 class="offer_pers">Mercado Libre</h3>
                        <h4>Estamos en Mercado Libre</h4>
                        <p>Dale un vistazo a nuestro catálogo!!</p>
                        <div class="d-flex flex-column flex-md-row">
                            <a href="https://listado.mercadolibre.com.co/_CustId_292963841?item_id=MCO1462121303&category_id=MCO113155&seller_id=292963841&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" class="default_btn rounded xs_btn mb-2 mb-md-0 me-md-2">Consmo PC</a>
                            <a href="https://listado.mercadolibre.com.co/_CustId_1659542107?item_id=MCO1432984737&category_id=MCO54154&seller_id=1659542107&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" class="default_btn rounded xs_btn">WORLDTECHCOL</a>
                        </div>
                    </div>
                    <div class="offerimg">
                        <img loading="lazy" src="/assets/images/aliado.png" alt="product">
                    </div>
                </div>
            </div>
            <!-- single offer  -->
            <div class="col-md-6">
                <div class="single_offercard bg_2 h-100">
                    <div class="offertext">
                        <h3 class="offer_pers">Comunidad Difusiones WhatsApp</h3>
                        <h4>Productos nuevos y promociones</h4>
                        <p>Publicaciones diarias, ¿qué esperas?</p>
                        <div class="d-flex flex-column flex-md-row">
                            <a href="https://chat.whatsapp.com/CCgnqRsRHNh5bQDIazc2DF" class="default_btn rounded xs_btn mb-2 mb-md-0 me-md-2">Suramericana</a>
                            <a href="https://chat.whatsapp.com/EoiWvYD6jzTGFtDuk8gZON" class="default_btn rounded xs_btn mb-2 mb-md-0 me-md-2">Minorista</a>
                            <a href="https://chat.whatsapp.com/DPm4UI5L6PHA2G4e0Z0pgy" class="default_btn rounded xs_btn">Monteria</a>
                        </div>
                    </div>
                    <div class="offerimg">
                        <img loading="lazy" src="/assets/images/difusiones.png" alt="product">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        <!-- ad banner -->
        <div class="ad_banner_area section_padding_b">
        <div class="container">
            <a href="shop-list.html?Pag=tenda&criterio=producto">
               
                <picture>
                    <source media="(min-width: 768px)" srcset="/assets/images/banner_tenda.jpg">
                    <img loading="lazy8"  class="w-100" src="/assets/images/banner_tenda.jpg" alt="ad">
                </picture>
            </a>
        </div>
    </div>

    <!--  recomended for you  -->
    <div class="recfor_you section_padding_b">
        <div class="container">
            <h2 class="section_title_3">Recomendados para ti</h2>
            <div class="row gy-4">
                <!-- single product  -->
                <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(dato, index) of productos_alea"   :key="index" v-if="index<=15">
                    <!-- single top arrival  -->
                <div class="single_toparrival">
                        <div class="topariv_img" >
                            <img loading="lazy8"  :src=dato.imagen alt="product" style="width:260px; height:260px">
                           <!-- <div class="persof bg-warning">50%</div>
                            <div class="adto_wish">
                                <i class="icon-heart"></i>
                            </div>-->
                            <div class="prod_soh">
                                <div class="adto_wish">
                                    <i class="icon-heart"></i>
                                </div>
                                  <div   class="qk_view" @click=buscar_productos(dato.id)>
                                    <span><i class="las la-eye"></i></span>
                                   Ver
                                </div>
                            </div>
                        </div>
                        <div class="topariv_cont">
                           <a :href="'product-view.html?producto=' + dato.id" class='format_titulo'>
                                <p>{{ formatLine(dato.titulo, 0, 22) }}</p>
                                <p>{{ formatLine(dato.titulo.slice(formatLine(dato.titulo, 0, 22).length), 0, 22) }}</p>
                                </a>
                                 <div class="format_titulo2">
                                <span >SKU: {{dato.idpro}}</span>
                                </div>
                            <div class="price mb-1">
                                <span class="org_price">$ {{ Math.round(parseFloat(dato.pt1)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                            </div>
                             <!-- rating  -->
                                <div class="rating">
                                <div class="d-flex align-items-center justify-content-start">
                                    <div class="rating_star">
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                    </div>
                                    <p class="rating_count mb-0">(50)</p>
                                </div>
                            </div>
                        </div>
                        <div class="full_atc_btn">
                            <button  @click=buscar_productos(dato.id)>
                                <span class="me-1"><i class="icon-cart"></i></span>
                                Al Carrito
                            </button>
                        </div>
                    </div>
                </div>
                <!-- single product  -->
              
            </div>
        </div>
    </div>
      

    <!-- hero area -->
   

     <!-- features area -->
     <section class="features_area  section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>

</style>