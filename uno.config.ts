import { defineConfig } from 'unocss'
import type { Theme } from '@unocss/preset-uno';

export default <Theme> defineConfig({
  shortcuts: {
    'bg-main': 'bg-slate-200 text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})