<script setup>
import SectionTitle from './SectionTitle.vue'
import { Github, Instagram, Mail, Facebook, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />

      <p class="text-xl text-gray-300 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <!-- Tombol Kirim Email -->
      <a
        href="mailto:ubayahma20@gmail.com"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>

      <!-- Tautan Sosial Media -->
      <div class="flex justify-center flex-wrap gap-6 mb-8 text-sm">
        <a
          href="https://github.com/Ubayahmad11"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
        >
          <Github class="w-5 h-5" />
          <span>GitHub</span>
        </a>

        <a
          href="https://instagram.com/ubayahd"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
        >
          <Instagram class="w-5 h-5" />
          <span>Instagram</span>
        </a>

        <a
          href="mailto:ubayahmad20@gmail.com"
          class="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
        >
          <Mail class="w-5 h-5" />
          <span>Email</span>
        </a>

        <a
          href="https://www.facebook.com/?locale=id_ID"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
        >
          <Facebook class="w-5 h-5" />
          <span>Facebook</span>
        </a>

        <a
          href="https://linkedin.com/in/ubayahmad"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
        >
          <Linkedin class="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>

      <!-- Footer Text -->
      <p class="text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Ahmad Baihaqi. Dibuat menggunakan Vue & Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
