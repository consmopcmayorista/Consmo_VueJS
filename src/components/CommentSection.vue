<template>
    <div class="comment-section section_padding_b">
      <div class="container">
        <h2 class="section_title_3 mb-4">Comentarios de nuestros clientes</h2>
        <div v-if="comments.length === 0">No hay comentarios aún.</div>
        <div v-else class="comments-carousel">
          <div class="swipe-indicator">
            <i class="fas fa-chevron-left"></i>
            Desliza para ver más
            <i class="fas fa-chevron-right"></i>
          </div>
          <swiper
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :breakpoints="{
              '640': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="comment in comments" :key="comment.id">
              <div class="comment-card">
                <div class="comment-content">
                  <p class="comment-text">"{{ comment.text }}"</p>
                </div>
                <div class="comment-author">
                  <h5>{{ comment.user }}</h5>
                  <small>{{ formatDate(comment.date) }}</small>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <form @submit.prevent="addComment" class="comment-form mt-5">
          <h3 class="mb-4">Deja tu comentario</h3>
          <div class="form-floating mb-3">
            <input v-model="newComment.user" type="text" class="form-control" id="floatingName" placeholder="Tu nombre" required>
            <label for="floatingName">Tu nombre</label>
          </div>
          <div class="form-floating mb-3">
            <textarea v-model="newComment.text" class="form-control" id="floatingComment" placeholder="Tu comentario" style="height: 100px" required></textarea>
            <label for="floatingComment">Tu comentario</label>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-100">Enviar comentario</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        comments: [
          { id: 1, user: 'Juan Pérez', text: 'Excelente servicio y productos de calidad.', date: new Date('2023-05-15') },
          { id: 2, user: 'María García', text: 'Muy satisfecha con mi compra. Recomendado!', date: new Date('2023-05-20') },
          { id: 3, user: 'Carlos Rodríguez', text: 'Buena atención al cliente y envío rápido.', date: new Date('2023-05-25') },
        ],
        newComment: {
          user: '',
          text: ''
        }
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString()
      },
      addComment() {
        const comment = {
          id: this.comments.length + 1,
          user: this.newComment.user,
          text: this.newComment.text,
          date: new Date()
        }
        this.comments.push(comment)
        this.newComment.user = ''
        this.newComment.text = ''
      },
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      }
    },
    setup() {
      return {
        modules: [Pagination],
      };
    }
  }
  </script>
  
  <style scoped>
  .comment-section {
    background-color: #f8f9fa;
    padding: 60px 0;
  }
  
  .comments-carousel {
    padding: 20px 0;
    position: relative;
  }
  
  .swipe-indicator {
    text-align: center;
    color: #888;
    margin-bottom: 20px;
    font-size: 0.9em;
  }
  
  .swipe-indicator i {
    margin: 0 5px;
  }
  
  .comment-card {
    background-color: #ffffff;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
  }
  
  .comment-card:hover {
    transform: translateY(-5px);
  }
  
  .comment-content {
    flex-grow: 1;
  }
  
  .comment-text {
    font-style: italic;
    color: #555;
    margin-bottom: 15px;
    font-size: 1.1em;
    line-height: 1.6;
  }
  
  .comment-author {
    text-align: right;
  }
  
  .comment-author h5 {
    margin-bottom: 0;
    color: #333;
    font-weight: 600;
  }
  
  .comment-author small {
    color: #888;
  }
  
  .comment-form {
    background-color: #ffffff;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .comment-form h3 {
    color: #333;
    font-weight: 600;
    text-align: center;
  }
  
  .form-floating > label {
    color: #6c757d;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    transform: translateY(-2px);
  }
  
  .swiper-pagination {
    position: static;
    margin-top: 30px;
  }
  </style>