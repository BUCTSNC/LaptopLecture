<script setup lang="ts">
import type { PropType  } from 'vue';
import { computed } from 'vue'
import Logo from './Logo.vue'
import { SNCLogoVariant } from '../types/SNCLogo'

const props = defineProps({
    ...Logo.props,
    variant: {
        type: String as PropType<SNCLogoVariant>,
        default: SNCLogoVariant.WithText,
    },
    src: undefined,
})

const src = computed(() => {
    switch (props.variant) {
        case SNCLogoVariant.WithText:
            return new URL('../assets/images/SNC_logo_with_text.svg', import.meta.url).href
        case SNCLogoVariant.WithoutText:
            return new URL('../assets/images/SNC_logo_without_text.svg', import.meta.url).href
        case SNCLogoVariant.WithTextWhite:
            return new URL('../assets/images/SNC_logo_with_text_white.svg', import.meta.url).href
        case SNCLogoVariant.WithoutTextWhite:
            return new URL('../assets/images/SNC_logo_without_text_white.svg', import.meta.url).href
    }
})

</script>

<template>
    <Logo v-bind="$props" :src="src" />
</template>
