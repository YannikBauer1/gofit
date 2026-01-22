<template>
  <!-- Header -->
  <header
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 backdrop-blur-sm"
    :class="
      scrolled
        ? 'shadow-lg'
        : 'md:shadow-none'
    "
  >
    <div class="px-6 py-4">
      <div class="mx-auto max-w-7xl flex justify-between items-center">
        <!-- Logo and Title -->
        <div class="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="GoFit Logo"
            class="w-10 h-10 rounded-xl"
          />
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center space-x-8">
          <a
            @click="scrollToTop"
            class="text-white hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Home
          </a>
          <a
            @click="scrollToSection('kurse')"
            class="text-white hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Kurse
          </a>
          <a
            @click="scrollToSection('preise')"
            class="text-white hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Preise
          </a>
          <a
            @click="scrollToSection('trainer')"
            class="text-white hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Rehasport
          </a>
          <a
            @click="scrollToSection('contact')"
            class="text-white hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Kontakt
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-700 hover:text-highlight transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200"
      >
        <div class="flex flex-col space-y-3 pt-4">
          <a
            @click="scrollToTop"
            class="text-gray-700 hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Home
          </a>
          <a
            @click="scrollToSection('kurse')"
            class="text-gray-700 hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Kurse
          </a>
          <a
            @click="scrollToSection('preise')"
            class="text-gray-700 hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Preise
          </a>
          <a
            @click="scrollToSection('trainer')"
            class="text-gray-700 hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Trainer
          </a>
          <a
            @click="scrollToSection('contact')"
            class="text-gray-700 hover:text-highlight cursor-pointer transition-colors duration-300 font-medium"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  </header>

  <div
    class="min-h-screen pb-12"
  >
    <div
      class="items-center h-screen"
    >
      <video
        src="/video.mp4"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover"
      ></video>
    </div>

    <!-- Statistics Section -->
    <div class="max-w-7xl mx-auto">

    </div>

    <!-- Kurse Section -->
    <div id="kurse" class="max-w-7xl mx-auto">
    </div>

    <!-- Preise Section -->
    <div id="preise" class="max-w-7xl mx-auto">
    </div>

    <!-- Trainer Section -->
    <div id="trainer" class="max-w-7xl mx-auto py-16 px-6">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Unsere Trainer</h2>
        <p class="text-gray-300 text-lg">Erfahrene Profis, die dich auf deinem Fitness-Weg begleiten</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="trainer in trainers"
          :key="trainer.name"
          class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-48 overflow-hidden flex justify-center">
            <img
              src="/trainer/yannik.png"
              :alt="trainer.name"
              class="h-[120%] w-auto max-w-sm object-cover object-top"
            />
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ trainer.name }}</h3>
            <p :class="trainer.colorClass" class="font-semibold mb-3">{{ trainer.specialization }}</p>
            <p class="text-gray-300 text-sm mb-4">{{ trainer.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in trainer.tags"
                :key="tag"
                :class="trainer.tagColorClass"
                class="px-3 py-1 rounded-full text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Features Section -->
    <div class="max-w-7xl mx-auto">
    </div>

    <!-- Contact Section -->
    <div id="contact" class="max-w-4xl mx-auto text-center pb-16">
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-6 px-6">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center"
    >
      <!-- Copyright -->
      <div class="text-gray-300 text-sm mb-6 md:mb-0">
        © 2026 GoFit. All rights reserved.
      </div>

      <!-- Footer Links -->
      <div class="flex flex-wrap gap-4 md:gap-6 text-sm">
        <a
          href="/contact"
          class="text-gray-300 hover:text-highlight transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="/credits"
          class="text-gray-300 hover:text-highlight transition-colors duration-300"
        >
          Credits
        </a>
        <a
          href="/privacy-policy"
          class="text-gray-300 hover:text-highlight transition-colors duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          class="text-gray-300 hover:text-highlight transition-colors duration-300"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Page metadata
useHead({
  title: "GoFit - Bad Kissingen",
  meta: [
    {
      name: "description",
      content:
        "GoFit - Bad Kissingen",
    },
  ],
});


// Trainer data
const trainers = [
  {
    name: "Max Müller",
    specialization: "Personal Trainer & Krafttraining",
    description: "10+ Jahre Erfahrung in Personal Training und Bodybuilding. Spezialisiert auf Kraft- und Muskelaufbau.",
    tags: ["Krafttraining", "Bodybuilding"],
    colorClass: "text-blue-400",
    tagColorClass: "bg-blue-500/20 text-blue-300",
  },
  {
    name: "Sarah Schmidt",
    specialization: "Yoga & Rehasport",
    description: "Zertifizierte Yoga- und Rehasport-Trainerin mit Fokus auf Rehabilitation und Entspannung.",
    tags: ["Yoga", "Rehasport"],
    colorClass: "text-green-400",
    tagColorClass: "bg-green-500/20 text-green-300",
  },
  {
    name: "Tom Weber",
    specialization: "Ausdauer & Functional Training",
    description: "Experte für Cardio-Training, Functional Fitness und Marathon-Vorbereitung.",
    tags: ["Cardio", "Functional"],
    colorClass: "text-orange-400",
    tagColorClass: "bg-orange-500/20 text-orange-300",
  },
  {
    name: "Lisa Fischer",
    specialization: "Dance Fitness & Zumba",
    description: "Energische Dance-Fitness-Trainerin, die jede Stunde zu einem Party-Erlebnis macht.",
    tags: ["Dance", "Zumba"],
    colorClass: "text-pink-400",
    tagColorClass: "bg-pink-500/20 text-pink-300",
  },
  {
    name: "Andreas Klein",
    specialization: "CrossFit & Functional Training",
    description: "CrossFit Level 2 Trainer mit Fokus auf funktionelle Bewegungen und Intensität.",
    tags: ["CrossFit", "HIIT"],
    colorClass: "text-cyan-400",
    tagColorClass: "bg-cyan-500/20 text-cyan-300",
  },
  {
    name: "Anna Becker",
    specialization: "Boxing & Kickboxing",
    description: "Professionelle Kampfsport-Trainerin für Boxen und Kickboxen. Ideal für Kraft und Koordination.",
    tags: ["Boxing", "Kickboxing"],
    colorClass: "text-yellow-400",
    tagColorClass: "bg-yellow-500/20 text-yellow-300",
  },
];

// Reactive variables
const scrolled = ref(false);
const mobileMenuOpen = ref(false);
const header = ref(null);

// Scroll handler
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Approximate header height
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
    // Close mobile menu if open
    mobileMenuOpen.value = false;
  }
};

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // Close mobile menu if open
  mobileMenuOpen.value = false;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

</style>
