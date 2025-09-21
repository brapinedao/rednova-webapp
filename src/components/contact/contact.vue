<template>
  <section class="contacto section" id="contacto">
    <div class="contacto__banner">
      <div class="contacto__banner-content container">
        <div class="banner__text">
          <h3>Solicita sin costo una asesoría</h3>
          <p>Nuestros expertos te esperan</p>
        </div>
        <div class="banner__icons">
          <a :href="`tel:${phone}`" class="icon-button"><i class="fas fa-phone"></i></a>
          <a :href="`mailto:${email}`" class="icon-button"><i class="fas fa-envelope"></i></a>
          <a :href="whatsapp" target="_blank" class="icon-button"
            ><i class="fab fa-whatsapp"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="map__container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.97399587823!2d-74.108253185238!3d4.599026696659714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f990a0d0a0a0d%3A0x2a2a2a2a2a2a2a2a!2sCl.%2013%20%2346-5%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1663428989914!5m2!1ses!2sco"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactStore } from '@/stores/contact-store'
import { storeToRefs } from 'pinia'

const contactStore = useContactStore()
const { phone, email, whatsapp } = storeToRefs(contactStore)
</script>
