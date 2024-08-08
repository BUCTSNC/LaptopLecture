<script setup lang="ts">

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <span
    :class="`rounded-full flex items-center w-fit text-white transition-colors border-2 ` + (cost > 0 ? 'border-red-700 bg-red-600 hover:bg-red-700' : 'border-green-700 bg-green-600 hover:bg-green-700')">
    <span
      :class="`rounded-full px-1 m-1 text-sm align-middle border ` + (cost > 0 ? 'border-red-600 bg-red-500' : 'border-green-600 bg-green-500')">
      <mdi-arrow-right-thin />
    </span>
    {{ to }}
    <span
      :class="`rounded-full px-1 m-1 text-sm align-middle border ` + (cost > 0 ? 'border-red-600 bg-red-500' : 'border-green-600 bg-green-500')">
      {{ cost > 0 ? `+${cost}` : cost }}
    </span>

  </span>
</template>
