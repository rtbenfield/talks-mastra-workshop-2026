<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover relative overflow-hidden" :style="style">
    <div class="cover-spotlight absolute inset-0" />
    <div class="bg-brand-stripes absolute right-0 top-0 h-full w-16" />
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cover-spotlight {
  pointer-events: none;
  background: radial-gradient(
    60% 55% at 30% 40%,
    color-mix(in srgb, var(--brand-blue) 20%, transparent) 0%,
    transparent 70%
  );
}
</style>
