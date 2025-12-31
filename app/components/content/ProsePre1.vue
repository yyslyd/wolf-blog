<script setup lang="ts">
/**
 * 代码块组件 Props 定义
 */
interface Props {
  code?: string; // 代码内容
  language?: string; // 编程语言
  filename?: string; // 文件名
  highlights?: number[]; // 需要高亮的行号
  meta?: string; // 元数据
}

const props = withDefaults(defineProps<Props>(), {
  code: "",
  language: undefined,
  filename: undefined,
  highlights: () => [],
  meta: undefined,
});

// 剪贴板复制功能
const { copy, copied } = useClipboard({ source: props.code });

// macOS 窗口控制按钮颜色配置
const WINDOW_CONTROLS = [
  { color: "#ff5f56", label: "close" },
  { color: "#ffbd2e", label: "minimize" },
  { color: "#27c93f", label: "maximize" },
] as const;

// 是否显示头部（当有文件名或语言信息时显示）
const showHeader = computed(() => props.filename || props.language);
</script>

<template>
  <div
    class="relative my-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm dark:border-white/5 dark:bg-[#282a36] dark:shadow-2xl">
    <!-- 代码块头部 -->
    <header
      v-if="showHeader"
      class="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/60 px-4 py-2.5 dark:border-white/5 dark:bg-white/5">
      <!-- 左侧：窗口控制按钮 + 文件名 -->
      <div class="flex min-w-0 items-center gap-2">
        <!-- macOS 风格的窗口控制按钮 -->
        <div class="flex shrink-0 gap-1.5">
          <span
            v-for="control in WINDOW_CONTROLS"
            :key="control.label"
            :style="{ backgroundColor: control.color }"
            class="h-3 w-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.2)]"
            :aria-label="control.label" />
        </div>

        <!-- 文件名显示 -->
        <span
          v-if="filename"
          class="ml-2 max-w-50 truncate font-mono text-xs text-zinc-600 dark:text-zinc-400">
          {{ filename }}
        </span>
      </div>

      <!-- 右侧：语言标签 + 复制按钮 -->
      <div class="flex shrink-0 items-center gap-3">
        <!-- 编程语言标签 -->
        <span
          v-if="language"
          class="text-[0.625rem] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          {{ language }}
        </span>

        <!-- 复制按钮 -->
        <button
          aria-label="复制代码"
          class="rounded-md p-1.5 text-zinc-700 transition-all duration-200 hover:bg-gray-200/40 hover:text-zinc-900 active:scale-95 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          :class="{ 'text-emerald-500 dark:text-emerald-400': copied }"
          :title="copied ? '已复制' : '复制代码'"
          @click="copy()">
          <Icon :name="copied ? 'heroicons:check' : 'heroicons:clipboard'" class="h-4 w-4" />
        </button>
      </div>
    </header>

    <!-- 代码内容区域 -->
    <div class="relative">
      <pre
        class="custom-scrollbar m-0! text-zinc-700 dark:text-white! overflow-x-auto bg-transparent! p-4! font-mono text-sm leading-relaxed"><slot /></pre>
    </div>
  </div>
</template>

<style scoped>
/* 自定义滚动条样式 */
.custom-scrollbar::-webkit-scrollbar {
  height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}

:global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
}

:global(.dark) .custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
}

/* 行号功能 */
:deep(code) {
  counter-reset: line-number;
  display: grid;
  min-width: 100%;
}

:deep(.line) {
  display: inline-flex;
  min-height: 1.5rem;
}

:deep(.line::before) {
  content: counter(line-number);
  counter-increment: line-number;
  width: 2rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: right;
  color: rgba(40, 42, 54, 0.3);
  user-select: none;
  font-size: 0.75rem;
  flex-shrink: 0;
}

:global(.dark) :deep(.line::before) {
  color: #6272a4 !important;
}

/* 代码行高亮 */
:deep(.line.highlight) {
  background-color: rgba(var(--site-primary-rgb), 0.12);
  margin: 0 -1rem;
  padding: 0 1rem;
  border-left: 2px solid var(--site-primary);
  width: calc(100% + 2rem);
}

:global(.dark) :deep(.line.highlight) {
  background-color: rgba(var(--site-primary-rgb), 0.08);
}
</style>
