<template>
  <section id="contact" class="maximum-width py-16">
    <div class="bg-card my-rounded my-shadow overflow-hidden p-0 lg:p-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <!-- Google Maps embed -->
        <div class="overflow-hidden h-64 lg:h-80 min-h-[16rem] lg:border-r border-background">
        <iframe
          src="https://www.google.com/maps?q=R%C3%B6ntgenstra%C3%9Fe+1,+97688+Bad+Kissingen&output=embed"
          width="100%"
          height="100%"
          style="border:0; min-height: 16rem;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="GoFit Bad Kissingen Standort"
          class="w-full h-full min-h-[16rem]"
        />
      </div>
        <!-- Address & contact -->
        <div class="flex flex-col justify-center p-6 lg:p-8">
          <h3 class="text-2xl font-bold text-white mb-4">GoFit</h3>
        <p class="text-gray-300 font-medium mb-1">R+S Fitness GmbH</p>
        <p class="text-gray-300 mb-4">
          Röntgenstraße 1<br>
          97688 Bad Kissingen
        </p>
        <p class="text-gray-300 flex items-center gap-2">
          <div class="text-gray-400 w-12">Phone:</div>
          <a href="tel:+4997161011" class="text-highlight hover:underline">0971 61011</a>
        </p>
        <p class="text-gray-300 flex items-center gap-2">
          <div class="text-gray-400 w-12">Email:</div>
          <a href="mailto:gofitbk@gmail.com" class="text-highlight hover:underline">gofitbk@gmail.com</a>
        </p>
        </div>
      </div>
    </div>
  </section>
</template>
