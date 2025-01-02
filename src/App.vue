<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import FooterInteractivo from "./components/footer.vue";
</script>


<template>
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
            <!-- <a class="singlecats" :href="'shop-list.html?Pag=' + index + '&criterio=categoria'"   v-for="(dato, index) of repetidos_categorias" v-if="dato.cat_padre==='0'">
                
                <span class="txt">{{index}}</span>
            </a>-->
            
          </div>
    </div>   

    </header>
    


  <RouterView />

  <div class="containerx">
    <!-- Botón para mostrar u ocultar los botones de WhatsApp con el logo de WhatsApp -->
    <button id="toggle-whatsapp-btn" class="show-whatsapp-btn">
        <i class="fab fa-whatsapp"></i> <!-- Ícono de WhatsApp -->
    </button>

    <!-- Contenedor de los botones de WhatsApp, inicialmente oculto -->
    <div class="redes" id="whatsapp-buttons" style="display: none;">
        <div>
            <a href="https://api.whatsapp.com/send?phone=573015556003&amptext=Hola, Saludos... Le escribo para Obtener Informacion." 
               title="Asesor Web" 
               class="lab la-whatsapp"> ASESOR WEB</a>
        </div>
    </div>
</div>


  <section id="blockSocialNetworksFixed" class="social-networks-fixed">
    <div id="containerSocialNetworksFixed" class="overflow-hidden">
        <div class="row justify-content-center align-items-center">
            <div class="col-12">
                <div id="componentSocialNetworksFixed" class="order-1">
                    <div id="blockSocialNetworkFixed" class="d-inline-block social-static position-relative">
                        <!-- Redes sociales con iconos de Font Awesome -->
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
</section>

        <!-- footer area -->
        <FooterInteractivo />

</template>

<style scoped>

</style>
