<template>
  <div id="trainer" class="maximum-width py-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Unser Team</h2>
      <p class="text-gray-300 text-lg">Erfahrene Profis, die dich auf deinem Fitness-Weg begleiten</p>
    </div>
    
    <div class="relative">
      <!-- Navigation Buttons -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
        aria-label="Previous trainers"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
        aria-label="Next trainers"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="overflow-hidden px-12">
        <div
          ref="carouselContainer"
          class="flex"
          :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
          :style="{ transform: `translateX(-${currentPosition}px)` }"
        >
          <div
            v-for="(trainer, index) in duplicatedTrainers"
            :key="`${trainer.name}-${index}`"
            class="flex-shrink-0 group"
            :style="{ width: `${cardWidth}px`, marginRight: `${gap}px` }"
          >
            <div class="relative bg-card my-rounded my-shadow overflow-hidden h-full flex flex-col p-2 transition-colors duration-200 group-hover:bg-gray-800">
              <!-- Image area: same bg as card so no two-tone (page bg showing through) -->
              <div class="aspect-[3/4] overflow-hidden flex justify-center my-rounded bg-card transition-colors duration-200 group-hover:bg-gray-800">
                <img
                  :src="trainer.image"
                  :alt="trainer.name"
                  class="h-full w-auto max-w-full object-cover object-top"
                />
              </div>
              <!-- Overlay over entire card (including padding) -->
              <div
                class="absolute inset-0 z-10 rounded-2xl bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left pointer-events-none"
              >
                <h3 class="text-xl font-bold text-white mb-1">{{ trainer.name }}</h3>
                <p :class="trainer.colorClass" class="font-semibold text-sm mb-2">{{ trainer.specialization }}</p>
                <p class="text-gray-300 text-sm leading-snug">{{ trainer.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const trainers = [
  {
    name: "Max Müller",
    image: "/trainer/yannik.jpg",
    specialization: "Personal Trainer & Krafttraining",
    description: "10+ Jahre Erfahrung. Fokus Kraft & Muskelaufbau.",
    tags: ["Krafttraining", "Bodybuilding"],
    colorClass: "text-blue-400",
    tagColorClass: "bg-blue-500/20 text-blue-300",
  },
  {
    name: "Sarah Schmidt",
    image: "/trainer/rigo.jpg",
    specialization: "Yoga & Rehasport",
    description: "Zertifiziert Yoga & Rehasport. Reha & Entspannung.",
    tags: ["Yoga", "Rehasport"],
    colorClass: "text-green-400",
    tagColorClass: "bg-green-500/20 text-green-300",
  },
  {
    name: "Tom Weber",
    image: "/trainer/yannik.jpg",
    specialization: "Ausdauer & Functional Training",
    description: "Cardio, Functional Fitness, Marathon.",
    tags: ["Cardio", "Functional"],
    colorClass: "text-orange-400",
    tagColorClass: "bg-orange-500/20 text-orange-300",
  },
  {
    name: "Lisa Fischer",
    image: "/trainer/rigo.jpg",
    specialization: "Dance Fitness & Zumba",
    description: "Dance-Fitness – jede Stunde ein Erlebnis.",
    tags: ["Dance", "Zumba"],
    colorClass: "text-pink-400",
    tagColorClass: "bg-pink-500/20 text-pink-300",
  },
  {
    name: "Andreas Klein",
    image: "/trainer/yannik.jpg",
    specialization: "CrossFit & Functional Training",
    description: "CrossFit Level 2. Funktionell & intensiv.",
    tags: ["CrossFit", "HIIT"],
    colorClass: "text-cyan-400",
    tagColorClass: "bg-cyan-500/20 text-cyan-300",
  },
  {
    name: "Anna Becker",
    image: "/trainer/rigo.jpg",
    specialization: "Boxing & Kickboxing",
    description: "Boxen & Kickboxen. Kraft & Koordination.",
    tags: ["Boxing", "Kickboxing"],
    colorClass: "text-yellow-400",
    tagColorClass: "bg-yellow-500/20 text-yellow-300",
  },
];

const visibleCards = ref(3);
const currentIndex = ref(trainers.length); // Start at the beginning of original array (after duplicates)
const carouselContainer = ref(null);
const cardWidth = ref(350);
const isTransitioning = ref(true);
const isJumping = ref(false);
const gap = 32; // pr-8 = 2rem = 32px

// Create duplicated array for infinite scroll: [original] [original] [original]
const duplicatedTrainers = computed(() => {
  return [...trainers, ...trainers, ...trainers];
});

const currentPosition = computed(() => {
  // Calculate exact position: each card takes cardWidth + gap space
  const cardWithGap = cardWidth.value + gap;
  return currentIndex.value * cardWithGap;
});

const scrollLeft = () => {
  if (isJumping.value) return;
  
  // Check if we're at the boundary BEFORE scrolling
  if (currentIndex.value === trainers.length) {
    // At start boundary, jump to end of middle copy instantly (no transition)
    isTransitioning.value = false;
    isJumping.value = true;
    currentIndex.value = trainers.length * 2; // Jump to index 11 (last of middle copy)
    
    // Then scroll left with transition (to index 10)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true;
        isJumping.value = false;
        currentIndex.value = currentIndex.value - 1;
      });
    });
  } else {
    // Normal scroll
    isTransitioning.value = true;
    currentIndex.value = currentIndex.value - 1;
  }
};

const scrollRight = () => {
  if (isJumping.value) return;
  
  // Check if we're at the boundary BEFORE scrolling
  if (currentIndex.value === trainers.length * 2 - 1) {
    // At end boundary, jump to start of middle copy instantly (no transition)
    isTransitioning.value = false;
    isJumping.value = true;
    currentIndex.value = trainers.length - 1; // Jump to index 6 (first of middle copy)
    
    // Then scroll right with transition (to index 7)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true;
        isJumping.value = false;
        currentIndex.value = currentIndex.value + 1;
      });
    });
  } else {
    // Normal scroll
    isTransitioning.value = true;
    currentIndex.value = currentIndex.value + 1;
  }
};

const maxCardWidth = 200; // Keep trainer images smaller

// Calculate card width based on container
const calculateCardWidth = () => {
  if (carouselContainer.value && carouselContainer.value.parentElement) {
    const container = carouselContainer.value.parentElement;
    const containerWidth = container.offsetWidth - 96; // Subtract padding (48px * 2)
    // Use more precise calculation without flooring to avoid accumulation errors
    const calculatedWidth = (containerWidth - (gap * (visibleCards.value - 1))) / visibleCards.value;
    cardWidth.value = Math.min(maxCardWidth, Math.round(calculatedWidth * 100) / 100);
  }
};

// Handle responsive visibility
const updateVisibleCards = () => {
  if (window.innerWidth < 768) {
    visibleCards.value = 1;
  } else if (window.innerWidth < 1024) {
    visibleCards.value = 2;
  } else {
    visibleCards.value = 3;
  }
  nextTick(() => {
    calculateCardWidth();
  });
};

onMounted(() => {
  updateVisibleCards();
  window.addEventListener("resize", updateVisibleCards);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateVisibleCards);
});
</script>

<style scoped>
/* Smooth transitions for carousel */
.transition-transform {
  transition-property: transform;
}
</style>
