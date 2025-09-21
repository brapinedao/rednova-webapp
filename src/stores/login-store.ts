// vue - pinia
import { defineStore } from 'pinia'

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
      console.log(login)
      if (this.logoutTimer !== null) {
        clearTimeout(this.logoutTimer)
        this.logoutTimer = null
      }
      this.data_request = {
        name: 'Brian Pineda',
        email: 'brian@gmail.com',
        photo:
          'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg',
      }

      this.logoutTimer = window.setTimeout(() => {
        this.logout()
      }, SESSION_TIMEOUT)
      return true
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
