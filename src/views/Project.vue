<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

const route = useRoute()
const project = computed(() => projects.find((p) => p.slug === route.params.slug))
</script>

<template>
  <article v-if="project" class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
    <RouterLink to="/#work" class="text-sm font-medium text-teal-600 hover:underline">← All work</RouterLink>
    <p class="mt-8 text-sm font-semibold uppercase tracking-wide text-teal-600">{{ project.client }} · {{ project.status }}</p>
    <h1 class="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">{{ project.title }}</h1>
    <p class="mt-4 text-lg">{{ project.summary }}</p>
    <a
      v-if="project.link"
      :href="project.link"
      target="_blank"
      rel="noopener"
      class="mt-6 inline-block rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:text-white"
    >{{ project.link.includes('github.com') ? 'View the code ↗' : 'Visit the live site ↗' }}</a>

    <div v-if="project.images?.length" class="mt-10 space-y-4">
      <img v-for="src in project.images" :key="src" :src="src" :alt="project.title" class="w-full rounded-xl border border-slate-200 dark:border-slate-800" loading="lazy" />
    </div>

    <h2 class="mt-12 text-xl font-bold text-slate-900 dark:text-white">The problem</h2>
    <p class="mt-3">{{ project.problem }}</p>

    <h2 class="mt-10 text-xl font-bold text-slate-900 dark:text-white">What I built</h2>
    <p class="mt-3">{{ project.built }}</p>
    <ul class="mt-4 list-disc space-y-2 pl-5">
      <li v-for="f in project.features" :key="f">{{ f }}</li>
    </ul>

    <div class="mt-10 grid gap-6 rounded-2xl bg-slate-50 p-6 sm:grid-cols-2 dark:bg-slate-900">
      <div>
        <h2 class="text-sm font-semibold text-slate-900 dark:text-white">My role</h2>
        <p class="mt-1 text-sm">{{ project.role }}</p>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-slate-900 dark:text-white">Built with</h2>
        <p class="mt-1 text-sm">{{ project.stack.join(' · ') }}</p>
      </div>
    </div>

    <div class="mt-12 rounded-2xl bg-teal-600 p-8 text-center text-white">
      <p class="text-xl font-bold">Need something like this?</p>
      <a :href="profile.whatsapp" target="_blank" rel="noopener" class="mt-4 inline-block rounded-full bg-white px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">WhatsApp me</a>
    </div>
  </article>

  <div v-else class="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
    <p class="text-xl font-semibold text-slate-900 dark:text-white">Project not found.</p>
    <RouterLink to="/#work" class="mt-4 inline-block text-teal-600 hover:underline">See all work</RouterLink>
  </div>
</template>
