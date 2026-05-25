<template>
  <div id="app" class="min-h-screen">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { supabase } from './lib/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Check auth state changes
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      // User signed in
    } else if (event === 'SIGNED_OUT') {
      // User signed out
      router.push('/')
    }
  })
})
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
