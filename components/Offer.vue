<template>
  <div id="angebot" class="maximum-width py-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Unser Angebot</h2>
      <p class="text-gray-300 text-lg">Erlebe Training, Kurse und Wellness</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
      <div
        v-for="(item, idx) in offerVideos"
        :key="idx"
        class="relative bg-card my-rounded my-shadow overflow-hidden aspect-[9/16] max-h-[420px] cursor-pointer group"
        @click="toggleVideo($event)"
      >
        <video
          :src="item.src"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover"
          @play="playing[idx] = true"
          @pause="playing[idx] = false"
        />
        <div
          class="absolute inset-x-0 bottom-0 py-3 px-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
        >
          <p class="text-white font-semibold text-sm">{{ item.title }}</p>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          aria-hidden="true"
        >
          <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
            <svg v-show="!playing[idx]" class="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg v-show="playing[idx]" class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const offerVideos = [
  { src: "/training.mp4", title: "Training" },
  { src: "/rehasport.mp4", title: "Kurse & Rehasport" },
  { src: "/wellness.mp4", title: "Wellness" },
  { src: "/scaneca.mp4", title: "3D Scan" },
];

const playing = reactive({ 0: true, 1: true, 2: true, 3: true });

function toggleVideo(event) {
  const card = event.currentTarget;
  const video = card.querySelector("video");
  if (!video) return;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
</script>
