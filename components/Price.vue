<template>
  <div id="preise" class="maximum-width py-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Unsere Tarife</h2>
      <p class="text-gray-300 text-lg">Tarife pro Person und Monat</p>
    </div>

    <div class="mb-16">
      <div class="flex justify-center gap-2 mb-8">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="selectedTab = tab.key"
          class="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          :class="selectedTab === tab.key
            ? 'bg-highlight text-background'
            : 'bg-card text-gray-300 hover:bg-gray-700 hover:text-white'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- 3 Tariff Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          v-for="tariff in mainTariffs"
          :key="tariff.duration"
          class="my-rounded my-shadow p-6 flex flex-col"
          :class="tariff.months === 24
            ? 'bg-gradient-to-br from-[#91db31]/15 via-card to-card'
            : 'bg-card'"
        >
          <h4 class="text-xl font-bold text-white mb-2">{{ tariff.duration }}</h4>
          <p class="text-gray-400 text-sm mb-4">
            Kündbar nach {{ tariff.months }} Monaten
          </p>
          <p class="text-3xl font-bold text-highlight mb-6">
            {{ getPriceForTab(tariff) }}
          </p>
          <p class="text-gray-400 text-sm mb-6 flex-1">pro Monat</p>
          <ul class="space-y-2 mb-2 text-gray-300 text-sm">
            <li class="flex items-center gap-2">
              <span class="text-highlight">✓</span> Fitnesstraining & Kurse
            </li>
            <li class="flex items-center gap-2">
              <span class="text-highlight">✓</span> Sauna & Wellness
            </li>
            <li class="flex items-center gap-2">
              <span class="text-highlight">✓</span> Trainerbetreuung
            </li>
            <li class="flex items-center gap-2">
              <span class="text-highlight">✓</span> 3D Körpermessungen
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <p class="text-highlight font-semibold">
          Start-up-Paket: einmalig 79,00 €
        </p>
      </div>
    </div>

    <!-- Sonderlaufzeiten & Einzel-/10er Karten -->
    <div class="mb-16 max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold text-white mb-4 text-center">
        Sonderlaufzeiten & Einzel-/10er Karten
      </h3>
      <p class="text-gray-300 text-sm mb-6 text-center">
        Für Kurgäste, Reha, kurzen Aufenthalt oder flexibles Training ohne Vertragsbindung.
      </p>
      <div class="overflow-x-auto">
        <table class="w-full bg-card my-rounded my-shadow overflow-hidden">
          <thead>
            <tr class="border-b border-background">
              <th class="text-left py-4 px-6 text-highlight font-semibold">Laufzeit / Art</th>
              <th class="text-center py-4 px-6 text-white font-semibold">Erwachsene</th>
              <th class="text-center py-4 px-6 text-white font-semibold">Schüler, Studenten, Azubis</th>
              <th class="text-center py-4 px-6 text-white font-semibold">Wellness (Sauna)</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in sonderTarife"
              :key="row.art"
              class="border-b border-background last:border-0 hover:bg-highlight/5"
            >
              <td class="py-4 px-6 text-white font-medium">{{ row.art }}</td>
              <td class="py-4 px-6 text-center text-gray-300">{{ row.adult }}</td>
              <td class="py-4 px-6 text-center text-gray-300">{{ row.student }}</td>
              <td class="py-4 px-6 text-center text-gray-300">{{ row.wellness }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedTab = ref("adult");

const tabs = [
  { key: "adult", label: "Erwachsene" },
  { key: "partner", label: "Partner / Freunde" },
  { key: "student", label: "Schüler, Studenten, Azubis" },
];

const mainTariffs = [
  { duration: "6 Monate", adult: "59,99 €", partner: "54,99 €", student: "49,99 €", months: 6 },
  { duration: "12 Monate", adult: "49,99 €", partner: "44,99 €", student: "39,99 €", months: 12 },
  { duration: "24 Monate", adult: "39,99 €", partner: "34,99 €", student: "29,99 €", months: 24 },
];

const getPriceForTab = (tariff) => tariff[selectedTab.value] || tariff.adult;

const sonderTarife = [
  { art: "1 Woche", adult: "30,- €", student: "28,- €", wellness: "–" },
  { art: "1 Monat", adult: "80,- €", student: "70,- €", wellness: "–" },
  { art: "3 Monate", adult: "70,- €", student: "60,- €", wellness: "–" },
  { art: "Einzelkarte", adult: "15,- €", student: "12,- €", wellness: "10,- €" },
  { art: "10er Karte", adult: "120,- €", student: "110,- €", wellness: "90,- €" },
];
</script>
