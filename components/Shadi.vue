<script setup lang="ts">

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div :class="('bg-slate-900 dark:bg-slate-100 w-fit h-fit ' + props.class).trimEnd()">
      <div class="hover:opacity-100 opacity-0 transition-opacity duration-300 w-fit h-fit">
        <slot />
      </div>
    </div>
</template>
