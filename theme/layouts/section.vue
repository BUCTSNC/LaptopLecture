<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import SlideLogo from '../components/SlideLogo.vue'

const props = defineProps({
  ...SlideLogo.props,
  background: {
    type: String,
    default: undefined,
  },
  dim: {
    type: Boolean,
    default: true,
  },
})

const style = computed(() => handleBackground(props.background, props.dim))
</script>

<template>
  <div class="slidev-layout section w-full h-full grid" :style="style">
    <div class="my-auto text-center">
      <SlideLogo v-bind="$props" />
      <slot />
    </div>
  </div>
</template>
