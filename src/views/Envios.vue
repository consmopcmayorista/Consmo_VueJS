<script setup>
import { ref, onMounted } from 'vue';
import { LMap, LTileLayer, LPolygon } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

// Configuración del mapa
const zoom = ref(13);
const center = ref([6.2442, -75.5812]); // Centro de Medellín
const mapReady = ref(false);

// Coordenadas aproximadas para el área de Medellín
const polygonCoordinates = ref([
  [6.3100, -75.5736], // Norte
  [6.2800, -75.6000], // Noroeste
  [6.2200, -75.6100], // Sur
  [6.2000, -75.5800], // Sureste
  [6.2300, -75.5400], // Oriente
  [6.3100, -75.5736], // Cerrar el polígono
]);

onMounted(() => {
  // Asegúrate de que el mapa se renderice después de que el componente esté montado
  mapReady.value = true;
});
</script>

<template>
  <div style="height: 500px; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
    <l-map v-if="mapReady" :zoom="zoom" :center="center" style="height: 100%; border-radius: 10px;">
      <!-- Capa base del mapa -->
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      
      <!-- Polígono estilizado -->
      <l-polygon 
        :lat-lngs="polygonCoordinates"
        color="#007bff"
        fill-color="#007bff"
        :fill-opacity="0.3"
        weight="2"
      />
    </l-map>
  </div>
</template>

<style>
@import 'leaflet/dist/leaflet.css';

/* Estilo opcional para una mejor presentación */
</style>
