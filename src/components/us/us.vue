<template>
  <section class="nosotros section" id="nosotros">
    <h2 class="section__title">POR QUÉ ELEGIRNOS</h2>
    <div class="nosotros__container container">
      <div class="nosotros__data">
        <p>{{ description }}</p>
      </div>
      <div class="nosotros__services">
        <div v-for="(value, index) in values" :key="index" class="service__item">
          <div class="service__icon"><i :class="value.icon"></i></div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCompanyStore } from '@/stores/company-store'
import { storeToRefs } from 'pinia'

const companyStore = useCompanyStore()
const { description, values } = storeToRefs(companyStore)
</script>
