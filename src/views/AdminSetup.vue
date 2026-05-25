<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <div class="bg-gray-800 rounded-2xl shadow-2xl p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">👑 Admin Setup</h1>
          <p class="text-gray-400">Create super admin account</p>
        </div>

        <div class="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
          <p class="text-yellow-300 text-sm">
            <strong>Default Admin Credentials:</strong>
          </p>
          <p class="text-yellow-200 text-sm mt-2">
            Email: admin@myportfolio.dev
          </p>
          <p class="text-yellow-200 text-sm">
            Password: Admin@123
          </p>
        </div>

        <form @submit.prevent="createAdmin" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              v-model="adminEmail"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              v-model="adminPassword"
              type="password"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-indigo-500 focus:outline-none transition"
            />
          </div>

          <div v-if="errorMessage" class="p-4 rounded-lg bg-red-500/20 border border-red-500/50">
            <p class="text-red-300 text-sm">{{ errorMessage }}</p>
          </div>

          <div v-if="successMessage" class="p-4 rounded-lg bg-green-500/20 border border-green-500/50">
            <p class="text-green-300 text-sm">{{ successMessage }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 disabled:from-yellow-600/50 disabled:to-orange-600/50 disabled:cursor-not-allowed text-white font-semibold transition duration-200"
          >
            <span v-if="loading">Creating Admin...</span>
            <span v-else>👑 Create Super Admin</span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <router-link to="/login" class="text-indigo-400 hover:text-indigo-300 transition">
            Back to Login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabase'

const router = useRouter()
const adminEmail = ref('admin@myportfolio.dev')
const adminPassword = ref('Admin@123')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

onMounted(() => {
  checkAdminExists()
})

const checkAdminExists = async () => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'super_admin')
      .single()

    if (data) {
      successMessage.value = 'Super admin already exists! You can login with the credentials above.'
    }
  } catch (e) {
    // Table might not exist yet
  }
}

const createAdmin = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  loading.value = true

  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: adminEmail.value,
      password: adminPassword.value,
    })

    if (authError) {
      if (authError.message.includes('already been registered')) {
        errorMessage.value = 'Admin already exists. Please use the login page.'
      } else {
        throw authError
      }
      return
    }

    // Create profile record
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        email: adminEmail.value,
        role: 'super_admin',
        created_at: new Date().toISOString()
      })

    if (profileError) {
      console.log('Profile creation note:', profileError.message)
    }

    successMessage.value = '✅ Super admin created successfully! You can now login.'

    // Auto-login after creation
    setTimeout(() => {
      router.push('/login')
    }, 2000)

  } catch (error) {
    errorMessage.value = error.message || 'Failed to create admin'
  } finally {
    loading.value = false
  }
}
</script>
