<template>
  <Header ref="headerRef" />
  <main :style="{ paddingTop: headerHeight + 'px' }">
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from '@/components/header/headers.vue'
import Footer from '@/components/footer/Footer.vue'

const headerRef = ref<InstanceType<typeof Header> | null>(null)
const headerHeight = ref(0)

const updateHeight = () => {
  if (headerRef.value?.$el) {
    headerHeight.value = headerRef.value.$el.offsetHeight
  }
}

onMounted(() => {
  updateHeight()
  window.addEventListener('resize', updateHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight)
})
</script>
