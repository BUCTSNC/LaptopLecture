---
theme: ./theme
title: 笔记本知识讲座
info: 笔记本知识讲座
class: text-start
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  fallbacks: true
  sans: "LXGW Wenkai Screen, Noto Sans"
  serif: Times New Roman
  mono: Consolas
logoPosition: "top-right"
background: slate-950
logoVariant: sncWithTextWhite
---

# [笔记本知识讲座]{.text-slate-100}

<div class="absolute top-0 right-0 h-full flex items-center">
  <img src="/images/mc_laptop.png" class="h-120 m-12" />
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/BUCTSNC/LaptopLecture" target="_blank" alt="GitHub" title="打开GitHub查看源码"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
src: ./pages/signin.md
---

<!-- Slides will be imported from ./pages/signin.md -->

---
src: ./pages/hardware/index.md
---

<!-- Slides will be imported from ./pages/hardware/index.md -->

---
src: ./pages/software/index.md
---

<!-- Slides will be imported from ./pages/software/index.md -->

---
layout: end
---
