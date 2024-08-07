<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { LogoPosition } from '../types/Logo'

const props = defineProps({
  src: String,
  imgClassOverride: {
    type: String,
    default: '',
  },
  position: {
    type: String as PropType<LogoPosition>,
    default: LogoPosition.BottomRight,
  },
})

const imgClassDefault = computed(() => {
  switch (props.position) {
    case LogoPosition.TopLeft:
      return 'absolute m-4 inset-0 w-fit h-16'
    case LogoPosition.TopRight:
      return 'absolute m-4 ml-auto inset-0 w-fit h-16'
    case LogoPosition.BottomLeft:
      return 'absolute m-4 mt-auto inset-0 w-fit h-16'
    case LogoPosition.BottomRight:
      return 'absolute m-4 ml-auto mt-auto inset-0 w-fit h-16'
  }
})

</script>

<template>
  <img :class="imgClassDefault + (imgClassOverride ? (' ' + imgClassOverride) : '')" :src="src" />
</template>
