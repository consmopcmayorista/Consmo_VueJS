<template>
    <!-- breadcrumbs -->
    <div class="container">
        <div class="breadcrumbs">
            <a href="index.html"><i class="las la-home"></i></a>
            <a href="#" class="active">Carrito de Compras</a>
        </div>
    </div>

    <!-- shopping cart -->
    <div class="cart_area section_padding_b">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <!-- product head  -->
                    <h4 class="shop_cart_title sopcart_ttl d-none d-lg-flex">
                        <span>Producto</span>
                        <span>Cant</span>
                        <span>Total Precio</span>
                    </h4>

                    <!-- shop cart wrapper  -->
                    <div class="shop_cart_wrap">

                        <!-- single cart  -->
                       <div class="single_shop_cart d-flex align-items-center flex-wrap"   v-for="(dato, index) of ticket" :key="index">
                           
                            <div class="cart_img mb-4 mb-md-0">
                                <img loading="lazy" :src=dato.foto alt="product">
                            </div>
                            
                            <div class="cart_cont">
                                <a >
                                    <h5>{{dato.descripcion}}</h5>
                                </a>
                                <p class="price">${{ Math.round(parseFloat(dato.precio)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} </p>
                               
                            </div>
                           
                            <div class="cart_qnty ms-md-auto">
                            <p>Cantidad</p>
                           <div class="d-flex align-items-center">
                                <div class="cart_qnty_btn" id="menos" @click="decrementar2(dato.id)">
                                    <i class="las la-minus"></i>
                                </div>
                                <div class="cart_count" id="cantidades_producto2">{{ obtenerCantidad(dato.id) }}</div>
                                <div class="cart_qnty_btn" id="mas" @click="incrementar2(dato.id, dato.existencia)">
                                    <i class="las la-plus"></i>
                                </div>
                            </div>
                        </div>

                            
                            <div class="cart_price ms-auto">
                                <p>${{ Math.round(parseFloat(dato.precio * dato.cant)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} </p>
                            </div>
                           
                            <div class="cart_remove ms-auto">
                                <i class="icon-trash" @click=quitar_item_Carrito(dato.id)></i>
                            </div>
                        </div>

                        <!-- single cart  -->
                       
                    </div>
                </div>
 

                    <!-- order summary wrapper  -->
                    <div class="col-lg-3 mt-4 mt-lg-0">
                    <div class="cart_summary">
                        <h4>Total a Pagar</h4>

                        <div class="cartsum_text d-flex justify-content-between">
                            <p class="text-semibold">Subtotal</p>
                            <p class="text-semibold">${{ Math.round(parseFloat(subtotal)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} </p>
                        </div>

                        <!--<div class="cartsum_text d-flex justify-content-between">
                            <p>Delivery</p>
                            <p>Free</p>
                        </div>-->

                        <div class="cartsum_text d-flex justify-content-between">
                            <p>IVA</p>
                            <p>{{ Math.round(parseFloat(iva)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} </p>
                        </div>

                        <div class="cart_sum_total d-flex justify-content-between">
                            <p>Total</p>
                            <p>${{ Math.round(parseFloat(total)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} </p>
                        </div>

                         <!--<div class="cart_sum_coupon">
                            <input type="text" placeholder="Enter coupon">
                            <button>apply</button>
                        </div>-->
                        <!-- button  -->
                        <div class="cart_sum_pros">
                            <button onclick="javascript:window.location.href='./confirmacion'">Procesar Pago</button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'CartView',
  mounted() {
    this.cargarScriptsExternos();
  },
  methods: {
    cargarScriptsExternos() {
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