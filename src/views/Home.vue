<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
            Welcome to My Portfolio
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A creative developer building amazing experiences with modern technologies
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" class="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
              View Projects
            </a>
            <a href="#contact" class="px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition font-semibold">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-indigo-400">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-gray-300 mb-6">
              I'm a passionate full-stack developer with expertise in Vue.js, modern JavaScript frameworks, and cloud technologies.
            </p>
            <p class="text-lg text-gray-300 mb-6">
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 rounded-full bg-indigo-600/30 text-indigo-300">Vue.js</span>
              <span class="px-4 py-2 rounded-full bg-indigo-600/30 text-indigo-300">JavaScript</span>
              <span class="px-4 py-2 rounded-full bg-indigo-600/30 text-indigo-300">Tailwind CSS</span>
              <span class="px-4 py-2 rounded-full bg-indigo-600/30 text-indigo-300">Supabase</span>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">
              <span class="text-8xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-indigo-400">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300">
            <div class="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span class="text-6xl">{{ project.icon }}</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" class="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-800">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-indigo-400">Get In Touch</h2>
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input type="text" class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:outline-none transition">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input type="email" class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:outline-none transition">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Message</label>
            <textarea rows="5" class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:outline-none transition"></textarea>
          </div>
          <button type="submit" class="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; 2025 Portfolio. Built with Vue.js & Supabase.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    icon: '🛒',
    tags: ['Vue.js', 'Supabase', 'Stripe']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and team features.',
    icon: '✅',
    tags: ['Vue.js', 'Tailwind', 'Supabase']
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, maps, and location-based data.',
    icon: '🌤️',
    tags: ['API Integration', 'Charts', 'Vue.js']
  }
]
</script>
