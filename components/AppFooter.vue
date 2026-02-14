<template>
  <footer class="bg-card text-white py-6 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="text-gray-300 text-sm mb-6 md:mb-0">
          © 2026 GoFit. All rights reserved.
        </div>
        <div class="flex flex-wrap gap-4 md:gap-6 text-sm">
          <NuxtLink to="/jobangebote" class="text-gray-300 hover:text-highlight transition-colors duration-300">Jobangebote</NuxtLink>
          <NuxtLink to="/impressum" class="text-gray-300 hover:text-highlight transition-colors duration-300">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz" class="text-gray-300 hover:text-highlight transition-colors duration-300">Datenschutz</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
