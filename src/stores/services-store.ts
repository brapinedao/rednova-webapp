// vue - pinia
import { defineStore } from 'pinia'

// interfaces
import type { IService } from '@/interfaces/globals'

export const useServicesStore = defineStore('services', {
  state: () => ({
    list: [] as IService[] | [],
  }),
  actions: {
    async getListServices() {
      return await [
        {
          id: 1,
          title: 'Desarrollo Web Personalizado',
          price: '$XX.XXX',
          promo: true,
          img: '/src/assets/images/web-dev.png',
        },
        {
          id: 2,
          title: 'Aplicaciones Móviles',
          price: '$XX.XXX',
          promo: false,
          img: '/src/assets/images/mobile-app.png',
        },
        {
          id: 3,
          title: 'Sistemas de Gestión ERP',
          price: '$XX.XXX',
          promo: true,
          img: '/src/assets/images/erp.png',
        },
      ]
    },
  },
})
