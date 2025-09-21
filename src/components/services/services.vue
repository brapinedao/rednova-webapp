<template>
  <section class="servicios section" id="servicios">
    <h2 class="section__title">NUESTROS SERVICIOS</h2>
    <p class="section__subtitle">Nuestro amplio portafolio se ajusta a tus necesidades.</p>

    <div class="servicios__container container">
      <div v-for="service in services" :key="service.id" class="card">
        <div v-if="service.promo" class="card__badge">En promoción</div>
        <img :src="service.img" :alt="service.title" class="card__img" />
        <h3>{{ service.title }}</h3>
        <p class="card__price">{{ service.price }}</p>
        <button class="button button--card">Más Información</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// vue - pinia
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

// store
import { useServicesStore } from '@/stores/services-store'
const servicesStore = useServicesStore()
const { list: services } = storeToRefs(servicesStore)
const { getListServices } = servicesStore

// life
onMounted(async () => {
  await getListServices()
})
</script>
