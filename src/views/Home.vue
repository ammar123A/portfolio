<script setup lang="ts">
import { profile, services, stack, steps } from '../data/profile'
import { projects, moreWork } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
    <p class="font-semibold text-teal-600">{{ profile.role }} · {{ profile.location }}</p>
    <h1 class="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl dark:text-white">
      Systems that run your business, not just a website.
    </h1>
    <p class="mt-5 max-w-2xl text-lg">{{ profile.pitch }}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a :href="profile.whatsapp" target="_blank" rel="noopener" class="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">WhatsApp me</a>
      <a href="#work" class="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:text-white">See my work</a>
    </div>
  </section>

  <section id="services" class="bg-slate-50 py-20 dark:bg-slate-900/50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white">What I can build for you</h2>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="s in services" :key="s.title" class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h3 class="font-semibold text-slate-900 dark:text-white">{{ s.title }}</h3>
          <p class="mt-2 text-sm">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="work" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Selected work</h2>
    <p class="mt-3 max-w-2xl">Company, client and personal projects. Click one for the full story.</p>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
    </div>

    <h3 class="mt-16 text-xl font-semibold text-slate-900 dark:text-white">More work</h3>
    <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="m in moreWork" :key="m.title" class="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <p class="font-semibold text-slate-900 dark:text-white">
          <a v-if="m.link" :href="m.link" target="_blank" rel="noopener" class="hover:text-teal-600">{{ m.title }} ↗</a>
          <template v-else>{{ m.title }}</template>
        </p>
        <p class="mt-1 text-sm">{{ m.text }}</p>
        <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">{{ m.stack }}</p>
      </li>
    </ul>
  </section>

  <section class="bg-slate-50 py-20 dark:bg-slate-900/50">
    <div class="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
      <div>
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white">About me</h2>
        <p class="mt-4">{{ profile.bio }}</p>
        <dl class="mt-8 space-y-4">
          <div v-for="g in stack" :key="g.group">
            <dt class="text-sm font-semibold text-slate-900 dark:text-white">{{ g.group }}</dt>
            <dd class="mt-2 flex flex-wrap gap-2">
              <span v-for="i in g.items" :key="i" class="rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">{{ i }}</span>
            </dd>
          </div>
        </dl>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white">How I work</h2>
        <ol class="mt-6 space-y-5">
          <li v-for="(s, i) in steps" :key="s.title" class="flex gap-4">
            <span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-600 font-bold text-white">{{ i + 1 }}</span>
            <div>
              <p class="font-semibold text-slate-900 dark:text-white">{{ s.title }}</p>
              <p class="text-sm">{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <section id="contact" class="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Have a project in mind?</h2>
    <p class="mx-auto mt-3 max-w-xl">Tell me what's slowing your business down. I usually reply within a day.</p>
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <a :href="profile.whatsapp" target="_blank" rel="noopener" class="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">WhatsApp {{ profile.whatsappDisplay }}</a>
      <a :href="`mailto:${profile.email}`" class="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:text-white">{{ profile.email }}</a>
    </div>
  </section>
</template>
