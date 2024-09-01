---
layout: section
---

## 认识电脑的核心硬件

---

### 中央处理器(CPU)
> **中央处理器**（英语：**C**entral **P**rocessing **U**nit，英文缩写为**CPU**）是计算机的主要设备之一，功能主要是解释计算机指令以及处理计算机软件中的数据。—— [维基百科](https://zh.wikipedia.org/wiki/CPU)

电脑的“大脑”，负责运算和处理数据，影响运行速度

- 缓存
  - L1, L2, L3
- 核心数
  - 大小核
- 主频
- IPC
  > **每周期指令**（**IPC**，instructions per cycle ，又称 instructions per clock）是衡量处理器性能的一个指标：**每个时钟周期**执行的**平均指令数**。它是每条指令周期的乘法逆数。—— [维基百科](https://zh.wikipedia.org/wiki/%E6%AF%8F%E5%91%A8%E6%9C%9F%E6%8C%87%E4%BB%A4)

---
layout: statement
---

对于一个具有N个核心的CPU，第i个核心的主频为$\text{主频}_i$，IPC为$\text{IPC}_i$，那么就有：
$$
\sum_{i=0}^{N} (\text{主频}_i \times \text{IPC}_i) = \text{单位时间内能处理的指令数}
$$

---
layout: cols
title: CPU品牌
---

::0::
<div class="text-center p-8 bg-white h-32 mr-4">
<img src="/images/Intel_Logo.svg" alt="Intel Logo" class="h-full m-auto" />
</div>

#### [英特尔]{.text-3xl}
<div class="text-center mr-4">
<img src="/images/intel_series_cut.png" alt="Intel产品线比较表格" class="h-fit w-full" />
</div>

::1::
<div class="text-center p-8 bg-white h-32 mr-4">
<img src="/images/AMD_Logo.svg" alt="AMD Logo" class="h-full m-auto" />
</div>

#### [AMD]{.text-3xl}

CPU参数查询:

<div class="grid grid-cols-2 gap-8 w-fit m-auto">
  <QRCodeWithHint
    :width="180"
    type="canvas"
    data="https://ark.intel.com"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="Intel"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    data="https://www.amd.com/zh-cn/products/specifications/processors.html"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="AMD"
  />
</div>

---
layout: statement
background: slate-400
title: 没听懂？看数字！
---

#### [没听懂？看数字！]{.text-white .text-7xl}

---
layout: image
image: /images/intel_naming/core_iseries.png
---

##### Intel® 酷睿™ i系列

<!-- SKU越大越强，但是如果要量化，还得查前面的参数
如果是购买游戏本，看到这就够了，下面的两个命名形式的都没有这个强 -->

---
layout: image
image: /images/intel_naming/core.png
---

##### Intel® 酷睿™ 系列

<!-- 发觉有什么不同吗？对喽！这里没有i！还有，这里是三位 -->

---
layout: image
image: /images/intel_naming/core_ultra.png
---

##### Intel® 酷睿™ Ultra 系列

---
layout: statement
background: stone-900
---

<div class="grid grid-flow-col auto-cols-auto w-fit m-auto text-6xl leading-tight underline-offset-6 hover:underline-offset-12 text-slate-100 hover:decoration-indigo-500 transition-all duration-300 ease-out">
  <div class="bg-red-500 p-4 pr-0">
    <u class="decoration-3 decoration-sky-500 hover:decoration-sky-400">HX > HK > H ></u>
    <br/>
    游戏
  </div>
  <div class="bg-cyan-400 p-4 pl-0">
    <u class="decoration-3 decoration-pink-500 hover:decoration-pink-400">> P > U > Y</u>
    <br/>
    轻娱乐/办公
  </div>
</div>

<!-- 前三者：游戏模式，耗电嗷嗷快
后三者：省电模式，耗电慢点，当然性能也差点 -->

---
layout: image
image: /images/amd_naming.jpg
backgroundSize: contain
---

##### AMD® Ryzen 7000 系列 移动端

---

### 图形处理器(GPU)
> **图形处理器**（英语：**G**raphics **P**rocessing **U**nit，缩写：**GPU**）
> 
> 是一种专门在个人电脑、工作站、游戏机和一些移动设备（如平板电脑、智能手机等）上执行**绘图运算工作**的微处理器。以***图形处理器为核心的主板扩展卡***也称**显示卡**或“**显卡**”。—— [维基百科](https://zh.wikipedia.org/wiki/GPU)

- 显存
- 频率
- 核心数

根据显卡的位置，我们可以将其分为两类：
1. 集成显卡(iGPU)
  - 集成在CPU中，性能较差，但日常够用
  - AMD的CPU携带的集成显卡性能相对更好

---

2. 独立显卡(dGPU)
  - 优点
    - 性能更强
    - 拥有CUDA核心一类的加速单元，在部分领域(例如影视后期、机器学习等)起到辅助、加速作用
  - 缺点
    - 贵
    - 功耗高
    - 体积更大
    - 部分低端独立显卡性能可能不如核心显卡

---
layout: fullpage
background: black
hideLogo: true
---

<div class="overflow-y-auto h-150 w-full px-16">
  <img src="/images/geforce_laptops_compare.png" class="w-full h-fit" />
</div>

<!-- From: https://www.nvidia.cn/geforce/laptops/compare/ -->
---
layout: image
image: /images/ababa.png
backgroundSize: 20em
---

<!-- 那么有没有不用看这些参数，也能方便选择的办法呢？ -->

---

#### 集成显卡的选择

如果你选择集成显卡的话，那么你在购买的时候就不必在这方面耗费精力，参考CPU本身的性能即可

**Why?**
- 如果你不需要独立显卡，那么你对显卡性能的需求不很敏感
- 集成显卡的性能差别不大
- 更高端的CPU一般会配备更强的集成显卡

---
layout: statement
background: slate-500
title: 独立显卡的选择
---

#### [教数数环节到！]{.text-white .text-7xl}

---
layout: statement
background: slate-500
---

<style>
code {
  --uno: 'dark !text-7xl'
}
</style>

`NVIDIA RTX 4060 8GB`

---
layout: iframe
url: https://www.mydrivers.com/zhuanti/tianti/gpum/
---

<!-- 代际比较
当然，你也可以选择查询天梯图，会更加准确 -->

---

### 内存
> **随机存储器**（random-access memory, **RAM**），又称**RAM存储器**，是一种可随机读写的存储器，与只读存储器（ROM）一起构成主存储器，与中央处理器（CPU）直接交换数据。与ROM不同，RAM在电源关闭时会丢失存储数据，是一种易失性（volatile）存储器。它可以随时读写（刷新时除外，见下文），而且速度很快，通常作为操作系统或其他正在运行中的程序的临时资料存储介质。—— [维基百科](https://zh.wikipedia.org/wiki/%E9%9A%8F%E6%9C%BA%E5%AD%98%E5%82%A8%E5%99%A8)

用于暂存数据和程序

- 大小 16GB起步
- 频率

#### 消歧义
> 常使用“***内存***”来指代手机上的“**内部存储**”(等效于PC中的“**硬盘**”)，
> 但在这里我们指的是电脑上的“**RAM**”，
> 等效于手机厂商的说法为“**运行内存**”，有些人也称之为“***运存***”。

---
layout: two-cols
---

### 硬盘
长期存储数据的设备，分为：
1. 机械硬盘(HDD)
  - SATA接口&协议
  - 受到冲击易损坏
  - 速度慢
  - 便宜
2. 固态硬盘(SSD)
  - (m)SATA接口&SATA协议
  - M.2接口
    - SATA协议 -- 速度相对慢
    - NVMe协议(NVMe PCIe 3.0/4.0)
  - 速度快
  - 不易受到物理冲击影响
  - 价格较高

::right::
<ImageWithHint src="/images/msata_ssd_vs_sata_hdd.png" :alt="'上：mSATA固态硬盘 下：3.5寸SATA机械硬盘'" imgClass="w-80% m-auto" />
<ImageWithHint src="/images/nvme_960pro.png" alt="M.2 接口的 NVMe SSD" imgClass="w-full" />

---

在此，我建议：
- 只选择固态硬盘
- 如果购买512GB的机型，一定考虑购回后自行购买，更换或增加硬盘
- 如果你经常**用电脑**，1TB会很快用完

当前的系统需求决定了使用机械硬盘几乎必然会遇到系统卡顿的问题，而且新的笔记本基本都只包含M.2接口，无法安装机械硬盘。

---
layout: center
---

### 天梯图

<div class="grid grid-cols-4 gap-8 w-fit m-auto">
  <QRCodeWithHint
    :width="180"
    type="canvas"
    data="https://www.365pcbuy.com/article.php?id=409"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="移动端CPU"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    data="https://www.mydrivers.com/zhuanti/tianti/gpum/"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="移动端显卡"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    data="https://www.mydrivers.com/zhuanti/tianti/cpu/"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="桌面端CPU"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    data="https://www.mydrivers.com/zhuanti/tianti/gpu/"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="桌面端显卡"
  />
</div>

---

### 其他硬件
#### 键盘
手感、按键行程、背光、半高方向键、有无数字键盘
#### 屏幕
分辨率、色域、亮度、刷新率
#### 电池
续航
#### 散热
性能释放、噪音
#### 扩展接口
USB、HDMI、Type-C、耳机、SD卡槽、RJ45（有线网口）
