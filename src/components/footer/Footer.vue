<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__section">
        <h4>CONTÁCTANOS</h4>
        <p>{{ address }}<br />{{ phone }}</p>
      </div>
      <div class="footer__section">
        <h4>SERVICIOS</h4>
        <ul>
          <li><a href="#">Diseño y desarrollo de Software</a></li>
          <li><a href="#">Redes de datos</a></li>
          <li><a href="#">Consultoría en Seguridad Informática</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4>ACERCA DE</h4>
        <p>About RedNova</p>
      </div>
    </div>
    <div class="footer__copy">
      <p>Copyright 2025 Todos los Derechos Reservados REDNOVA</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useContactStore } from '@/stores/contact-store'
import { storeToRefs } from 'pinia'

const contactStore = useContactStore()
const { address, phone } = storeToRefs(contactStore)
</script>
