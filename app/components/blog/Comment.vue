<script setup lang="ts">
import siteConfig from "~/config";
import type { TwikooAPI } from "~/types/twikoo";

const { $twikoo } = useNuxtApp() as unknown as { $twikoo: TwikooAPI };
const isLoading = ref(true);

onMounted(() => {
  $twikoo({
    envId: siteConfig.comment.twikoo.envId,
    el: "#twikoo",
    path: useRoute().path,
  });

  // 评论加载完毕后隐藏占位符
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>
<template>
  <div>
    <!-- 加载占位符 -->
    <div v-if="isLoading" class="space-y-3 animate-pulse">
      <div class="h-12 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
      <div class="h-20 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
      <div class="h-8 w-24 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
    </div>
    <!-- 评论容器 -->
    <div v-show="!isLoading" id="twikoo" class="twikoo-container"></div>
  </div>
</template>
