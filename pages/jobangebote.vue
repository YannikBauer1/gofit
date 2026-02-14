<template>
  <div class="min-h-screen bg-background text-white flex flex-col">
    <AppHeader />

    <!-- Content -->
    <main class="maximum-width py-12 pb-16 flex-1 w-full">
      <div class="bg-card my-rounded my-shadow p-8 md:p-12 max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-10">Jobangebote</h1>

        <p class="text-gray-300 leading-relaxed mb-6">
          Für unser Team suchen wir folgende Verstärkungen:
        </p>
        <ul class="text-gray-300 leading-relaxed space-y-3 list-none">
          <li class="flex items-start gap-2">
            <span class="text-highlight mt-0.5">•</span>
            <span>Trainer/in als Aushilfe</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-highlight mt-0.5">•</span>
            <span>Dualer Student (m/w/d) für Fitnesstraining oder Fitnessökonomie</span>
          </li>
        </ul>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Jobangebote - GoFit Bad Kissingen",
  meta: [
    {
      name: "description",
      content: "Stellenangebote bei GoFit Bad Kissingen – Trainer/in als Aushilfe, Dualer Student Fitnesstraining oder Fitnessökonomie.",
    },
  ],
});
</script>
