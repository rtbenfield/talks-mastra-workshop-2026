<template>
  <div class="h-full grid grid-cols-2 items-center p-2xl">
    <section class="h-full flex justify-center flex-col">
      <h1 class="text-2xl">Tyler Benfield</h1>

      <h3 class="flex items-center gap-2">
        Platform Architect @
        <img alt="Prisma" class="h-5 dark:hidden" src="/prisma-light.svg" />
        <img alt="Prisma" class="h-5 hidden dark:block" src="/prisma-dark.svg" />
      </h3>

      <span> <carbon:logo-x /> rtbenfield </span>
      <span> <carbon:logo-bluesky /> rtbenfield.dev </span>
      <span> <carbon:logo-linkedin /> tylerbenfield </span>

      <a href="https://tylerbenfield.dev/links" class="flex flex-col items-center">
        <img alt="tylerbenfield.dev" class="w-50 rounded-lg" src="/qrcode_tylerbenfield.dev.png" />
        <span class="mt-2">tylerbenfield.dev</span>
      </a>
    </section>

    <section>
      <img
        alt="Tyler Benfield headshot in front of snow covered alps"
        class="rounded-full align-middle"
        src="/me.webp"
      />
    </section>
  </div>
</template>
