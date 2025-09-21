// vue - pinia
import { defineStore } from 'pinia'

// interfaces
import type { ICompanyValue } from '@/interfaces/globals'

export const useCompanyStore = defineStore('company', {
  state: (): { description: string; values: ICompanyValue[] } => ({
    description:
      'En RedNova somos una empresa tecnológica líder apasionada por impulsar el crecimiento de negocios a través de soluciones digitales innovadoras. Con más de 10 años de experiencia, nuestro equipo combina visión estratégica con soluciones robustas.',
    values: [
      {
        icon: 'fas fa-database',
        title: 'Data recovery',
        desc: 'Protegemos y recuperamos tus datos críticos.',
      },
      {
        icon: 'fas fa-computer',
        title: 'Computer repair',
        desc: 'Soporte técnico para todos tus equipos.',
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile service',
        desc: 'Soluciones y desarrollo para móviles.',
      },
      {
        icon: 'fas fa-network-wired',
        title: 'Network solutions',
        desc: 'Diseño y gestión de redes seguras.',
      },
    ],
  }),
})
