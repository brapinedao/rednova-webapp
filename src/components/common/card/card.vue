<template>
  <div class="rn-card">
    <div class="rn-card__header">
      <div v-if="icon" class="rn-card__icon">
        <slot name="icon">
          <img :src="icon" alt="icon" />
        </slot>
      </div>
      <h3 class="rn-card__title">{{ title }}</h3>
      <p v-if="subtitle" class="rn-card__subtitle">{{ subtitle }}</p>
      <div class="rn-card__actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="rn-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// styles
import '@/styles/css/card.css'

defineProps<{
  title: string
  subtitle?: string
  icon?: string
}>()

defineEmits<{ (e: 'click'): void }>()
</script>
