<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-600 via-primary to-teal-700 flex items-center justify-center px-4 py-12">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-dark mb-2">👑 Admin Setup</h1>
          <p class="text-abu">Buat akun super admin</p>
        </div>

        <div class="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
          <p class="text-teal-700 text-sm font-medium">
            <strong>Kredensial Admin Default:</strong>
          </p>
          <p class="text-teal-600 text-sm mt-2">
            Email: admin@myportfolio.dev
          </p>
          <p class="text-teal-600 text-sm">
            Password: Admin@123
          </p>
        </div>

        <form @submit.prevent="createAdmin" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-primary mb-2">Email</label>
            <input
              v-model="adminEmail"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-dark focus:border-primary focus:outline-none transition"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-primary mb-2">Password</label>
            <input
              v-model="adminPassword"
              type="password"
              required
              class="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-dark focus:border-primary focus:outline-none transition"
            />
          </div>

          <div v-if="errorMessage" class="p-4 rounded-lg bg-red-100 border border-red-300">
            <p class="text-red-600 text-sm">{{ errorMessage }}</p>
          </div>

          <div v-if="successMessage" class="p-4 rounded-lg bg-green-100 border border-green-300">
            <p class="text-green-600 text-sm">{{ successMessage }}</p>
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
