<script setup>
import { ref, onMounted } from 'vue'

// Teks berjalan dinamis
const roles = [
  'Frontend Developer',
  'UI/UX Enthusiast',
  'Web Designer',
  'Backend Developer',
  'Software Engineer'
]
const currentTitle = ref('')
let titleIndex = 0
let charIndex = 0
let typingForward = true

function typeRole() {
  const currentRole = roles[titleIndex]

  if (typingForward) {
    if (charIndex < currentRole.length) {
      currentTitle.value += currentRole[charIndex++]
    } else {
      typingForward = false
      setTimeout(typeRole, 1500)
      return
    }
  } else {
    if (charIndex > 0) {
      currentTitle.value = currentTitle.value.slice(0, --charIndex)
    } else {
      typingForward = true
      titleIndex = (titleIndex + 1) % roles.length
    }
  }

  setTimeout(typeRole, typingForward ? 100 : 50)
}

onMounted(() => {
  typeRole()
})
</script>

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
        Halo, Saya <span class="text-yellow-300">Ahmad Baihaqi</span>
      </h1>

      <!-- Teks berjalan -->
      <p
        class="text-2xl font-mono text-white h-10 mb-4 animate-slide-in-left transition-all duration-300"
        style="animation-delay: 300ms;"
      >
        {{ currentTitle }}<span class="animate-pulse">|</span>
      </p>

      <p
        class="text-xl mb-8 text-gray-100 animate-slide-in-left"
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
        class="w-80 h-80 rounded-full object-cover shadow-xl border-4 border-white profile-img"
      />
    </div>
  </section>
</template>

<style scoped>
/* Cursor teks berjalan */
.animate-pulse {
  animation: pulse-blink 1s infinite;
}

@keyframes pulse-blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Animasi untuk membuat gambar bergerak (getar) */
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

/* Apply shake effect to profile image */
.profile-img {
  animation: shake 2s ease-in-out infinite;
}
</style>
