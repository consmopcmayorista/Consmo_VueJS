<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import FooterInteractivo from "./components/footer.vue"
import RedesComp from './components/RedesComp.vue'
import TopHeader from './components/TopHeader.vue'


const toggleButton = ref(null)
const whatsappButtons = ref(null)

onMounted(() => {
  toggleButton.value = document.getElementById('toggle-whatsapp-btn')
  whatsappButtons.value = document.getElementById('whatsapp-buttons')

  if (toggleButton.value && whatsappButtons.value) {
    toggleButton.value.addEventListener('click', function() {
      if (whatsappButtons.value.style.display === 'none' || whatsappButtons.value.style.display === '') {
        whatsappButtons.value.style.display = 'block'
      } else {
        whatsappButtons.value.style.display = 'none'
      }
    })
  }
})
</script>


<template>
    <div class="anuncio">
        <TopHeader />
    </div>
    <header>
        <div class="container">
            <div class="d-flex align-items-center justify-content-sm-between">
                 <!-- logo  -->
                <div class="logo">
                    <a href="/">
                        <img loading="lazy8"  src="/assets/images/120x24.png" alt="logo">
                    </a>
                </div>
                <!-- search wrapper  -->
                <div class="search_wrap d-none d-lg-block">
                    <!-- search input box  -->
                    <div class="search d-flex">
                        <div class="search_category">
                            <select class="" v-model="categoria">
                              <option value="">Categorias</option>
                             <!-- <option v-for="dato in categorias" :value="dato.categoria" v-if="dato.cat_padre==='0'">{{dato.categoria}}</option>-->
                        </select>
                        </div>
                        <div class="search_input">
                            <input type="text" placeholder="Buscar" id="show_suggest"   v-model="busqueda" @input="filtrarProductos"  @keyup.enter="redirigirAListaDeProductos(busqueda)" autocomplete="off">
                        </div>
                        <div class="search_subimt">
                            <button @click="redirigirAListaDeProductos(busqueda)">
                                <span class="icon">
                                <span  class="d-none d-sm-inline-block">Buscar</span>
                                    <i class="las la-search"></i>
                                 </span>
                            </button>
                    </div>
                                            <!-- search suggest -->
                                            <div class="search_suggest shadow-sm">
                            <div class="search_result_product">
                               <!-- search result single product  -->
                               <a :href="'product-view.html?producto=' + dato.id" class="single_sresult_product" v-for="(dato, index) of producto_buscado" :key="index">
                                    <div class="sresult_img">
                                       <!--  <img loading="lazy"  :src=dato.imagen alt="product">-->
                                    </div>
                                    <div class="sresult_content">
                                        <h4>{{dato.titulo}}</h4>
                                        <div class="price">
                                            <span class="org_price">${{ Math.round(parseFloat(dato.pt1)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                                        </div>
                                    </div>
                                </a>
                          </div>
                        </div>
                      </div>
                  </div>
                                     <!-- shop cart wrapper  -->
                                     <div class="shopcart">
                        <a href="/carrito" class="icon_wrp text-center d-none d-lg-block">
                            <span class="icon">
                                <i class="icon-cart"></i>
                            </span>
                            <span class="icon_text">Carrito</span>
                            <span class="pops2">{{cant_en_carrito}}</span>
                        </a>
                        <div class="shopcart_dropdown">
                            <div class="cart_droptitle">
                                <h4 class="text_lg">{{cant_en_carrito}} Productos</h4>
                            </div>
                            <div class="cartsdrop_wrap" if="lista_productos">
                                
                                  <div class="muestra" id="muestra"></div>      
                              
                   
                            </div>
                            <div class="total_cartdrop">
                                <h4 class="text_lg text-uppercase mb-0">Sub Total:</h4>
                                <h4 class="text_lg mb-0 ms-2" id="total_ticket"></h4>
                            </div>
                           <!-- mobile cart button  -->
                            <div class="cartdrop_footer d-flex mt-3">
                                <a href="/carrito" class="default_btn w-50 text_xs px-1">Ver Carro</a>
                                 <a href="/confirmacion" class="default_btn second ms-3 w-50 text_xs px-1">Pagar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                           

            
                <!-- navbar -->
<!-- navbar -->
<nav class="d-none d-lg-block">
        <div class="container">
            <div class="d-flex">
                <div class="all_category">
                    <div class="bars text-white d-flex align-items-center justify-content-center">
                        <span class="icon"> <i class="las la-bars"></i></span>
                        <span class="icon_text">Categorias</span>
                    </div>
                    <!-- sub categories wrapper  -->
                      <div class="sub_categories_wrp">
                        <div class="sub_categories">
                            <h5 class="d-block position-relative d-lg-none subcats_title">
                                Categorias
                            </h5>
                            <!-- single categories  -->
                          
                            <div>
                              <!--   <a  :href="'shop-list.html?Pag=' + dato.categoria + '&criterio=categoria'"  class="singlecats" v-for="(dato, index) of categorias" v-if="dato.cat_padre==='0'"> -->
                                  <!--  <span class="img_wrp">
                                       <i class="las la-shoe-prints"></i>  
                                    </span> -->
                                   <!-- <span class="txt">{{dato.categoria}}</span>
                                </a>-->

                              
                            </div>
                            <!-- single categories  -->
                            
                            <!-- single categories  -->
                            
                        </div>
                    </div>
                </div>

            <ul class="nav_bar d-flex list-unstyled mb-0">
                <!-- with sub menu  -->
                <li class="withsubs">
                    <a href="/">Inicio <span><i></i></span></a>
                </li>
                <!-- with sub menu  -->
                <li class="withsubs">
                    <a href="/catalogo">Productos <span><i></i></span></a>
                </li>
                <!-- with sub menu  -->
                <li class="withsubs">
                    <a href="/conocenos">Conocenos <span><i></i></span></a>
                </li>
                <li class="withsubs">
                    <a href="/encuentranos">Encuentranos <span><i></i></span></a>
                </li>
                <li class="withsubs">
                    <a href="/calificanos">Calificanos <span><i></i></span></a>
                </li>
                <li class="withsubs">
                    <a href="/foro">Foro <span><i></i></span></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="mobile_bottombar d-block d-lg-none">
        <div class="header_icon">
            <a href="javascript:void(0)" class="icon_wrp text-center open_menu">
                <span class="icon">
                    <i class="las la-bars"></i>
                </span>
                <span class="icon_text">Menu</span>
            </a>
            <a href="/catalogo" class="icon_wrp text-center">
                <span class="icon">
                   <i class="las la-store"></i>
                </span>
                <span class="icon_text">Productos</span>
            </a>
            <a href="javascript:void(0)" class="icon_wrp text-center" id="src_icon">
                <span class="icon">
                   <i class="icon-search-left"></i>
                </span>
                <span class="icon_text">Buscar</span>
            </a>
            <a href="javascript:void(0)" class="icon_wrp crt text-center" id="openCart">
                <span class="icon">
                    <i class="las la-shopping-cart"></i>
                </span>
                <span class="icon_text">Carrito</span>
                <span class="pops2">{{cant_en_carrito}}</span>
            </a>
        </div>
    </div>
       <!-- mobile menu -->
    <div class="mobile_menwrap d-lg-none" id="mobile_menwrap">
        <div class="mobile_menu_2">
            <h5 class="mobile_title">
                Menu
                <span class="sidebarclose" id="menuclose">
                    <i class="las la-times"></i>
                </span>
            </h5>
            <ul>
                <li class="withsub">
                    <a href="/">
                        Inicio
                    </a>
                </li>
                <li class="withsub">
                    <a href="">
                        Categorías
                    </a>
                </li>
                <li class="withsub">
                    <a href="/conocenos">
                        Conocenos
                    </a>
                </li>
            </ul>
        </div>
    </div>

        <!--  mobile cart -->
        <div class="mobile_menwrap d-lg-none" id="mobileCart">
        <div class="mobile_cart_wrap d-flex flex-column">
            <h5 class="mobile_title">
                Carrito
                <span class="sidebarclose" id="mobileCartClose">
                    <i class="las la-times"></i>
                </span>
            </h5>
            <div class="px-3 py-3 flex-grow-1 d-flex flex-column">
                <div class="cart_droptitle">
                    <h4 class="text_lg">Total {{cant_en_carrito}} Productos</h4>
                </div>
                <div class="cartsdrop_wrap">
                     <div class="muestra" id="muestra2"></div>  
                   
                </div>
                <div class="mt-auto">
                    <div class="total_cartdrop">
                        <h4 class="text_lg text-uppercase mb-0">Sub Total:</h4>
                        <h4 class="text_lg mb-0 ms-2" id="total_ticket2"></h4>
                    </div>
                   <!-- mobile cart button  -->
                    <div class="cartdrop_footer mt-3 d-flex">
                        <a href="/carrito" class="default_btn w-50 text_xs px-1">Ver Carro</a>
                         <a href="confirmacion" class="default_btn second ms-3 w-50 text_xs px-1">Pagar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

       <!-- mobile searchbar -->
       <div class="mobile_search_bar">
        <div class="mobile_search_text">
            <p>Que Deseas Buscar?</p>
            <span class="close_mbsearch" id="close_mbsearch">
                <i class="las la-times"></i>
            </span>
        </div>
        <form @submit.prevent >
            
            <input type="text" placeholder="Buscar productos..." v-model="busqueda" @input="filtrarProductos"  @keyup.enter="redirigirAListaDeProductos(busqueda)" autocomplete="off">
            <button >
                <i class="icon-search-left" @click="redirigirAListaDeProductos(busqueda)"></i>
            </button>
        </form>

        <div class="search_result_product">
           <!-- search result single product  -->
            
                <a :href="'product-view.html?producto=' + dato.id" class="single_sresult_product"  v-for="(dato, index) of producto_buscado" :key="index">
                <div class="sresult_img">
                 <!--  <img loading="lazy"  :src=dato.imagen alt="product">-->
                </div>
                <div class="sresult_content">
                    <h4>{{dato.titulo}}</h4>
                    <div class="price">
                        <span class="org_price">$ {{new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 3 }).format(dato.pt1)}}</span>
                       
                    </div>
                </div>
            </a>
           <!-- search result single product  -->
              
        </div>
    </div>
        <!-- mobile category -->
    <div class="mobile_menwrap d-lg-none" id="mobile_catwrap">
        <div class="sub_categories">
            <h5 class="mobile_title">
               Categorias
                <span class="sidebarclose" id="catclose">
                    <i class="las la-times"></i>
                </span>
            </h5>

            <!-- single categories  -->
    <!-- single categories -->
    <template v-for="(dato, index) in repetidos_categorias" :key="index">
    <a v-if="dato.cat_padre === '0'" 
        class="singlecats" 
        :href="'shop-list.html?Pag=' + dato.categoria + '&criterio=categoria'">
        <span class="txt">{{ dato.categoria }}</span>
    </a>
    </template>
    
            
          </div>
    </div>   

    </header>
    


  <RouterView />

  <div class="whatsapp-button">
  <a href="https://wa.me/573016148080?text=Vengo%20desde%20la%20pagina%20web%20y%20quiero%20consultar%20sobre%20algo" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
    <i class="fab fa-whatsapp"></i>
    <span class="whatsapp-text">Chatea con nosotros</span>
  </a>
</div>


<RedesComp />
<!--
  <section id="blockSocialNetworksFixed" class="social-networks-fixed">
    <div id="containerSocialNetworksFixed" class="overflow-hidden">
        <div class="row justify-content-center align-items-center">
            <div class="col-12">
                <div id="componentSocialNetworksFixed" class="order-1">
                    <div id="blockSocialNetworkFixed" class="d-inline-block social-static position-relative">

                        <a href="https://www.facebook.com/consmopcmedellin" target="_blank" aria-label="Facebook">
                            <i class="fab fa-facebook fa-lg"></i>
                        </a>
                        <a href="https://www.instagram.com/consmopcmayorista/" target="_blank" aria-label="Instagram">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="https://www.tiktok.com/@consmopcmayorista" target="_blank" aria-label="TikTok">
                            <i class="fab fa-tiktok fa-lg"></i>
                        </a>
                        <a href="https://www.youtube.com/@ConsmoPcMayorista" target="_blank" aria-label="YouTube">
                            <i class="fab fa-youtube fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>-->

        <!-- footer area -->
        <FooterInteractivo />

</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.whatsapp-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.whatsapp-link:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.whatsapp-text {
  position: absolute;
  right: 70px;
  background-color: #075E54;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.whatsapp-link:hover .whatsapp-text {
  opacity: 1;
}
/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 70px; /* Ajusta esta valor para mover el botón más arriba */
    right: 10px;
  }

  .whatsapp-link {
    padding: 8px 12px; /* Reduce el padding para hacer el botón más pequeño */
  }

  .whatsapp-link i {
    font-size: 20px; /* Reduce el tamaño del icono */
  }

  .whatsapp-text {
    font-size: 12px; /* Reduce el tamaño del texto */
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

/* Efecto de ondas */
.whatsapp-link::before,
.whatsapp-link::after {
  content: '';
  position: absolute;
  border: 3px solid #25D366;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: waves 2.5s linear infinite;
  opacity: 0;
}

.whatsapp-link::after {
  animation-delay: 1.25s;
}

@keyframes waves {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
/* Estilo para el anuncio */
.anuncio {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Asegúrate de que esté por encima de otros elementos */
  background-color: #f5f5f5; /* Color de fondo del anuncio */
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

/* Ajuste para el header */
header {
  margin-top: 50px; /* Ajusta este valor según la altura del anuncio */
}


</style>