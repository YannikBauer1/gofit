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
    <div class="px-6 py-1">
      <div class="mx-auto max-w-7xl flex justify-between items-center">
        <!-- Logo and Title -->
        <div class="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="GoFit Logo"
            class="w-16 h-16 rounded-xl"
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

    <!-- Hours Section -->
    <Hours />

    <!-- Trainer Section -->
    <Trainer />

    <!-- Advanced Features Section -->
    <div class="max-w-7xl mx-auto">
    </div>

    <!-- Contact Section -->
    <div id="contact" class="max-w-4xl mx-auto text-center pb-16">
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-card text-white py-6 px-6">
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
