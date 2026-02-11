<template>
  <ClientOnly>
    <!-- Trigger slot: parent can pass a button -->
    <slot name="trigger" :open="openModal" />

    <!-- Popup modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="open"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="probetraining-title"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            @click="close"
          />
          <!-- Modal content -->
          <div
            class="relative bg-neutral-200 rounded-2xl shadow-xl w-full max-w-2xl h-[610px] overflow-hidden flex flex-col"
            @click.stop
          >

            <div class="probetraining-widget-body flex-1 min-h-0 overflow-auto">
              <vg-guest-booking
                v-if="open"
                widget-key="698c8ad8d77d4bec4d71c025"
                club-id="87077"
                lang="de"
                source=""
                theme="dark"
                data-theme="dark"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <template #fallback>
      <span />
    </template>
  </ClientOnly>
</template>

<style scoped>
/* Hide loading/spinner UI that the Virtuagym widget may inject */
.probetraining-widget-body :deep([class*="loading"]),
.probetraining-widget-body :deep([class*="spinner"]),
.probetraining-widget-body :deep([role="progressbar"]) {
  display: none !important;
}
</style>

<script setup>
const props = defineProps({
  open: { type: Boolean, default: false },
});
const emit = defineEmits(['update:open']);

function openModal() {
  emit('update:open', true);
}
function close() {
  emit('update:open', false);
}

defineExpose({ open: openModal, close });

// Virtuagym script is loaded in plugins/virtuagym-widget.client.ts at app start,
// so the widget is ready as soon as the user opens the popup.

// Close on Escape
function onKeydown(e) {
  if (e.key === 'Escape') close();
}
watch(() => props.open, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}, { immediate: true });
onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>
