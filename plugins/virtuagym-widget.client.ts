export default defineNuxtPlugin(() => {
  if (import.meta.client && !document.querySelector('script[src*="virtuagym.com"][src*="app.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://static.virtuagym.com/vg-guest-booking-widget/dist/js/app.js';
    script.defer = true;
    document.body.appendChild(script);
  }
});
