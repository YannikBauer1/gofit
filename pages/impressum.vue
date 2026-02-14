<template>
  <div class="min-h-screen bg-background text-white flex flex-col">
    <AppHeader />

    <!-- Content -->
    <main class="maximum-width py-12 pb-16 flex-1">
      <div class="bg-card my-rounded my-shadow p-8 md:p-12 max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-10">Impressum</h1>

        <p class="text-gray-400 text-sm mb-6">Angaben gemäß § 5 Telemediengesetz</p>

        <section class="mb-10">
          <h2 class="text-lg font-semibold text-white mb-2">R+S Fitness GmbH</h2>
          <p class="text-gray-300 leading-relaxed">
            Röntgenstraße 1<br />
            97688 Bad Kissingen<br />
            Deutschland
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-lg font-semibold text-white mb-2">Kontakt</h2>
          <p class="text-gray-300 leading-relaxed">
            Tel. 0971 61011<br />
            E-Mail: <a href="mailto:gofitbk@gmail.com" class="text-highlight hover:underline">gofitbk@gmail.com</a><br />
            Internet: <a href="https://www.gofit-badkissingen.de" target="_blank" rel="noopener" class="text-highlight hover:underline">www.gofit-badkissingen.de</a>
          </p>
        </section>

        <section class="mb-10">
          <p class="text-gray-300 leading-relaxed">
            Registergericht Schweinfurt<br />
            Registernummer: HRA 4291
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-lg font-semibold text-white mb-2">Geschäftsführer</h2>
          <p class="text-gray-300 leading-relaxed">
            Oliver Radler, Stephan Renn<br />
            Registergericht: Schweinfurt<br />
            Registernummer: HRB 4291
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-lg font-semibold text-white mb-2">Umsatzsteuer-Identifikationsnummer</h2>
          <p class="text-gray-300 leading-relaxed">
            DE813641924 gemäß § 27 a Umsatzsteuergesetz
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-lg font-semibold text-white mb-2">Haftung für Links</h2>
          <p class="text-gray-300 leading-relaxed">
            Externe Links der Internetseite von R+S Fitness GmbH führen zu Inhalten fremder Anbieter. Für diese Inhalte ist allein der jeweilige Anbieter verantwortlich. Bei bekannt werden von Rechtsverletzungen werden diese Links umgehend entfernt.
          </p>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-white mb-2">Urheberrechtshinweis</h2>
          <p class="text-gray-300 leading-relaxed">
            Die durch die R+S Fitness GmbH erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht von der R+S Fitness GmbH selbst erstellt wurden, werden Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, wird um einen entsprechenden Hinweis gebeten. Bei Bekanntwerden von Rechtsverletzungen wird die R+S Fitness GmbH derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Impressum - GoFit Bad Kissingen",
  meta: [
    {
      name: "description",
      content: "Impressum und rechtliche Angaben der R+S Fitness GmbH, GoFit Bad Kissingen.",
    },
  ],
});
</script>
