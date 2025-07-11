<template>
  <header
    :class="[
      'fixed w-full z-50 transition-all duration-300 backdrop-blur-md',
      scrolled ? 'bg-black/90 shadow-md' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
      <!-- Logo -->
      <div
        class="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Ahmad Baihaqi
      </div>

      <!-- Mobile Toggle -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" aria-label="Toggle Menu">
          <svg
            :class="[
              'w-6 h-6 transition-transform duration-300',
              menuOpen ? 'rotate-90 scale-110' : ''
            ]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-8 font-medium">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="'#' + item.id"
            @click.prevent="scrollTo(item.id)"
            :class="[
              'relative nav-item transition-all duration-300',
              activeSection === item.id ? 'active' : ''
            ]"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden px-6 pb-4 pt-2 bg-black text-white">
        <ul class="flex flex-col space-y-4">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="'#' + item.id"
              @click.prevent="scrollTo(item.id); toggleMenu()"
              :class="[
                'block transition-all duration-200',
                activeSection === item.id ? 'text-blue-400 font-semibold' : ''
              ]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('')

const navItems = [
  { id: 'profil', label: 'Profil' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skill', label: 'Skills' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'kontak', label: 'Kontak' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function scrollTo(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
  let found = false
  for (const item of navItems) {
    const sec = document.getElementById(item.id)
    if (sec) {
      const rect = sec.getBoundingClientRect()
      const offset = 120

      if (rect.top <= offset && rect.bottom >= offset) {
        activeSection.value = item.id
        found = true
        break
      }
    }
  }

  if (!found) activeSection.value = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-item::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -4px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
  transition: width 0.3s ease;
}
.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}
.nav-item.active {
  color: #60a5fa; /* text-blue-400 */
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
