<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { AllLogoVariant } from '../types/SlideLogo'
import { SNCLogoVariant } from '../types/SNCLogo'
import { LogoPosition } from '../types/Logo'
import Logo from '../components/Logo.vue'

const varientMap = {
  sncWithText: SNCLogoVariant.WithText,
  sncWithoutText: SNCLogoVariant.WithoutText,
  sncWithTextWhite: SNCLogoVariant.WithTextWhite,
  sncWithoutTextWhite: SNCLogoVariant.WithoutTextWhite,
  custom: undefined,
}

const props = defineProps({
  logoSrc: {
    type: String,
    default: undefined,
  },
  hideLogo: {
    type: Boolean,
    default: false,
  },
  logoVariant: {
    type: String as PropType<AllLogoVariant>,
    default: 'sncWithText',
  },
  logoPosition: {
    type: String as PropType<LogoPosition>,
    default: LogoPosition.BottomRight,
  },
  logoImgClassOverride: String,
})

const varientMapped = computed(() => varientMap[props.logoVariant])
const logoSeries = computed(() => {
  if (props.logoVariant.startsWith('snc')) {
    return 'snc'
  }
  return 'custom'
})

</script>

<template>
  <template v-if="!hideLogo">
    <Logo v-if="logoSrc" :position="logoPosition" :imgClassOverride="logoImgClassOverride" :variant="logoVariant"
      :src="logoSrc" />

    <SNCLogo v-else-if="logoSeries == 'snc'" :position="logoPosition" :imgClassOverride="logoImgClassOverride"
      :variant="varientMapped" />
  </template>
</template>
