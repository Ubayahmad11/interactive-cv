<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Failed to fetch education history:', error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative">
        <!-- Garis vertikal di tengah -->
        <div class="absolute h-full border-r-2 border-gray-300 left-1/2 transform -translate-x-1/2"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex justify-between items-center w-full"
        >
          <!-- Genap: Kiri -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <!-- Keterangan -->
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
            <!-- Titik & Gambar -->
            <div class="w-1/2 flex items-center gap-4">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
              <img
                :src="edu.image"
                alt="Logo {{ edu.institution }}"
                class="w-20 h-20 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          <!-- Ganjil: Kanan -->
          <div v-else class="w-full flex">
            <!-- Titik & Gambar -->
            <div class="w-1/2 flex justify-end items-center gap-4">
              <img
                :src="edu.image"
                alt="Logo {{ edu.institution }}"
                class="w-20 h-20 object-cover rounded-full shadow-lg"
              />
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
            <!-- Keterangan -->
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
