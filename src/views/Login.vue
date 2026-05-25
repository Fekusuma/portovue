<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-600 via-primary to-teal-700 flex items-center justify-center px-4 py-12">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-dark mb-2">Selamat Datang</h1>
          <p class="text-abu">Masuk ke akun Anda</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-primary mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-dark placeholder-abu focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-primary mb-2">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-dark placeholder-abu focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="••••••••"
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
            class="w-full py-3 rounded-lg bg-primary hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold transition duration-200 flex items-center justify-center gap-2"
          >
            <span v-if="loading" class="animate-spin">⏳</span>
            <span>{{ loading ? 'Memproses...' : isSignUp ? 'Daftar' : 'Masuk' }}</span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <button
            @click="isSignUp = !isSignUp"
            class="text-primary hover:text-primary/80 transition"
          >
            {{ isSignUp ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar' }}
          </button>
        </div>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-abu">Atau lanjutkan dengan</span>
            </div>
          </div>

          <button
            @click="handleGoogleLogin"
            :disabled="loading"
            class="mt-4 w-full py-3 rounded-lg bg-white hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed border border-slate-200 text-dark font-semibold transition duration-200 flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Masuk dengan Google</span>
          </button>
        </div>

        <div class="mt-6 pt-6 border-t border-slate-200 text-center">
          <router-link to="/admin-setup" class="text-primary hover:text-primary/80 text-sm transition">
            👑 Setup Admin Account
          </router-link>
        </div>

        <div class="mt-4 text-center">
          <router-link to="/" class="text-abu hover:text-dark text-sm transition">
            ← Kembali ke Beranda
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabase'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const isSignUp = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  loading.value = true

  try {
    if (isSignUp.value) {
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })

      if (error) throw error

      successMessage.value = 'Account created! You can now sign in.'
      isSignUp.value = false
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })

      if (error) throw error

      router.push('/')
    }
  } catch (error) {
    errorMessage.value = error.message || 'Authentication failed'
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  errorMessage.value = ''
  loading.value = true

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    })

    if (error) throw error
  } catch (error) {
    errorMessage.value = error.message || 'Google sign-in failed'
    loading.value = false
  }
}
</script>
