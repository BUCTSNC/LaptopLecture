<script setup lang="ts">

const props = defineProps({
    alt: String,
    imgClass: {
        type: String,
        default: '',
    },
    class: {
        type: String,
        default: '',
    },
    src: String,
})
</script>

<template>
    <div :class="('text-center w-fit' + ' ' + props.class).trimEnd()">
        <img :src="src" :alt="alt" :class="imgClass" />
        {{ props.alt }}
    </div>
</template>
