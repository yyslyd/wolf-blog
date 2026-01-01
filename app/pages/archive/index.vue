<script lang="ts" setup>
import Fuse from "fuse.js";
import { formatDate, getRandomFallbackImage } from "~/utils/helper";

const { data } = await useAsyncData("all-archive-post", () =>
  queryCollection("content").where("published", "=", true).order("date", "DESC").all(),
);

const searchTest = ref("");

const posts = computed(() => {
  return (
    data.value?.map((articles) => {
      return {
        path: articles.path,
        title: articles.title || "no-title available",
        description: articles.description || "no-description available",
        image: articles.image || getRandomFallbackImage(),
        alt: articles.alt || "no alter data available",
        date: formatDate(articles.date) || "not-date-available",
        tags: articles.tags || [],
        published: articles.published || false,
      };
    }) || []
  );
});

const fuse = computed(() => {
  return new Fuse(posts.value, {
    keys: ["title", "description"],
    threshold: 0.4,
    includeScore: false,
  });
});

const searchResults = computed(() => {
  if (!searchTest.value.trim()) {
    return posts.value;
  }

  const results = fuse.value.search(searchTest.value);
  return results.map((result) => result.item);
});
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <h1 class="text-3xl font-bold my-6">Archive</h1>

    <div class="px-6 mb-6">
      <input
        v-model="searchTest"
        placeholder="Search"
        type="text"
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    </div>

    <div v-auto-animate class="space-y-5 my-5 px-4">
      <template v-for="post in searchResults" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :alt="post.alt"
          :tags="post.tags"
          :published="post.published" />
      </template>

      <ArchiveCard v-if="searchResults.length <= 0" title="No Post Found" image="/not-found.jpg" />
    </div>
  </main>
</template>
