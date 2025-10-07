// vue - pinia
import { defineStore } from 'pinia'
import api from '@/services/api'

// interfaces
import type { ILoginData, ILoginResponse, IPermissions } from '@/interfaces/globals'

// constants
import { SESSION_TIMEOUT } from '@/constants'

export const useLoginStore = defineStore('login', {
  state: () => ({
    data_request: null as ILoginResponse | null,
    logoutTimer: null as number | null,
    permissions: [] as IPermissions[],
  }),
  actions: {
    async login(login: ILoginData) {
      if (this.logoutTimer !== null) {
        clearTimeout(this.logoutTimer)
        this.logoutTimer = null
      }

      try {
        const response = await api.post('/login', login)
        this.data_request = response.data
        this.logoutTimer = window.setTimeout(() => {
          this.logout()
        }, SESSION_TIMEOUT)
        return true
      } catch (error) {
        console.error('Error al iniciar sesión:', error)
        return false
      }
    },
    async logout() {
      if (this.logoutTimer !== null) {
        clearTimeout(this.logoutTimer)
        this.logoutTimer = null
      }
      this.data_request = null
    },

    async getPermissions() {
      this.permissions = [
        {
          title: 'Usuarios',
          childrens: [
            {
              title: 'Listar',
            },
            {
              title: 'Agregar',
            },
          ],
        },
        {
          title: 'Servicios',
          childrens: [
            {
              title: 'Listar',
            },
            {
              title: 'Agregar',
            },
          ],
        },
      ]
    },
  },
  persist: true,
})
