<script setup>
import SectionTitle from './SectionTitle.vue'
import { Github, Instagram, Mail, Facebook, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6">
      <!-- Judul -->
      <SectionTitle title="Hubungi Saya" textColor="text-white" />

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <!-- Kolom Sosial Media -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-semibold mb-4">Sosial Media</h3>
          <div class="flex justify-center md:justify-start flex-wrap gap-4 text-sm">
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
              href="https://www.linkedin.com/in/ubayahmad"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
            >
              <Linkedin class="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Kolom Tentang Saya -->
        <div class="text-center md:text-right">
          <h3 class="text-xl font-semibold mb-4">Tentang Saya</h3>
          <p class="text-gray-300 text-base leading-relaxed">
            Saya adalah mahasiswa aktif di Universitas Amikom Yogyakarta jurusan Teknik Informatika,
            memiliki ketertarikan tinggi dalam dunia pengembangan web, UI/UX Design, serta teknologi backend.
            Saya senang belajar hal baru, bekerja dalam tim, dan berkontribusi dalam pengembangan solusi digital yang berdampak.
          </p>
        </div>
      </div>

      <!-- Tombol Kirim Email -->
      <div class="text-center mb-10">
        <a
          href="mailto:ubayahma20@gmail.com"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          Kirim Email
        </a>
      </div>

      <!-- Footer Text -->
      <p class="text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Ahmad Baihaqi. Dibuat menggunakan Vue & Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
