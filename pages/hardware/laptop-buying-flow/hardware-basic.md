---
layout: section
---

## 认识电脑的核心硬件

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
    :margin="10"
    data="https://ark.intel.com"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="Intel"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    :margin="10"
    data="https://www.amd.com/zh-cn/products/specifications/processors.html"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="AMD"
  />
</div>

---
layout: statement
background: slate-400
title: 接下来，看型号
---

#### [接下来，看型号]{.text-white .text-7xl}

---
layout: image
image: /images/intel_naming/core_iseries.png
---

##### Intel(R) Core(TM) i 系列

<!-- SKU越大越强，但是如果要量化，还得查前面的参数
如果是购买游戏本，看到这就够了，下面的两个命名形式的都没有这个强 -->

---
layout: image
image: /images/intel_naming/core.png
---

##### Intel(R) Core(TM) 系列

<!-- 发觉有什么不同吗？对喽！这里没有i！还有，这里是三位 -->

---
layout: image
image: /images/intel_naming/core_ultra.png
---

##### Intel(R) Core(TM) Ultra 系列

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
layout: default
---

### 名字又换了？拆开看就行

<div class="mt-8 border-t border-white/25">
  <div class="grid grid-cols-[8rem_1fr] items-start border-b border-white/25 py-7">
    <div class="pt-8 text-3xl font-bold">Intel</div>
    <div class="grid grid-cols-[2.2fr_.8fr_1fr_.55fr] gap-3">
      <div class="flex h-30 flex-col justify-between bg-slate-700 px-5 py-4">
        <span class="font-mono text-4xl leading-none text-white">Core Ultra</span>
        <span v-click="1" class="text-xl text-slate-100">系列</span>
      </div>
      <div class="flex h-30 flex-col justify-between bg-yellow-300 px-4 py-4 text-slate-950">
        <span class="font-mono text-4xl leading-none">X7</span>
        <span v-click="1" class="text-xl">档位</span>
      </div>
      <div class="flex h-30 flex-col justify-between bg-cyan-300 px-4 py-4 text-slate-950">
        <span class="font-mono text-4xl leading-none">358</span>
        <span v-click="1" class="text-xl">型号</span>
      </div>
      <div class="flex h-30 flex-col justify-between bg-rose-300 px-4 py-4 text-slate-950">
        <span class="font-mono text-4xl leading-none">H</span>
        <span v-click="1" class="text-xl">后缀</span>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-[8rem_1fr] items-start border-b border-white/25 py-7">
    <div class="pt-8 text-3xl font-bold">AMD</div>
    <div class="grid grid-cols-[2.2fr_.8fr_.8fr_1fr] gap-3">
      <div class="flex h-30 flex-col justify-between bg-slate-700 px-5 py-4">
        <span class="font-mono text-4xl leading-none text-white">Ryzen AI</span>
        <span v-click="2" class="text-xl text-slate-100">系列</span>
      </div>
      <div class="flex h-30 flex-col justify-between bg-yellow-300 px-4 py-4 text-slate-950">
        <span class="font-mono text-4xl leading-none">7</span>
        <span v-click="2" class="text-xl">档位</span>
      </div>
      <div class="flex h-30 flex-col justify-between bg-rose-300 px-4 py-4 text-slate-950">
        <span class="font-mono text-4xl leading-none">H</span>
        <span v-click="2" class="text-xl">定位</span>
      </div>
      <div class="flex h-30 flex-col justify-between bg-cyan-300 px-4 py-4 text-slate-950">
        <span class="font-mono text-4xl leading-none">450</span>
        <span v-click="2" class="text-xl">型号</span>
      </div>
    </div>
  </div>
</div>

<div v-click="3" class="mt-7 text-center text-3xl">
  5 / 7 / 9：同一系列里的不同档位
</div>

<!--
讲解提示：
- 跟着颜色把“系列、档位、具体型号、后缀/定位”指出来即可，不要求观众背内部编码。
- `X7` 是一个完整的档位名称，不要拆成 `X` 和 `7` 分别解释。Intel 没有公布 `X` 对应的英文全称；在 Core Ultra Series 3 中，它用于区分核显规格更高的高端档位。现场讲到“看到 X7，知道它的核显定位更高”即可。
- 5 / 7 / 9 只能粗略表示同代产品档位，不能拿来跨代、跨系列比性能。
- 可以现场挑两颗 CPU，用完整型号查一次天梯图，让大家看到数字相近不等于性能相近。
- 聊到核显时再补充：要认 Arc B370/B390、Radeon 860M/880M/890M 这些具体名称，内存和整机功耗也会影响表现。
- H、HX、HS 只是命名的一部分，不能据此猜出实际功耗；同一颗 CPU 放在不同电脑里，散热、性能和续航也会不同。

2026 年补充，不替换前面的命名教学页。
参考：【小白必读】笔吧科普&祛魅&购机指南
https://www.kdocs.cn/l/chzEHrH90jRz
工作表：2026年 移动端芯片概览；核对日期：2026-08-10
-->

---

### 显卡

大致分为两类：

- 集成显卡
  - Office、网课、编程、轻量图片处理
  - 功耗低、噪音小，续航通常更好
  - 不适合大型游戏、三维建模和 GPU 计算
- 独立显卡
  - 大型游戏、三维建模、视频特效
  - 课程软件要求 CUDA 或独立显存
  - 价格、重量、噪音和功耗更高

只是偶尔训练模型，可以先租用云 GPU / 租卡。

<!--
讲解提示：模型训练要看显存、框架兼容性和数据合规，不是只看显卡型号。
低频或短期任务可以租用云 GPU；需要频繁离线运行、数据不能上传，或网络成本不合适时，再考虑本地独显。
-->

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

<code class="dark !text-7xl">NVIDIA RTX 4060 8GB</code>

<!--
这页继续用来教大家识别代际、档位和显存，不随每年新品改例子。
现场补充：2026 年移动端仍以 RTX 50 系为主，RTX 5070 新增 12GB 显存版本；
具体表现仍要结合显卡功耗、散热和整机评测。
参考：https://www.kdocs.cn/l/chzEHrH90jRz
工作表：2026年 移动端芯片概览；核对日期：2026-08-10
-->


---
layout: iframe
url: https://www.mydrivers.com/zhuanti/tianti/gpum/
---

<!-- 代际比较
当然，你也可以选择查询天梯图，会更加准确 -->

---
layout: center
---

### 天梯图

<div class="grid grid-cols-4 gap-8 w-fit m-auto">
  <QRCodeWithHint
    :width="180"
    type="canvas"
    :margin="10"
    data="https://www.365pcbuy.com/article.php?id=409"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="移动端CPU"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    :margin="10"
    data="https://www.mydrivers.com/zhuanti/tianti/gpum/"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="移动端显卡"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    :margin="10"
    data="https://www.mydrivers.com/zhuanti/tianti/cpu/"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="桌面端CPU"
  />
  <QRCodeWithHint
    :width="180"
    type="canvas"
    :margin="10"
    data="https://www.mydrivers.com/zhuanti/tianti/gpu/"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded'}"
    hint="桌面端显卡"
  />
</div>

<!--
讲解提示：天梯图只用来快速建立相对位置。看中具体电脑以后，还要查对应整机评测中的功耗、散热、噪音和续航。
-->

---

### 内存

内存越大，同时运行的程序越多。

- **16GB**：最低需求
- **32GB**：虚拟机、较大工程项目、核显游戏、三维设计和重度创作

这里的“内存”指 RAM，也就是运行内存。

购买前再看升级空间：

- 板载、插槽，还是二者混合
- 插槽数量和空余插槽
- 最大容量，以及升级是否影响保修
- 核显占用的内存和带宽

<!-- 讲解提示：手机商品页中的“内存”有时指存储空间，这里要说明两者不是一回事。 -->

---

### 硬盘

硬盘用于长期存放系统、软件和文件。现在的新笔记本基本都使用 M.2 固态硬盘。

容量要根据专业和使用习惯来选：

- **512GB** —— 预算非常有限，而且几乎不装大型软件和游戏
- **1TB** —— 课程软件、日常文件和少量游戏
- **2TB 及以上** —— 大型游戏、视频素材和虚拟机较多

<!--
讲解提示：512GB 不是按专业一刀切，仍要看课程软件、数据集、素材和游戏数量。
NVMe、PCIe 4.0 是接口/协议规格，不等于颗粒类型，也不能单独代表实际体验。
-->

购买时还要留意：

- 有几个 M.2 硬盘位，是否还有空位
- 增加或更换硬盘是否影响保修
- 重要文件是否另有备份

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
