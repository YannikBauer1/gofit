<template>
  <div class="min-h-screen bg-background text-white flex flex-col">
    <AppHeader />

    <!-- Content -->
    <main class="maximum-width py-12 pb-16 flex-1">
      <div class="bg-card my-rounded my-shadow p-8 md:p-12 max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-10">Datenschutzerklärung</h1>

        <section class="mb-10">
          <h2 class="text-lg font-semibold text-white mb-3">Spamschutz mit Google reCAPTCHA</h2>
          <p class="text-gray-300 leading-relaxed">
            Wir haben Google reCAPTCHA in Formularen auf unserer Webseite implementiert, um zu überprüfen, ob die in den Formularen eingegebenen Daten von menschlichen Besuchern stammen oder von Maschinen oder automatisierten Programmen, die auch als "Bots" bekannt sind. Dieses Tool analysiert automatisch das Verhalten der Webseitenbesucher, sobald sie mit der Webseite interagieren, unter Verwendung verschiedener Informationen wie IP-Adresse, Aufenthaltsdauer und Mausbewegungen.
          </p>
          <p class="text-gray-300 leading-relaxed mt-4">
            Die verarbeiteten Daten umfassen Nutzungsdaten wie die aufgerufene Webseite, Datum und Uhrzeit des Zugriffs und Mausbewegungen sowie Kommunikationsdaten wie IP-Adressen, Browsertyp und Betriebssystem. Diese Verarbeitung richtet sich an Webseitenbesucher und Nutzer von Online-Diensten. Der Hauptzweck dieser Verarbeitung besteht darin, den Missbrauch unseres Kontaktformulars zu verhindern und dadurch die Sicherheit zu erhöhen. Die rechtliche Grundlage dafür ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 S. 1 lit. f. DSGVO.
          </p>
          <p class="text-gray-300 leading-relaxed mt-4">
            Die Datenempfänger sind Google Ireland Ltd, ansässig in Google Building Gordon House, Barrow St, Dublin 4, Irland (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-highlight hover:underline">https://policies.google.com/privacy</a>) und unser Webseiten-Hosting-Anbieter. Während Ihre persönlichen Daten innerhalb der EU verarbeitet werden, wird die Aufbewahrungsfrist für die verarbeiteten Daten von Google Ireland Limited bestimmt. Weitere Informationen finden Sie in der Datenschutzerklärung von Google reCAPTCHA: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-highlight hover:underline">https://policies.google.com/privacy</a>
          </p>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Datenschutz - GoFit Bad Kissingen",
  meta: [
    {
      name: "description",
      content: "Datenschutzerklärung der R+S Fitness GmbH, GoFit Bad Kissingen – Informationen zu reCAPTCHA und Datenverarbeitung.",
    },
  ],
});
</script>
