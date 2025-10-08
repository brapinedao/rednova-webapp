<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="modal-close" @click="close">×</button>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ visible: boolean }>()
const emits = defineEmits(['close'])

const close = () => emits('close')

// styles
import '@/styles/css/modal.css'
</script>
