<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            :src="project.image"
            alt="Gambar {{ project.title }}"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>

            <!-- Teknologi -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {{ t }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-blue-600 font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
