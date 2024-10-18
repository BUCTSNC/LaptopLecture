<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import SlideLogo from '../components/SlideLogo.vue'

const slots = defineSlots()
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
  cols: {
    type: Number,
    default: undefined,
  },
  rows: {
    type: Number,
    default: 0,
    required: true
  }
})

const style = computed(() => handleBackground(props.background, props.dim))

const colIds = computed(() => {
  const colIds: string[] = []
  let i = 0;
  for (; slots[`${i}`]; i++) {
    colIds.push(`${i}`)
  }
  return colIds
})

const cols = computed(() => props.cols ? props.cols as number : colIds.value.length)

const colsContainerStyle = computed(() => {
  const res: any = {
    gridTemplateColumns: `repeat(${cols.value}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${props.rows}, minmax(0, 1fr))`
  }

  if (cols.value === 0) delete res["gridTemplateColumns"]
  if (props.rows === 0) delete res["gridTemplateRows"]
  return res
})
</script>

<template>
  <div class="slidev-layout cols w-full h-full" :style="style">
    <SlideLogo v-bind="$props" />
    <div v-if="$slots.header" class="col-header">
      <slot name="header" />
    </div>

    <div class="cols-container grid" :style="colsContainerStyle">
      <template v-for="k in colIds">
        <div :class="`col-content col-${k}`">
          <slot :name="k" />
        </div>
      </template>
    </div>

    <div v-if="$slots.bottom" class="col-bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>
