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

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout center h-full grid place-content-center" :style="style">
    <SlideLogo v-bind="$props" />
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
