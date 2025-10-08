// vue - pinia
import { defineStore } from 'pinia'
import api from '@/services/api'
import { useAlert } from '@/composables/useAlert'

// interfaces
import type { IService, IServiceToCreate } from '@/interfaces/globals'

export const useServicesStore = defineStore('services', {
  state: () => ({
    list: [] as IService[] | [],
    selectedService: null as IService | null,
  }),
  actions: {
    async getListServices() {
      try {
        const response = await api.get('/services')

        this.list = response.data.map((item: any) => ({
          ...item,
          title: item.name,
          promo: true,
          img: item.image,
        }))

        useAlert().showAlert('Listado obtenido exitosamente', 'success', 3000)
      } catch (error) {
        useAlert().showAlert('Error al obtener el listado de servicios', 'error', 3000)
      }
    },

    async getServiceById(id: number) {
      try {
        const response = await api.get(`/services/${id}`)
        this.selectedService = {
          ...response.data,
          title: response.data.name,
          promo: true,
          img: response.data.image,
        }

        useAlert().showAlert('Información obtenida exitosamente', 'success', 3000)
      } catch (error) {
        useAlert().showAlert('Error al información del servicio', 'error', 3000)
      }
    },

    async createService(data: IServiceToCreate) {
      try {
        await api.post('/services', data)
        useAlert().showAlert('Servicio creado exitosamente', 'success', 3000)

        return true
      } catch (error) {
        useAlert().showAlert('Error al crear el servicio', 'error', 3000)

        return false
      }
    },
  },
})
