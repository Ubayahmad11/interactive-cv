<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal memuat skill:', error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <img
            :src="skill.image"
            :alt="skill.name"
            class="w-16 h-16 mx-auto mb-4 object-contain"
          />
          <h3 class="text-lg font-semibold text-gray-800">{{ skill.name }}</h3>
          <p class="text-sm text-gray-500 mb-4">{{ skill.level }}</p>

          <!-- Progress bar -->
          <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              class="bg-blue-600 h-3 rounded-full transition-all duration-700 ease-in-out"
              :style="{ width: skill.percent + '%' }"
            ></div>
          </div>
          <p class="text-sm text-gray-600 mt-2">{{ skill.percent }}%</p>
        </div>
      </div>
    </div>
  </section>
</template>
