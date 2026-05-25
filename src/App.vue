<template>
  <div id="app" class="min-h-screen bg-gray-900 text-white">
    <nav class="bg-gray-800 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold text-indigo-400">Portfolio</router-link>
          </div>
          <div class="flex items-center space-x-4">
            <template v-if="isAuthenticated">
              <span class="text-gray-300">{{ user?.email }}</span>
              <button @click="handleLogout" class="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition">
                Logout
              </button>
            </template>
            <template v-else>
              <router-link to="/login" class="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition">
                Login
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from './lib/supabase'

const router = useRouter()
const isAuthenticated = ref(false)
const user = ref(null)

onMounted(() => {
  checkUser()
  supabase.auth.onAuthStateChange((event, session) => {
    isAuthenticated.value = !!session
    user.value = session?.user || null
  })
})

const checkUser = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  isAuthenticated.value = !!session
  user.value = session?.user
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push('/')
}
</script>
