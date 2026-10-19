<script setup lang="ts">
import type { Project } from '../data/projects'
defineProps<{ project: Project }>()
</script>

<template>
  <RouterLink
    :to="`/projects/${project.slug}`"
    class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
  >
    <img v-if="project.images?.length" :src="project.images[0]" :alt="project.title" class="aspect-video w-full object-cover" loading="lazy" />
    <!-- placeholder until real screenshots are added -->
    <div v-else class="flex aspect-video items-end bg-gradient-to-br from-teal-500 to-slate-800 p-5">
      <span class="text-xl font-bold text-white">{{ project.title.split(':')[0] }}</span>
    </div>
    <div class="flex flex-1 flex-col gap-3 p-5">
      <p class="text-xs font-semibold uppercase tracking-wide text-teal-600">{{ project.client }} · {{ project.status }}</p>
      <h3 class="text-lg font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white">{{ project.title }}</h3>
      <p class="text-sm">{{ project.summary }}</p>
      <p class="mt-auto pt-2 text-xs text-slate-500 dark:text-slate-400">{{ project.stack.slice(0, 4).join(' · ') }}</p>
    </div>
  </RouterLink>
</template>
