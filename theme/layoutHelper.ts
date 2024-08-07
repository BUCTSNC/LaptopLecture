import type { CSSProperties } from 'vue'
import { theme } from '@unocss/preset-wind'

interface UnoColors {
    [key: string]: UnoColors & {
        DEFAULT?: string;
    } | string;
}

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false): CSSProperties {
  if (!background)
    return {}

  const colorParts = background.split('-')
  
  let unboxedColor = theme.colors?.[colorParts[0]]
  for (let i = 0; i < colorParts.length && unboxedColor; i++) {
    if (typeof unboxedColor === 'string') {
      background = unboxedColor
      break
    } else if (i === colorParts.length - 1) break
    else unboxedColor = unboxedColor?.[colorParts[i+1]]
  }

  const isColor = ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0)
  
  const style = {
    background: isColor
      ? background
      : undefined,
    color: !isColor
      ? 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  if (!style.background)
    delete style.background

  return style
}
