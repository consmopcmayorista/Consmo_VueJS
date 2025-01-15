<template>
    <!-- breadcrumbs -->
    <div class="container">
        <div class="breadcrumbs">
            <a href="#"><i class="las la-home"></i></a>
            <a href="#">Shop</a>
            <a href="#" class="active">{{producto_mostrar.titulo}}</a>
        </div>
    </div>

    <!-- product view -->
    <div class="product_view_wrap section_padding_b">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">

                    <!-- product slider big image  -->
                    <!-- product quick view slider image  -->
                   <template>
  <div class="product_view_slider">
    <div class="single_viewslider zoom-container">
      <!-- Imagen principal -->
      <img 
        v-if="imagenCargada" 
        loading="lazy" 
        :src="imagenMostrada" 
        alt="product" 
        @click="mostrarModal = true"
        @error="imagenCargada = false"
        class="zoomable-image" 
      >

      <!-- Imagen temporal mientras se procesa -->
      <img 
        v-else 
        loading="lazy" 
        src="/assets/images/progress.gif" 
        alt="Cargando..."
      >
    </div>

    <!-- Modal -->
                    <div v-if="mostrarModal" class="modal-overlay" @click="cerrarModal">
                      <div class="modal-content" @click.stop>
                        <img :src="imagenMostrada" alt="Zoom Image" class="zoom-image" />
                        <button class="close-btn" @click="cerrarModal">X</button>
                      </div>
                    </div>
                  </div>
                </template>
                    <!-- product slider small image  -->
                     <!-- product quick view nav  -->
                   <div class="product_viewslid_nav" >
                
                         <div class="single_viewslid_nav" v-if="producto_mostrar && producto_mostrar.lista_imagenes" style="display: flex;">
                              <img style="display: flex; width:100px; border: 0.5 px solid; " loading="lazy" :src="producto_mostrar.imagen" alt="product"   @click="cambiarImagen(producto_mostrar.imagen)"> 
                          <template v-for="(url, index) in (producto_mostrar.lista_imagenes || '').split(',')" :key="index">
                            <img style="display: flex; width:100px; border: 0.5 px solid; " loading="lazy" :src="url.trim()" alt="product"  @click="cambiarImagen(url.trim())">
                         </template>
                          
                         
                  </div>
                        
                   
                </div>

                </div>

                <!-- product view right  -->
                <div class="col-lg-6">
                 <div class="zoom-result"></div>
                    <div class="product_info_wrapper">
                        <div class="product_base_info">
                            <h1>{{producto_mostrar.titulo}}</h1>
                             <!-- rating  -->
                                <div class="rating">
                                <div class="d-flex align-items-center">
                                    <div class="rating_star">
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                    </div>
                                   
                                </div>
                            </div>

                            <!-- product extra info  -->
                            <!-- product info  -->
                            <div class="product_other_info">
                                 <p><span class="text-semibold">
                                     Disponibilidad en:
                            <template v-for="(valor, sucursal) in producto_mostrar.existencia_por_sucursal">
                                <!-- Verifica si el valor es mayor a 0 -->
                                <span class="text-green" v-if='valor>0'> {{ sucursal }} </span>
                            </template>
                                    
                                  </span>  </p>
                                <p><span>Marca:</span>{{producto_mostrar.marca}}</p>
                                <p><span>Categoria:</span>{{producto_mostrar.linea}}</p>
                            <p><span>SKU:</span>{{producto_mostrar.idpro}}</p>
                            </div>

                             <!-- product extra info  -->
                            <!-- product price  -->
                            <div class="price mt-3 mb-3 d-flex align-items-center">
                              <!--   <span class="prev_price ms-0"></span>-->
                               <span class="org_price ms-2">${{ Math.round(parseFloat(producto_mostrar.pt1)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                               <!--  <div class="disc_tag ms-3">-30%</div>-->
                            </div>

                            <!-- product description  -->
                           

                             <!-- product size and color select wrapper  -->
                            <div class="shop_filter border-bottom-0 pb-0">

                               
                            </div>

                            <!-- Quantity Select  -->
                            <!-- product Quantity  -->
                           <div class="cart_qnty ms-md-auto">
                            <p>Cantidad</p>
                            <div class="d-flex align-items-center">
                                <div class="cart_qnty_btn" id="menos" @click="decrementar">
                                    <i class="las la-minus"></i>
                                </div>
                                <div class="cart_count" id="cantidades_producto" :value="cantidades">{{ cantidades }}</div>
                                <div class="cart_qnty_btn" id="mas" @click="incrementar">
                                    <i class="las la-plus"></i>
                                </div>
                            </div>
                        </div>

                        </div>
                        <input type="hidden" id='item_producto'  :value=producto_mostrar.id>
    					  
    					   <input type="hidden" id='detalle' :value=producto_mostrar.titulo>
    					   <input type="hidden" id='precio'  :value=producto_mostrar.pt1>
    					   <input type="hidden" id='foto'  :value=producto_mostrar.imagen>	
    					   <input type="hidden" id='tags'  :value=producto_mostrar.idpro>	
    					    <input type="hidden" id='cantidadesx' :value=producto_mostrar.existencia>

                        <!-- button  -->
                        <!-- buttons  -->
                        <div class="product_buttons">
                             <a style="cursor: pointer;" class="default_btn me-sm-3 me-2 px-2 px-lg-4" onclick="agregar_producto_car();" ><i
                                    class="icon-cart me-2"></i> Al Carrito</a>
                              <a style="cursor: pointer;" class="default_btn second px-3 px-ms-4" @click="cargar_me_gusta(producto_mostrar.id, producto_mostrar.titulo, producto_mostrar.precio, producto_mostrar.imagen,'Agregado_ppl',  producto_mostrar.idpro)"><i class="icon-heart me-2"></i>
                                Me Gusta</a>
                        </div>

                        <!-- social button  -->
                        <!-- social button  -->
                        <div class="share_icons footer_icon d-flex">
                           <!-- <a href="#"><i class="lab la-facebook-f"></i></a>
                            <a href="#"><i class="lab la-twitter"></i></a>
                            <a href="#"><i class="lab la-instagram"></i></a>-->
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="product_view_tabs mt-4">

                <!-- product details view tabs  -->
                <div class="pv_tab_buttons spec_text" >
                    <div class="pbt_single_btn active" data-target=".info">Detalle Productos</div>
                    <div class="pbt_single_btn" data-target=".qna">Preguntas</div>
                    <div class="pbt_single_btn" data-target=".review">Ranking (10)</div>
                </div>

                <!-- Product Info wrapper  -->
                <div class="pb_tab_content info active">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="pbt_info_text">
                                <p>
                                    {{producto_mostrar.detalle}}
                                </p>
                                
                            </div>
                           <!-- <div class="pbt_info_table">
                                <div class="pbtit_single">
                                    <p class="specs">Color</p>
                                    <p class="spec_text">Black, Brown, Red</p>
                                </div>
                                <div class="pbtit_single">
                                    <p class="specs">Material</p>
                                    <p class="spec_text">Artificial Leather</p>
                                </div>
                                <div class="pbtit_single">
                                    <p class="specs">Weight</p>
                                    <p class="spec_text">0.5kg</p>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>

        </div>
   

    <!-- new arrive -->
    <div class="recfor_you section_padding_b">
        <div class="container">
            <h2 class="section_title_3">Recomendados para ti</h2>
            <div class="row gy-4">
                <!-- single product  -->
                <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(dato, index) of productos_alea"   :key="index" v-if="index<=3">
                    <!-- single top arrival  -->
                <div class="single_toparrival">
                        <div class="topariv_img">
                            <img loading="lazy8"  :src=dato.imagen alt="product" style="width:405px; height:336px">
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
                           <a :href="'product-view.html?producto=' + dato.id">
                                <h4>{{ dato.titulo.slice(0, 21) }}</h4>
                               <h4>{{ dato.titulo.slice(21, 44) }}</h4>
                            </a>
                             <p>{{dato.linea.slice(0, 21)}}</p>
                            <div class="price mb-1">
                                <span class="org_price">${{ Math.round(parseFloat(dato.pt1)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
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
       <!-- product quick view -->
       <div class="product_quickview">
        <div class="prodquick_wrap position-relative">
            <div class="close_quickview">
                <i class="las la-times"></i>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <!-- product quick view slider image  -->
                     <div class="product_view_slider">
                       <div class="single_viewslider">
                            <img loading="lazy"  :src=imagenMostrada   alt="product">
                        </div>
                       
                    </div>
                    
                    
                     <!-- product quick view nav  -->
                    <div class="product_viewslid_nav" style="display: flex;">
                
                         <div class="single_viewslid_nav" v-if="producto_mostrar && producto_mostrar.lista_imagenes" style="display: flex;">
                              <img style="display: flex; width:100px; border: 0.5 px solid; "  loading="lazy" :src="producto_mostrar.imagen" alt="product"   @click="cambiarImagen(producto_mostrar.imagen)"> 
                          <template v-for="(url, index) in (producto_mostrar.lista_imagenes || '').split(',')" :key="index">
                            <img style="display: flex; width:100px; border: 0.5 px solid; "  loading="lazy" :src="url.trim()" alt="product"  @click="cambiarImagen(url.trim())">
                          </template>
                          
                         
                  </div>
                        
                   
                </div>
                </div>
                <div class="col-lg-6">
                    <div class="product_info_wrapper">
                        <div class="product_base_info">
                                  <a :href="'product-view.html?producto=' + producto_mostrar.id">
                              <h1>{{ producto_mostrar.titulo }}</h1>
                            </a>
                            
                             <!-- rating  -->
                                <div class="rating">
                                <div class="d-flex align-items-center">
                                    <div class="rating_star">
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                        <span><i class="las la-star"></i></span>
                                    </div>
                                    <p class="rating_count">50 Reviews</p>
                                </div>
                            </div>
                            <!-- product info  -->
                            <div class="product_other_info">
                                <p><span class="text-semibold">
                                     Disponibilidad en:
                            <template v-for="(valor, sucursal) in producto_mostrar.existencia_por_sucursal">
                                <!-- Verifica si el valor es mayor a 0 -->
                                <span class="text-green" v-if='valor>0'> {{ sucursal }} </span>
                            </template>
                                    
                                  </span>  </p>
                               
                                <p><span class="text-semibold">Marca:</span>{{ producto_mostrar.marca}}</p>
                                <p><span class="text-semibold">Categoria:</span> {{ producto_mostrar.linea}}</p>
                                <p><span class="text-semibold">SKU:</span> {{ producto_mostrar.idpro }}</p>
                            </div>
                            <!-- product price  -->
                            <div class="price mt-3 mb-3 d-flex align-items-center">
                                <span class="org_price ms-2">$ {{ Math.round(parseFloat(producto_mostrar.pt1)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                                <!-- <span class="prev_price ms-0">{{ producto_mostrar.pt2 }}</span>
                               
                                <div class="disc_tag ms-3">-30%</div> -->
                            </div>
                            <div class="pd_dtails">
                                <p>
                                    {{ producto_mostrar.detalle }}
                                </p>
                            </div>
                             <!-- product size and color select wrapper  -->
                           <!-- <div class="shop_filter border-bottom-0 pb-0">
                                 product size select 
                                <div class="size_selector mb-3">
                                    <h5>Size</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="single_size_opt">
                                            <input type="radio" hidden name="size" class="size_inp" id="size-xs">
                                            <label for="size-xs">XS</label>
                                        </div>
                                        <div class="single_size_opt ms-2">
                                            <input type="radio" hidden name="size" class="size_inp" id="size-s">
                                            <label for="size-s">S</label>
                                        </div>
                                        <div class="single_size_opt ms-2">
                                            <input type="radio" hidden name="size" class="size_inp" id="size-m" checked>
                                            <label for="size-m">M</label>
                                        </div>
                                        <div class="single_size_opt ms-2">
                                            <input type="radio" hidden name="size" class="size_inp" id="size-l">
                                            <label for="size-l">L</label>
                                        </div>
                                        <div class="single_size_opt ms-2">
                                            <input type="radio" hidden name="size" class="size_inp" id="size-xl">
                                            <label for="size-xl">XL</label>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- product color select
                                <div class="size_selector color_selector">
                                    <h5>Color:</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="single_size_opt">
                                            <input type="radio" hidden name="color" class="size_inp" id="color-purple">
                                            <label for="color-purple" class="bg-color" data-bs-toggle="tooltip"
                                                   title="Rose Red"></label>
                                        </div>
                                        <div class="single_size_opt ms-2">
                                            <input type="radio" hidden name="color" class="size_inp" id="color-red">
                                            <label for="color-red" class="bg-white" data-bs-toggle="tooltip"
                                                   title="White"></label>
                                        </div>
                                        <div class="single_size_opt ms-2">
                                            <input type="radio" hidden name="color" class="size_inp" id="color-green"
                                                   checked>
                                            <label for="color-green" class="bg-dark" data-bs-toggle="tooltip"
                                                   title="Black"></label>
                                        </div>
                                    </div>
                                </div>  
                            </div>-->
                            <!-- product Quantity  -->
                            
                             <input type="hidden" id='item_producto'  :value=producto_mostrar.id>
    					  
    					   <input type="hidden" id='detalle' :value=producto_mostrar.titulo>
    					   <input type="hidden" id='precio'  :value=producto_mostrar.pt1>
    					   <input type="hidden" id='foto'  :value=producto_mostrar.imagen>	
    					   <input type="hidden" id='tags'  :value=producto_mostrar.idpro>	
    					    <input type="hidden" id='cantidadesx' :value=producto_mostrar.existencia>
                            <div class="cart_qnty ms-md-auto">
                            <p>Cantidad</p>
                            <div class="d-flex align-items-center">
                                <div class="cart_qnty_btn" id="menos" @click="decrementar">
                                    <i class="las la-minus"></i>
                                </div>
                                <div class="cart_count" id="cantidades_producto" :value="cantidades">{{ cantidades }}</div>
                                <div class="cart_qnty_btn" id="mas" @click="incrementar">
                                    <i class="las la-plus"></i>
                                </div>
                            </div>
                        </div>
                        </div>
                         <div id='container_success'></div>
                        <!-- buttons  -->
                        <div class="product_buttons">
                            <a style="cursor: pointer;" class="default_btn me-sm-3 me-2 px-2 px-lg-4" onclick="agregar_producto_car();" ><i
                                    class="icon-cart me-2"></i> Al Carrito</a>
                            <a style="cursor: pointer;" class="default_btn second px-3 px-ms-4" @click="cargar_me_gusta(producto_mostrar.id, producto_mostrar.titulo, producto_mostrar.pt1, producto_mostrar.imagen,'Agregado_ppl',  producto_mostrar.idpro)"><i class="icon-heart me-2"></i>
                                Me Gusta</a>
                        </div>
                        <!-- social button  -->
                        <div class="share_icons footer_icon d-flex">
                         <!--   <a href="#"><i class="lab la-facebook-f"></i></a>
                            <a href="#"><i class="lab la-twitter"></i></a>
                            <a href="#"><i class="lab la-instagram"></i></a>-->
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
 .zoom-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.zoomable-image {
  width: 100%; /* Ajusta el tamaño de la imagen según tus necesidades */
  display: block;
}

.zoom-lens {
  position: absolute;
  border: 1px solid #d4d4d4;
  width: 100px; /* Ajusta el tamaño de la lupa */
  height: 100px; /* Ajusta el tamaño de la lupa */
  cursor: none;
  border-radius: 50%; /* Lupa redonda */
  display: none;
}

.zoom-result {
  position: fixed;
  border: 1px solid #d4d4d4;
  width: 450px; /* Tamaño de la ventana de zoom */
  height: 450px; /* Tamaño de la ventana de zoom */
  overflow: hidden;
  background:#fff;
  display: none; /* Oculto por defecto */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.zoom-result img {
  position: absolute;
  width: 100%;
  height: auto;
}


/* Estilos del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 100%;
  max-height: auto;
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: center; /* Centra horizontalmente */
  background: white;
  border-radius: 8px; /* Opcional: añade esquinas redondeadas */
  overflow: hidden;
  padding: 30px;
}

.zoom-image {
  max-width: 600px;
  max-height: 600px;
  object-fit: contain; /* Asegura que la imagen mantenga proporción */
  cursor: zoom-out;
  transition: transform 0.5s ease; /* Transición suave */
}

.zoom-image:hover {
  transform: scale(1.3); /* Efecto zoom */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1001;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 1);
}
        img {
  transition: opacity 0.3s ease-in-out;
  
}

   .tiktok {
  content: url('/assets/tik-tok_6422207.svg');
  display: inline-block;
  width: 4px;
  height: 4px;
  cursor:pointer;
}
</style>

<script setup>
       document.addEventListener('DOMContentLoaded', () => {
    const zoomContainer = document.querySelector('.single_viewslider');
    const zoomResult = document.querySelector('.zoom-result');
    const zoomImage = document.createElement('img');
    zoomResult.appendChild(zoomImage);

    zoomContainer.addEventListener('mouseenter', () => {
        // Muestra la ventana de zoom al pasar el cursor por la imagen
        zoomResult.style.display = 'block';

        // Establece la imagen de zoom
        const zoomImageSrc = zoomContainer.querySelector('img').src;
        zoomImage.src = zoomImageSrc;

        // Asegura que la imagen de zoom esté escalada correctamente
        zoomImage.style.position = 'absolute';
        zoomImage.style.top = '0';
        zoomImage.style.left = '0';
        zoomImage.style.transform = 'scale(2)'; // Ajusta la escala como desees
    });

    zoomContainer.addEventListener('mousemove', (e) => {
        const containerRect = zoomContainer.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;

        // Cálculo de la posición de la ventana de zoom
        const zoomWidth = zoomResult.offsetWidth;
        const zoomHeight = zoomResult.offsetHeight;
        const scale = 2; // Factor de escala para la imagen de zoom

        // Ajusta el punto de origen de la transformación para centrar el área de zoom
        const xPercentage = (offsetX / containerRect.width) * 100;
        const yPercentage = (offsetY / containerRect.height) * 100;
        zoomImage.style.transformOrigin = `${xPercentage}% ${yPercentage}%`;

        // Posiciona la ventana de zoom en la posición deseada
        const left = e.clientX + 15; // Ajusta la posición horizontal de la ventana de zoom
        const top = e.clientY - zoomHeight / 2; // Posiciona la ventana de zoom verticalmente

        // Asegura que el punto de zoom esté centrado en la ventana de zoom
        zoomResult.style.right =  '300px';
        zoomResult.style.top = '250px';
    });

    zoomContainer.addEventListener('mouseout', () => {
        // Oculta la ventana de zoom cuando el cursor sale de la imagen
        zoomResult.style.display = 'none';
    });
});
</script>