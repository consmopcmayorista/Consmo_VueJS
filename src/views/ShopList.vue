<template>
    <!-- breadcrumbs -->
    <div class="container">
        <div class="breadcrumbs">
    <a href="/"><i class="las la-home"></i></a>
            <a href="#" class="active">Catalogo</a>
        </div>
    </div>

    <!-- shop list view -->
    <div class="shop_wrap section_padding_b">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-4 position-relative">
                    <div class="filter_box py-3 px-3 shadow_sm">
                        <div class="close_filter d-block d-lg-none"><i class="las la-times"></i></div>
                        
                            <div id="columna_categorias" class="shop_filter">
                            <h4 class="filter_list">Subcategorias</h4>
                            <div class="filter_list">
                                
                              <div class="d-flex align-items-center" 
                                 v-for="(dato, index) in categorias_hijo" 
                                 :key="index" 
                                 v-if="index !== 0">
                                
                                <label 
                                    style="cursor: pointer;" 
                                    class="p-2" 
                                    :class="{ 'selected': selectedIndex === index }"
                                    @click="seleccionarCategoria(dato, index)">
                                    - {{ dato }}
                                </label>
                            </div>

                                
                            </div>
                        </div>
                       
                         </div>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <div class="d-flex align-items-center">
                        
                        <div class="view_filter d-flex align-items-center ms-auto">
                           <!-- <a href="shop-grid.html">
                                <div class="view_icon"><i class="icon-grid"></i></div>
                            </a>-->
                            <a href="shop-list.html">
                                <div class="view_icon active"><i class="las la-list-ul"></i></div>
                            </a>
                        </div>
                    </div>
                    <div class="shop_products">
                        <div class="list_view_products">
                            
                            <div class="single_list_product"  v-for="(dato, index) of  productos_alea" :key="index" v-if="index>=(pagina*cant_maxima_pag)-cant_maxima_pag && index<pagina*cant_maxima_pag" >
                                <div class="row" >
                                    <div class="col-md-4">
                                        <div class="list_product_img">
                                            <div class="lp_img">
                                                <a :href="'product-view.html?producto=' + dato.id">
                                                    <img loading="lazy"  :src=dato.imagen alt="product">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="product_content">
                                            <a :href="'product-view.html?producto=' + dato.id">
                                                <h5>{{dato.titulo}}</h5>
                                            </a>
                                            <div class="ratprice">
                                                <div class="price">
                                                    <span class="org_price">$ {{ Math.round(parseFloat(dato.pt1)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                                                  
                                                </div>
                                                 <!-- rating  -->
                                             <div class="rating">
                                                    <div class="d-flex align-items-center justify-content-start">
                                                       <p><span class="text-semibold">SKU:</span> {{ dato.idpro }}</p>
                                                     
                                                    </div>
                                                </div>
                                                 <div class="rating">
                                                    <div class="d-flex align-items-center justify-content-start">
                                                      
                                                       <p><span class="text-semibold">
                                                      Disponibilidad en:
                                                <template v-for="(valor, sucursal) in dato.existencia_por_sucursal">
                                                    <!-- Verifica si el valor es mayor a 0 -->
                                                    <span class="text-green" v-if='valor>0'> {{ sucursal }} </span>
                                                </template>
                                                        
                                                      </span>  </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                            <div class="product_list_btns">
                                                  <a style="cursor: pointer;" class="default_btn me-sm-3 me-2 px-2 px-lg-4" @click=buscar_productos(dato.id) ><i
                                    class="icon-cart me-2"></i> Al Carrito</a>
                                            <a style="cursor: pointer;" class="default_btn second px-3 px-ms-4" @click="cargar_me_gusta(dato.id, dato.titulo, dato.pt1, dato.imagen,'Agregado_ppl',  dato.idpro)"><i class="icon-heart me-2"></i>
                                                Me Gusta</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="pagination_container">
 <!-- <div class="pagination_wrp collapsed">
    <template v-for="index in cant_pagina">
      <div class="single_paginat" :class="{ active: index === pagina }" :key="index" @click="paginar(index)">
        {{ index }}
      </div>
    </template>
  </div> -->


  </div>

  <!-- Botón para expandir o colapsar la paginación -->
  <button class="toggle_button" onclick="togglePagination()">Ver más</button>
</div>


                </div>
            </div>
        </div>
    <!-- footer area -->

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
                              <img loading="lazy" :src="producto_mostrar.imagen" alt="product"   @click="cambiarImagen(producto_mostrar.imagen)"> 
                          <template v-for="(url, index) in (producto_mostrar.lista_imagenes || '').split(',')" :key="index">
                            <img loading="lazy" :src="url.trim()" alt="product"  @click="cambiarImagen(url.trim())">
                          </template>
                          
                         
                  </div>
                        
                   
                </div>
                </div>
            </div>
            </div>
        </div>

        
     
</template>

<script>
export default {
  name: 'ShopList',
  mounted() {
    this.loadExternalScripts();
  },
  methods: {
    loadExternalScripts() {
      const scripts = [
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
        'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js',
        '/js/app.js?v=0.4.71',
        '/js/components/tarjeta_contacto.js?v=0.0.50',
        '/assets/js/bootstrap.bundle.min.js',
        '/assets/js/jquery-3.5.1.min.js',
        '/assets/js/jquery-ui.min.js',
        '/assets/js/slick.min.js',
        '/assets/js/jquery.nice-select.min.js',
        '/assets/js/app.js?v=0.1.27',
        '/assets/js/main.js?v=0.1.67',
        '/js/script.js'
      ];

      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    }
  }
}
</script>


<style>
.selected {
background-color: #f0f0f0;
border: 1px solid #007bff;
border-radius: 4px;
}
   .tiktok {
content: url('/assets/tik-tok_6422207.svg');
display: inline-block;
width: 4px;
height: 4px;
cursor:pointer;
}
.pagination_container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
}

.pagination_wrp {
display: flex;
flex-wrap: wrap;
justify-content: center;
overflow: hidden;
max-height: 40px; /* Muestra solo una fila de botones (aproximadamente 10) */
transition: max-height 0.3s ease-in-out;
}

.pagination_wrp.collapsed {
max-height: 40px; /* Altura inicial para la primera fila */
}

.pagination_wrp.expanded {
max-height: 500px; /* Ajusta este valor según la cantidad de botones que quieres mostrar */
}

.single_paginat {
margin: 5px;
padding: 5px 10px;
border: 1px solid #000000;
border-radius: 3px;
cursor: pointer;
text-align: center;
background-color: #f8f9fa;
transition: background-color 0.3s;
}

.single_paginat:hover {
background-color: #c4daff;
color: white;
}

.toggle_button {
margin-top: 10px;
padding: 5px 15px;
background-color: #000b74;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.toggle_button:hover {
background-color: #c4daff;
}


</style>
