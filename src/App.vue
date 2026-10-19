<script setup lang="ts">
import { profile } from './data/profile'
</script>

<template>
  <header class="sticky top-0 z-10 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
    <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <RouterLink to="/" class="font-bold text-slate-900 dark:text-white">{{ profile.name }}</RouterLink>
      <div class="flex items-center gap-4 text-sm font-medium sm:gap-6">
        <RouterLink to="/#services" class="hidden hover:text-teal-600 sm:inline">Services</RouterLink>
        <RouterLink to="/#work" class="hover:text-teal-600">Work</RouterLink>
        <RouterLink to="/#contact" class="hidden hover:text-teal-600 sm:inline">Contact</RouterLink>
        <a :href="profile.whatsapp" target="_blank" rel="noopener" class="rounded-full bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">WhatsApp me</a>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="border-t border-slate-200 dark:border-slate-800">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm sm:px-6">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }} · {{ profile.location }}</p>
      <div class="flex gap-5">
        <a :href="`mailto:${profile.email}`" class="hover:text-teal-600">Email</a>
        <a :href="profile.github" target="_blank" rel="noopener" class="hover:text-teal-600">GitHub</a>
      </div>
    </div>
  </footer>
</template>
