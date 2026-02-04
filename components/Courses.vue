<template>
  <div id="courses" class="maximum-width py-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Kursplan</h2>
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">Anmeldung für Rehasport oder Kurse mit Anmeldung kannst du in der App, telefonisch oder bei uns vor Ort machen.</p>
    </div>

    <!-- Desktop: timeline with consistent Y-axis, course cards in their time slot -->
    <div class="overflow-x-auto mb-12 hidden md:block">
      <div class="bg-card my-rounded my-shadow overflow-hidden min-w-[80px]">
        <div class="grid border-b border-background" style="grid-template-columns: 4rem 1fr 1fr 1fr 1fr 1fr 1fr;">
          <div class="py-4 px-2 w-full text-center font-semibold text-sm">Uhr</div>
          <div
            v-for="day in weekdays"
            :key="day"
            class="py-4 px-2 text-center text-white font-semibold text-sm border-l border-background"
            :class="{ 'bg-highlight/10': isTodayColumn(day) }"
          >
            {{ day }}
          </div>
        </div>
        <div class="grid relative" style="grid-template-columns: 4rem 1fr 1fr 1fr 1fr 1fr 1fr; min-height: 36rem;">
          <!-- Hour lines (between full hours), only across day columns -->
          <div class="absolute top-0 right-0 bottom-0 left-[4rem] pointer-events-none z-0">
            <div
              v-for="t in timeLabels"
              :key="'line-' + t.label"
              class="absolute left-0 right-0 border-b border-background/60"
              :style="{ top: t.topPercent + '%' }"
            />
          </div>
          <!-- Y-axis: time labels (one per hour) -->
          <div class="relative z-10" style="height: 36rem;">
            <div
              v-for="t in timeLabels"
              :key="t.label"
              class="absolute left-0 px-2 text-gray-500 w-full text-center text-xs font-medium -translate-y-1/2"
              :style="{ top: t.topPercent + '%' }"
            >
              {{ t.label }}
            </div>
          </div>
          <!-- Day columns: course cards positioned by time -->
          <div
            v-for="day in weekdays"
            :key="day"
            class="relative z-10 border-l border-background"
            :class="{ 'bg-highlight/5': isTodayColumn(day) }"
            style="height: 36rem;"
          >
            <!-- Inner wrapper so percentage positioning is relative to column height -->
            <div class="absolute inset-0">
              <div
                v-for="(course, idx) in coursesWithPositionByDay[day]"
                :key="'kurs-' + day + idx"
                class="absolute left-1 right-1 rounded overflow-hidden flex flex-col justify-center px-1.5 py-0.5 pr-8 bg-background/90 border border-highlight/30 hover:border-highlight/60 transition-colors"
                :class="{ 'border-l-2 border-l-highlight': needAnmeldung(course.name) }"
                :style="{
                  top: course.topPercent + '%',
                  height: course.heightPercent + '%',
                }"
              >
                <span class="font-semibold text-white text-xs leading-none truncate" :title="course.name + ' – ' + course.time + ' Uhr' + (needAnmeldung(course.name) ? ' (Anmeldung erforderlich)' : '')">{{ course.name }}</span>
                <span class="absolute top-0.5 right-0.5 text-gray-400 text-[0.6rem] leading-none whitespace-nowrap">{{ course.time }}</span>
              </div>
              <div
                v-for="(slot, idx) in rehasportWithPositionByDay[day]"
                :key="'reha-' + day + idx"
                class="absolute left-1 right-1 rounded overflow-hidden flex flex-col justify-center px-1.5 py-0.5 pr-8 bg-cyan-950/80 border border-cyan-400/50 hover:border-cyan-400/70 transition-colors"
                :style="{
                  top: slot.topPercent + '%',
                  height: slot.heightPercent + '%',
                }"
              >
                <span class="font-semibold text-cyan-100 text-xs leading-none truncate" :title="'Rehasport – ' + slot.time + ' Uhr'">Rehasport</span>
                <span class="absolute top-0.5 right-0.5 text-cyan-300/80 text-[0.6rem] leading-none whitespace-nowrap">{{ slot.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile: day cards with courses (table hidden on small screens) -->
    <div class="md:hidden space-y-4 mb-12">
      <div
        v-for="day in weekdays"
        :key="day"
        class="bg-card my-rounded my-shadow p-4"
        :class="{ 'ring-2 ring-highlight': isTodayColumn(day) }"
      >
        <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
          {{ day }}
          <span
            v-if="isTodayColumn(day)"
            class="px-2 py-0.5 bg-highlight/20 text-highlight text-xs font-semibold rounded"
          >
            Heute
          </span>
        </h3>
        <ul class="space-y-2">
          <li
            v-for="course in getCoursesForDay(day)"
            :key="'kurs-' + course.time + course.name"
            class="flex justify-between items-center text-gray-300 text-sm py-2 border-b border-background/50 last:border-0 gap-2"
            :class="{ 'pl-2 border-l-2 border-l-highlight -ml-px': needAnmeldung(course.name) }"
          >
            <span class="text-gray-400 whitespace-nowrap">{{ course.time }} Uhr</span>
            <span class="font-medium text-white text-right" :title="needAnmeldung(course.name) ? 'Anmeldung erforderlich' : undefined">{{ course.name }}</span>
          </li>
          <li
            v-for="slot in getRehasportForDay(day)"
            :key="'reha-' + slot.time"
            class="flex justify-between items-center text-cyan-200/90 text-sm py-2 border-b border-cyan-500/30 gap-2"
          >
            <span class="text-cyan-400/80 whitespace-nowrap">{{ slot.time }} Uhr</span>
            <span class="font-medium text-cyan-100 text-right">Rehasport</span>
          </li>
          <li
            v-if="getCoursesForDay(day).length === 0 && getRehasportForDay(day).length === 0"
            class="text-gray-500 text-sm py-1"
          >
            Keine Kurse
          </li>
        </ul>
      </div>
    </div>
    <p class="text-center text-gray-500 text-sm mt-4">Kurse mit grünem Rand = Anmeldung erforderlich (Jumping, Indoor Cycling, Boxing, Suspension Training)</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

// Timeline: fixed Y-axis 08:30–22:30 (minutes from midnight)
const TIME_START_MIN = 8 * 60 + 30;   // 08:30
const TIME_END_MIN = 22 * 60 + 30;    // 22:30
const TOTAL_MINUTES = TIME_END_MIN - TIME_START_MIN;

function parseTimeRange(timeStr) {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const startMin = parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
  const endMin = parseInt(match[3], 10) * 60 + parseInt(match[4], 10);
  return { startMin, endMin };
}

function coursePosition(course) {
  const range = parseTimeRange(course.time);
  if (!range) return null;
  const topPercent = ((range.startMin - TIME_START_MIN) / TOTAL_MINUTES) * 100;
  const heightPercent = ((range.endMin - range.startMin) / TOTAL_MINUTES) * 100;
  return { ...course, ...range, topPercent, heightPercent };
}

const timeLabels = (() => {
  const labels = [];
  for (let h = 9; h <= 22; h++) {
    const min = h * 60;
    const topPercent = ((min - TIME_START_MIN) / TOTAL_MINUTES) * 100;
    labels.push({ label: `${String(h).padStart(2, "0")}:00`, topPercent });
  }
  return labels;
})();

// Course data per day: { time: "09:35 - 10:20", name: "Yoga" }
const coursesByDay = {
  Montag: [
    { time: "09:35 - 10:20", name: "Yoga" },
    { time: "10:25 - 11:10", name: "Stretch & Relax" },
    { time: "11:15 - 12:00", name: "Pilates" },
    { time: "17:40 - 18:25", name: "Faszientraining" },
    { time: "18:30 - 19:15", name: "Step I" },
    { time: "19:25 - 20:25", name: "Indoor Cycling" },
  ],
  Dienstag: [
    { time: "09:45 - 10:30", name: "Rückentraining" },
    { time: "10:40 - 11:40", name: "Qi Gong" },
    { time: "17:05 - 17:50", name: "Rückentraining" },
    { time: "17:55 - 18:40", name: "Muscle & Tone" },
    { time: "18:45 - 19:30", name: "Step & Shape" },
    { time: "19:35 - 20:35", name: "Jumping® Gold" },
  ],
  Mittwoch: [
    { time: "09:35 - 10:20", name: "Aroha®" },
    { time: "10:25 - 11:10", name: "Pilates" },
    { time: "11:15 - 12:15", name: "Indoor Cycling" },
    { time: "17:10 - 17:55", name: "Suspension" },
    { time: "18:00 - 19:10", name: "Weight Pump" },
    { time: "19:15 - 20:00", name: "Pilates" },
    { time: "20:10 - 21:10", name: "Indoor Cycling" },
  ],
  Donnerstag: [
    { time: "09:00 - 09:45", name: "Faszien Fitness" },
    { time: "09:50 - 10:35", name: "Yoga" },
    { time: "17:30 - 18:15", name: "Power-Workout" },
    { time: "18:20 - 19:05", name: "Faszien-Extrem" },
    { time: "19:10 - 20:10", name: "Jumping®" },
  ],
  Freitag: [
    { time: "09:45 - 10:30", name: "Rückentraining" },
    { time: "10:45 - 11:45", name: "Zumba Gold®" },
    { time: "16:15 - 17:00", name: "Pilates" },
    { time: "17:05 - 17:50", name: "Yoga" },
    { time: "17:55 - 18:40", name: "Step Einsteiger" },
    { time: "18:45 - 19:30", name: "Step II" },
    { time: "19:35 - 20:35", name: "Boxing Workout" },
  ],
  Samstag: [
    { time: "10:15 - 11:00", name: "Samstagsworkout" },
    { time: "11:15 - 12:00", name: "Step Basic" },
    { time: "15:00 - 16:00", name: "Indoor Cycling" },
  ],
};

// Rehasport: separate list, different design/color
const rehasportByDay = {
  Montag: [
    { time: "08:45 - 09:30" },
    { time: "15:45 - 16:30" },
    { time: "16:45 - 17:30" },
  ],
  Dienstag: [
    { time: "08:45 - 09:30" },
    { time: "16:15 - 17:00" },
  ],
  Mittwoch: [
    { time: "08:45 - 09:30" },
    { time: "14:30 - 15:15" },
  ],
  Donnerstag: [
    { time: "10:45 - 11:30" },
    { time: "16:40 - 17:25" },
    { time: "20:15 - 21:00" },
  ],
  Freitag: [
    { time: "08:45 - 09:30" },
  ],
  Samstag: [
    { time: "09:15 - 10:00" },
  ],
};

const coursesWithPositionByDay = computed(() => {
  const result = {};
  weekdays.forEach((day) => {
    const list = coursesByDay[day] || [];
    result[day] = list.map(coursePosition).filter(Boolean);
  });
  return result;
});

const rehasportWithPositionByDay = computed(() => {
  const result = {};
  weekdays.forEach((day) => {
    const list = rehasportByDay[day] || [];
    result[day] = list.map((slot) => coursePosition({ ...slot, name: "Rehasport" })).filter(Boolean);
  });
  return result;
});

function getCoursesForDay(day) {
  return coursesByDay[day] || [];
}

function getRehasportForDay(day) {
  return rehasportByDay[day] || [];
}

function isTodayColumn(day) {
  const today = new Date().toLocaleDateString("de-DE", { weekday: "long" });
  return day === today;
}

function needAnmeldung(courseName) {
  const n = (courseName || "").toLowerCase();
  return /jumping|cycling|boxing|suspension/.test(n);
}
</script>
