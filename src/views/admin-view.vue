<template>
  <div class="admin-permissions">
    <div v-for="(permission, idx) in permissions" :key="idx" class="permission-section">
      <Card :title="permission.title" class="permission-card">
        <template #default>
          <ul class="permission-options">
            <li v-for="(child, cidx) in permission.childrens" :key="cidx">
              <button class="permission-option-btn" @click="onChildClick(permission, child)">
                {{ child.title }}
              </button>
            </li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue - pinia
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

// store
import { useLoginStore } from '@/stores/login-store'

// components
import Card from '@/components/common/card/card.vue'

// interfaces
import type { IChildrenPermissions, IPermissions } from '@/interfaces/globals'

// store
const loginStore = useLoginStore()
const { permissions } = storeToRefs(loginStore)

//life cycle
onMounted(() => {
  loginStore.getPermissions()
})

// actions
const onChildClick = (permission: IPermissions, child: IChildrenPermissions) => {}
</script>

<style scoped>
.admin-permissions {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>
