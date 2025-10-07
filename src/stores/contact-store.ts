// vue - pinia
import { defineStore } from 'pinia'

// interfaces
import type { IContact } from '@/interfaces/globals'

export const useContactStore = defineStore('contact', {
  state: (): IContact => ({
    phone: '+57 (601) 654 3210',
    email: 'contacto@rednova.com',
    address: 'Calle 13 #46-05, Bogotá, Colombia',
    whatsapp: 'https://wa.me/576543210',
  }),
})
