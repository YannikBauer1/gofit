<template>
  <div id="hours" class="maximum-width py-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Öffnungszeiten</h2>
      <p class="text-gray-300 text-lg">Wann du uns besuchen kannst</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
      <div
        v-for="(day, index) in openingHours"
        :key="day.day"
        class="bg-card relative my-rounded p-6 my-shadow overflow-visible"
        :class="{
          'ring-2 ring-highlight': isToday(index),
          'bg-card': day.day === 'Samstag' || day.day === 'Sonntag'
        }"
      >
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-bold text-white text-center w-full">{{ day.day }}</h3>
        </div>
        <div class="absolute -top-1.5 -right-1.5 bg-card" v-if="isToday(index)">
        <div class="px-4 py-0.5 bg-highlight/20 text-highlight text-xs font-semibold rounded-md border-2 border-highlight">
            Heute
          </div>
        </div>
        <div class="space-y-1 text-center">
          <p
            v-for="time in day.hours"
            :key="time"
            class="text-gray-300"
            :class="{ 'text-red-400': time === 'Geschlossen' }"
          >
            {{ time }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Feiertags Hinweis -->
    <div class="mt-8 text-center">
      <p class="text-gray-400 text-sm">
        <span class="mr-1">⚠️</span> An Feiertagen können die Öffnungszeiten abweichen. Bitte informiere dich vorher.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const openingHours = [
  {
    day: "Montag",
    hours: ["08:30 - 22:00"],
  },
  {
    day: "Dienstag",
    hours: ["08:30 - 22:00"],
  },
  {
    day: "Mittwoch",
    hours: ["08:30 - 22:00"],
  },
  {
    day: "Donnerstag",
    hours: ["08:30 - 22:00"],
  },
  {
    day: "Freitag",
    hours: ["08:30 - 22:00"],
  },
  {
    day: "Samstag",
    hours: ["09:00 - 18:00"],
  },
  {
    day: "Sonntag",
    hours: ["10:00 - 18:00"],
  },
];

// German public holidays (fixed dates)
const publicHolidays = [
  "01-01", // Neujahr
  "01-06", // Heilige Drei Könige (nur in einigen Bundesländern)
  "05-01", // Tag der Arbeit
  "10-03", // Tag der Deutschen Einheit
  "12-25", // Weihnachten
  "12-26", // 2. Weihnachtstag
];

// Calculate Easter and related holidays (variable dates)
const getEasterHolidays = (year) => {
  // Simplified Easter calculation (Meeus/Jones/Butcher algorithm)
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  
  const easter = new Date(year, month - 1, day);
  const holidays = [];
  
  // Karfreitag (2 days before Easter)
  const goodFriday = new Date(easter);
  goodFriday.setDate(easter.getDate() - 2);
  holidays.push(formatDate(goodFriday));
  
  // Ostermontag (1 day after Easter)
  const easterMonday = new Date(easter);
  easterMonday.setDate(easter.getDate() + 1);
  holidays.push(formatDate(easterMonday));
  
  // Christi Himmelfahrt (39 days after Easter)
  const ascension = new Date(easter);
  ascension.setDate(easter.getDate() + 39);
  holidays.push(formatDate(ascension));
  
  // Pfingstmontag (50 days after Easter)
  const whitMonday = new Date(easter);
  whitMonday.setDate(easter.getDate() + 50);
  holidays.push(formatDate(whitMonday));
  
  // Fronleichnam (60 days after Easter, nur in einigen Bundesländern)
  const corpusChristi = new Date(easter);
  corpusChristi.setDate(easter.getDate() + 60);
  holidays.push(formatDate(corpusChristi));
  
  return holidays;
};

const formatDate = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}-${day}`;
};

const isHoliday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const todayStr = formatDate(today);
  
  // Check fixed holidays
  if (publicHolidays.includes(todayStr)) {
    return true;
  }
  
  // Check variable holidays (Easter-based)
  const easterHolidays = getEasterHolidays(year);
  return easterHolidays.includes(todayStr);
};


const isToday = (index) => {
  const today = new Date().getDay();
  // JavaScript getDay() returns 0 for Sunday, 1 for Monday, etc.
  // Our array starts with Monday (index 0)
  const dayIndex = today === 0 ? 6 : today - 1; // Convert Sunday (0) to index 6
  return index === dayIndex;
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
