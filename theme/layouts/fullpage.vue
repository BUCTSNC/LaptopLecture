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
})

const style = computed(() => handleBackground(props.background, props.dim))
</script>

<style>
.fullpage {
  @apply 'p-0 m-0'
}
</style>

<template>
  <div class="slidev-layout fullpage w-full h-full" :style="style">
    <SlideLogo v-bind="$props" />
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
