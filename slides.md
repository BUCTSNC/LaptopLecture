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
---

# 笔记本知识讲座

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
layout: section
---

# 大学生的第一份笔记本选购指南

<!-- 考虑到多数对计算机比较了解的同学应该都在高考完就买完电脑了吧
这里我们就只简单讲一下笔记本的选购，就不深入讲各种硬件知识了，
很多同学可能也不感兴趣，软件部分更能提高大家的在校体验 -->
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
