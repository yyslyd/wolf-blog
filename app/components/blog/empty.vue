<template>
  <article
    class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
    <NuxtLink to="/">
      <div
        class="lg:h-48 md:h-36 w-full bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 group-hover:scale-[1.05] transition-all duration-500 flex items-center justify-center">
        <Icon name="mdi:folder-open" size="80" class="text-slate-400 dark:text-slate-500" />
      </div>
      <div class="p-5">
        <h2
          class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
          No Post Available
        </h2>

        <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2">
          <p>Back To Home</p>
          <Icon name="mdi:arrow-right" class="ml-1 w-4 h-4" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
;
