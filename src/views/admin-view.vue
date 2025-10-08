<template>
  <section class="admin-section">
    <h1 class="admin-title">Panel de Administración</h1>

    <div class="admin-permissions">
      <div v-for="(permission, idx) in permissions" :key="idx" class="permission-card">
        <div class="permission-header">
          <h2>{{ permission.title }}</h2>
        </div>

        <div class="permission-actions">
          <button class="action-btn list" @click="openModal('list', permission)">
            <i class="mdi mdi-format-list-bulleted"></i> Listar
          </button>

          <button class="action-btn add" @click="openModal('add', permission)">
            <i class="mdi mdi-plus-circle-outline"></i> Agregar
          </button>
        </div>
      </div>
    </div>

    <BaseModal :visible="showModal" @close="closeModal">
      <template v-if="modalType === 'list'">
        <h2>Listado de {{ selectedPermission?.title }}</h2>

        <!-- Tabla de usuarios -->
        <table v-if="selectedPermission?.title === 'Usuarios' && users.length" class="user-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.rol }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Tabla de servicios -->
        <div
          v-else-if="selectedPermission?.title === 'Servicios' && services.length"
          class="table-container"
        >
          <table class="user-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in services" :key="service.id">
                <td>{{ service.title }}</td>
                <td>{{ service.description }}</td>
                <td>{{ useUtils().formatCurrency(Number(service.price)) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-else>Cargando {{ selectedPermission?.title?.toLowerCase() }}...</p>
      </template>

      <template v-else-if="modalType === 'add'">
        <h2>Agregar {{ selectedPermission?.title }}</h2>

        <!-- Formulario para crear usuario -->
        <form
          v-if="selectedPermission?.title === 'Usuarios'"
          class="form-create"
          @submit.prevent="handleCreateUser"
        >
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" v-model="newUser.name" placeholder="Nombre completo" required />
          </div>

          <div class="form-group">
            <label>Usuario</label>
            <input
              type="email"
              v-model="newUser.username"
              placeholder="Nombre de usuario"
              required
            />
          </div>

          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" v-model="newUser.password" placeholder="Contraseña" required />
          </div>

          <div class="form-group">
            <label>Rol</label>
            <select v-model="newUser.rol" required>
              <option disabled value="">Seleccione un rol</option>
              <option>admin</option>
              <option>user</option>
            </select>
          </div>

          <button type="submit" class="submit-btn">Crear Usuario</button>
        </form>

        <form
          v-else-if="selectedPermission?.title === 'Servicios'"
          class="form-create"
          @submit.prevent="handleCreateService"
        >
          <div class="form-group">
            <label>Nombre del Servicio</label>
            <input
              type="text"
              v-model="newService.name"
              placeholder="Título del servicio"
              required
            />
          </div>

          <div class="form-group">
            <label>Descripción</label>
            <textarea
              v-model="newService.description"
              placeholder="Descripción del servicio"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label>Precio</label>
            <input type="number" v-model="newService.price" placeholder="Precio" required />
          </div>

          <div class="form-group">
            <label>Imagen (URL)</label>
            <input type="text" v-model="newService.image" placeholder="URL de la imagen" required />
          </div>

          <button type="submit" class="submit-btn">Crear Servicio</button>
        </form>

        <!-- Placeholder para otros tipos de creación -->
        <p v-else>Formulario para agregar {{ selectedPermission?.title }} en desarrollo...</p>
      </template>
    </BaseModal>
  </section>
</template>

<script setup lang="ts">
// vue - pinia
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import router from '@/router'

// composables
import { useAlert } from '@/composables/useAlert'
import { useUtils } from '@/composables/useUtils'

// stores
import { useLoginStore } from '@/stores/login-store'
import { useServicesStore } from '@/stores/services-store'

// components
import BaseModal from '@/components/common/modal/baseModal.vue'

// interfaces
import type { IPermissions, IUserToCreate, IServiceToCreate } from '@/interfaces/globals'

// styles
import '@/styles/css/admin.css'

const loginStore = useLoginStore()
const { permissions, data_request, users } = storeToRefs(loginStore)
const { getUsers } = loginStore

const servicesStore = useServicesStore()
const { list: services } = storeToRefs(servicesStore)

// modal
const showModal = ref(false)
const modalType = ref<'list' | 'add' | null>(null)
const selectedPermission = ref<IPermissions | null>(null)

const openModal = async (type: 'list' | 'add', permission: IPermissions) => {
  if (permission.title === 'Usuarios' && type === 'list') {
    await getUsers()
  }
  if (permission.title === 'Servicios' && type === 'list') {
    const { getListServices } = useServicesStore()
    await getListServices()
  }
  modalType.value = type
  selectedPermission.value = permission
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  modalType.value = null
  selectedPermission.value = null
}

// user - create
const newUser = ref<IUserToCreate>({
  username: '',
  password: '',
  name: '',
  rol: '',
})

const handleCreateUser = async () => {
  const success = await loginStore.createUser(newUser.value)
  if (success) {
    closeModal()
    newUser.value = { username: '', password: '', name: '', rol: '' }
    await getUsers()
  }
}

// service - create
const newService = ref<IServiceToCreate>({
  name: '',
  price: '',
  image: '',
  prop: false,
  description: '',
})

const handleCreateService = async () => {
  const success = await servicesStore.createService(newService.value)
  if (success) {
    closeModal()
    newService.value = { name: '', price: '', image: '', prop: false, description: '' }
    await servicesStore.getListServices()
  }
}

// lifecycle
onMounted(() => {
  if (data_request.value?.rol?.toLowerCase() !== 'admin') {
    useAlert().showAlert('No tiene permisos para visitar este módulo', 'error', 3000)
    loginStore.setPermissions()
    return router.push('/')
  }

  loginStore.getPermissions()
})
</script>
