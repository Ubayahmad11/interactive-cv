<template>
  <section
    id="profil"
    class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
  >
    <!-- Text Section -->
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1
        class="text-5xl font-bold mb-4 animate-slide-in-left"
        style="animation-delay: 200ms;"
      >
        Halo, Saya <span class="text-yellow-200">Ahmad Baihaqi</span>
      </h1>

      <p
        class="text-xl mb-8 animate-slide-in-left"
        style="animation-delay: 400ms;"
      >
        Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
      </p>

      <a
        href="#kontak"
        class="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms;"
        aria-label="Hubungi Saya"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Image Section -->
    <div
      class="md:w-1/2 flex justify-center animate-slide-in-right"
      style="animation-delay: 200ms;"
    >
      <img
        src="/pp.webp"
        alt="Foto Profil Ahmad Baihaqi"
        class="w-80 h-80 rounded-full object-cover shadow-xl border-4 border-white"
      />
    </div>
  </section>
</template>
