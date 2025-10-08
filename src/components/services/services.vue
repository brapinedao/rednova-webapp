<template>
  <section class="servicios section" id="servicios">
    <h2 class="section__title">NUESTROS SERVICIOS</h2>
    <p class="section__subtitle">Nuestro amplio portafolio se ajusta a tus necesidades.</p>

    <div class="servicios__container container">
      <div v-for="service in services" :key="service.id" class="card">
        <div v-if="service.promo" class="card__badge">En promoción</div>
        <img :src="service.img" :alt="service.title" class="card__img" />
        <h3>{{ service.title }}</h3>
        <p class="card__price">{{ useUtils().formatCurrency(Number(service.price)) }}</p>
        <button class="button button--card" @click="openModal(service.id)">Más Información</button>
      </div>
    </div>

    <BaseModal :visible="showModal" @close="showModal = false">
      <template v-if="selectedService">
        <div class="modal-service-content">
          <div class="modal-service-image-container">
            <img
              :src="selectedService.img"
              :alt="selectedService.title"
              class="modal-service-image"
            />
            <p class="modal-service-price">
              <strong>Precio:</strong>
              {{ useUtils().formatCurrency(Number(selectedService.price)) }}
            </p>
          </div>

          <div class="modal-service-text">
            <h2>{{ selectedService.title }}</h2>
            <p>{{ selectedService.description }}</p>
          </div>
        </div>
      </template>
      <template v-else>
        <p>Cargando información...</p>
      </template>
    </BaseModal>
  </section>
</template>

<script setup lang="ts">
// vue - pinia
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

// store
import { useServicesStore } from '@/stores/services-store'

// components
import BaseModal from '@/components/common/modal/baseModal.vue'

// composables
import { useUtils } from '@/composables/useUtils'

const servicesStore = useServicesStore()
const { list: services, selectedService } = storeToRefs(servicesStore)
const { getListServices, getServiceById } = servicesStore

const showModal = ref(false)

const openModal = async (id: number) => {
  showModal.value = true
  await getServiceById(id)
}

onMounted(async () => {
  await getListServices()
})
</script>
