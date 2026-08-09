# 软件部分

<!-- 硬件和宿舍网络就位以后，下面按“找资料、装工具、远程使用、校内办事、遇到问题求助”的顺序来讲。 -->

## 搜索引擎

国内推荐[Bing必应搜索引擎](https://cn.bing.com)，某度广告多内容低质重复

对于有能力的同学：用**英文**在[StackOverflow](https://stackoverflow.com/), [Reddit](https://reddit.com/)等平台上找答案

**教程**：官方文档

**转载内容**：可能过时、缺少关键步骤

英文看不懂？推荐[**沉浸式翻译**](https://immersivetranslate.com/)浏览器插件，中英对照

---
layout: iframe
url: https://immersivetranslate.com/
---

---

## AI

### 大陆

* [**DeepSeek** https://www.deepseek.com/](https://www.deepseek.com/)
* [通义千问 https://tongyi.aliyun.com/](https://tongyi.aliyun.com/)

### 海外

* ChatGPT（Copilot）
* Claude

### AI 编程工具

* Claude Code
* Codex
* OpenCode

安装指导敬请期待我们的 **Let's Code** 活动，关注公众号。

---

### 浏览器

* Edge
* Chrome
* Firefox

### 杀毒软件

* Windows Defender
* 卡巴斯基

### 解压缩软件

* [7-Zip https://www.7-zip.org/](https://www.7-zip.org/)
* [NanaZip 微软应用商店](https://www.microsoft.com/store/productId/9N8G7TSCL18R)

---

## 学习辅助软件

<!-- 搜索和基础软件讲完，再挑三类能直接服务课程学习的工具，不展开做软件大全。 -->

* [Draw.io 微软应用商店](https://www.microsoft.com/store/productId/9MVVSZK43QQW)

  思维导图绘制

<ImageWithHint src="/images/drawio_screenshot.png" alt="Draw.io" imgClass="h-85" class="w-fit m-auto" />

---
hideLogo: true
---

* [Geogebra https://www.geogebra.org](https://www.geogebra.org)

  类似几何画板，二维三维绘图

<ImageWithHint src="/images/geogebra_screenshot.png" alt="Geogebra" imgClass="h-95" class="w-fit m-auto" />

---
hideLogo: true
---

* [Visual Studio Code 微软应用商店](https://apps.microsoft.com/store/detail/XP9KHM4BK9FZ7Q)

<ImageWithHint src="/images/vscode_screenshot.png" alt="Visual Studio Code" imgClass="h-110" class="w-fit m-auto" />

---
layout: section
---

## 远程串流

笔记本续航短，厚重，平板用不了大部分桌面软件？那么你需要远程串流！

<!-- 前面讲的是在本机上完成学习任务；这里换一个思路，把宿舍电脑留作主机，人在别处远程使用。 -->

---
layout: two-cols-header
---

### 串流工具怎么选

::left::

| 方案 | 适用场景 |
| --- | --- |
| **Apollo + Moonlight** | 游戏、高码率、手柄 |
| Windows 远程桌面 | 文档、编程、远程维护；主机需专业版 |
| ToDesk / GameViewer | 临时使用；可能限制时长、码率或收费 |

::right::

#### 下面以 Apollo + Moonlight 为例

1. 宿舍 Windows 电脑安装 **Apollo**
2. 平板或轻薄本安装 **Moonlight**
3. 先在同一局域网完成配对
4. 再用 **Tailscale** 从校外访问
5. 有公网 IP 时，才考虑端口映射与 DDNS

---
layout: two-cols-header
---

### 在宿舍电脑上安装 Apollo

::left::

1. 从项目 Releases 下载并安装 Windows 版本
2. 浏览器打开 `https://localhost:47990`
3. 首次进入时创建管理账号和强密码
4. 确认应用列表中已有 `Desktop`
5. 保持 Apollo 随 Windows 启动

浏览器提示自签名证书警告是本机管理页的正常现象，确认地址无误后继续。

::right::

<QRCodeWithHint
  class="m-auto w-fit"
  :width="230"
  type="canvas"
  :margin="10"
  data="https://github.com/ClassicOldSong/Apollo/releases/latest"
  :backgroundOptions="{ color: '#ffffff' }"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded', color: '#0f766e' }"
  hint="下载 Apollo"
/>

<!-- 讲解提示：Apollo 会按客户端分辨率创建虚拟显示，适合平板和无外接显示器的场景。 -->

---
layout: two-cols-header
---

### 用 Moonlight 连接宿舍电脑

::left::

1. 主机尽量用网线连接路由器
2. 客户端连接同一路由器的 5 GHz Wi-Fi 或 Wi-Fi 6
3. 打开 Moonlight，选择自动发现的电脑
4. 没有发现时，用“添加电脑”填写主机局域网 IP
5. 将 Moonlight 显示的 PIN 输入 Apollo 配对页面
6. 打开 `Desktop`，先完成一次局域网串流测试

::right::

<QRCodeWithHint
  class="m-auto w-fit"
  :width="230"
  type="canvas"
  :margin="10"
  data="https://moonlight-stream.org/"
  :backgroundOptions="{ color: '#ffffff' }"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded', color: '#2563eb' }"
  hint="下载 Moonlight"
/>

先使用默认分辨率和码率；确认稳定后，再逐步提高画质。

---
layout: two-cols-header
---

### 在校外连接：Tailscale

::left::

1. 主机和客户端都安装 Tailscale
2. 使用同一账号登录，加入同一个 tailnet
3. 在主机端找到 `100.x.x.x` 的 Tailscale 地址
4. Moonlight 选择“添加电脑”，填写该地址
5. Apollo 和 Tailscale 都保持运行，即可从异地连接

::right::

<QRCodeWithHint
  class="m-auto w-fit"
  :width="210"
  type="canvas"
  :margin="10"
  data="https://tailscale.com/download"
  :backgroundOptions="{ color: '#ffffff' }"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded', color: '#111827' }"
  hint="下载 Tailscale"
/>

用 `tailscale ping <主机地址>` 检查链路：

- `direct`：设备直接通信，适合串流
- `DERP` / `relay`：流量经过中继，延迟和带宽可能不适合高码率串流

> 这里的 Tailscale 用来连接自己的设备，和访问校内资源的学校 VPN 不是一回事。

---
layout: two-cols-header
---

### 公网 IP、DDNS 和端口映射

::left::

#### 先检查公网 IP

1. 在路由器后台查看 WAN IPv4
2. 与浏览器查询到的公网 IPv4 对比
3. 若是私有地址、运营商 CGNAT，或两者明显不同，端口映射通常无效
4. 给宿舍电脑设置 DHCP 地址保留，避免局域网 IP 变化
5. 在路由器配置 DDNS，将动态公网 IP 绑定到域名

::right::

#### 需要映射的端口

| 协议 | 端口 |
| --- | --- |
| TCP | `47984`、`47989`、`48010` |
| UDP | `47998`、`47999`、`48000`、`48002`、`48010` |

Moonlight 中添加 DDNS 域名。不要把 Apollo 管理页面的 `47990/TCP` 暴露到公网。

<!-- 端口表来自 Moonlight 官方 Setup Guide；Apollo 兼容 Sunshine/GameStream 端口族。 -->

<!--
讲解提示：默认路线到上一页 Tailscale 就已经结束。本页和下一页只作为有公网 IPv4、愿意继续折腾的进阶分支，时间紧可以跳过。
-->

---
layout: two-cols-header
---

### 路由器端口映射示例

::left::

#### NAT / 端口转发示例

| 外部端口 | 协议 | 内部 IP | 内部端口 |
| --- | --- | --- | --- |
| `47984` | TCP | `192.168.1.50` | `47984` |
| `47998` | UDP | `192.168.1.50` | `47998` |

`192.168.1.50` 是给宿舍电脑做 DHCP 地址保留后的局域网 IP；其余端口按上一页表格逐条添加。

::right::

#### 这些字段分别填什么

- **内部 IP**：填写运行 Apollo 的宿舍电脑，不要填路由器地址。
- **端口**：外部端口和内部端口通常保持一致，协议按 TCP / UDP 分开建规则。
- **DDNS**：把变化的公网 IP 映射到域名；它不能绕过运营商 CGNAT。

如果 WAN 地址不是公网地址，就使用 Tailscale。即使连接失败，也不要把 Apollo 管理页面开放到公网。

---
layout: two-cols-header
---

### 连不上或卡顿时怎么排查

::left::

#### 连接问题

1. 先在同一局域网完成发现、配对和串流
2. 检查 Windows 防火墙是否放行 Apollo
3. Tailscale 方案检查两端在线，并确认链路为 `direct`
4. 端口映射方案检查公网 IP、DHCP 保留和路由规则
5. 卡顿时先降低码率，再检查 Wi-Fi 和主机编码负载

::right::

#### 安全设置

- Apollo 管理账号使用独立强密码
- 不向公网开放 `47990/TCP` 管理页面
- 只给已确认的客户端授予启动应用、键鼠等权限
- 不再使用的 Tailscale 设备及时移出 tailnet
- 及时更新 Apollo、Moonlight 和 Tailscale

<!-- 串流解决的是连接自己的电脑；接下来讲访问学校系统与校园网入口。 -->

---

#### 学校 VPN（访问校内资源）

方式一：[网页 VPN https://w.buct.edu.cn/](https://w.buct.edu.cn/)

方式二：[客户端 VPN https://vpnmotion.buct.edu.cn/](https://vpnmotion.buct.edu.cn/)，内附使用方法

#### 校园网认证

[认证地址 https://tree.buct.edu.cn/](https://tree.buct.edu.cn/)

连接校园网尽量不要更改默认DNS设置，否则可能出现校内界面打不开的情况

如果打不开尝试：
- [http://202.4.130.95/](http://202.4.130.95/) 
- [http://202.4.130.82/](http://202.4.130.82/)

[可信电子成绩单平台](https://enscpt.buct.edu.cn/)

<!-- 讲解提示：平台需在校园网或学校 VPN 内使用统一身份认证登录，首次使用时绑定邮箱。 -->

<!-- VPN 和认证是校内网络入口，NFC 则是手机在校园生活中的另一个常用入口。 -->

---

### NFC

学校NFC可以刷房门和食堂部分机器

<div style="display: flex; justify-content: space-around;">
<ImageWithHint src="/images/NFC1.jpg" alt="1.下载北京一卡通" imgClass="h-80" class="w-fit m-auto" />
<ImageWithHint src="/images/NFC2.jpg" alt="2.添加学生卡" imgClass="h-80" class="w-fit m-auto" />
<ImageWithHint src="/images/NFC3.jpg" alt="3.添加成功" imgClass="h-80" class="w-fit m-auto" />
<ImageWithHint src="/images/NFC4.jpg" alt="4.NFC模拟校园卡" imgClass="h-80" class="w-fit m-auto" />
</div>

---
layout: section
---

### 常用网站

<!-- 官方入口解决办事，下面这些学生项目负责把分散的信息和经验整理到一起。 -->

---
layout: two-cols-header
---

### BUCT Wiki｜北化人的共建知识库

::left::

由学生网络中心成员发起和维护，收集课程、校园生活和新生入学等实用信息。

#### 内容范围

- 新生入学与校园适应
- 课程学习与经验分享
- 校园生活、实践与常用资源
- 招生信息与学校介绍

::right::

<QRCodeWithHint
  class="m-auto w-fit"
  :width="250"
  type="canvas"
  :margin="10"
  data="https://wiki.snc.moe"
  :backgroundOptions="{ color: '#ffffff' }"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded', color: '#b91c1c' }"
  hint="打开 BUCT Wiki"
/>

<div class="text-center text-2xl font-bold">wiki.snc.moe</div>

<!--
讲解提示：Wiki 会尽量区分学校规定与同学经验；涉及选课、考试等重要事项时，仍以学校最新通知为准。
-->

---
logoPosition: top-right
---

#### [BUCT导航 https://buct.snc.moe](https://buct.snc.moe)

<div class="grid grid-cols-[minmax(0,1fr)_180px] gap-5 items-center mt-4">

  <ImageWithHint src="/images/buctsnc_nav_screenshot.png" alt="BUCT导航" imgClass="w-full max-h-100 object-contain m-auto" class="w-full m-auto" />

  <QRCodeWithHint
    class="m-auto w-fit"
    :width="160"
    type="canvas"
    :margin="10"
    data="https://buct.snc.moe"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: '#2563eb' }"
    hint="打开 BUCT导航"
  />
</div>

---
logoPosition: top-right
---

#### [BUCTBASE https://base.snc.moe](https://base.snc.moe)

<div class="grid grid-cols-[minmax(0,1fr)_180px] gap-5 items-center mt-4">

  <ImageWithHint src="/images/buctbase_screenshot.png" alt="BUCT BASE" imgClass="w-full max-h-100 object-contain m-auto" class="w-full m-auto" />

  <QRCodeWithHint
    class="m-auto w-fit"
    :width="160"
    type="canvas"
    :margin="10"
    data="https://base.snc.moe"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: '#0f766e' }"
    hint="打开 BUCTBASE"
  />
</div>

---
layout: two-cols-header
---

### X-ware

<!-- 自己搜索、查 Wiki 仍解决不了时，就把问题带到 X-ware；这里也是整场讲座的落点。 -->

::left::

X-ware服务是学生网络中心为全校同学提供的电脑维修服务，至今已有20年的历史。主要工作包括：

- 提供电脑硬件升级建议
- 硬件故障排查
- 系统安装
- 软件安装
- 添加或更换硬盘、内存
- 清灰（包含硅脂）
- 网卡问题解决
- 硬盘清理
- 解决电脑蓝屏问题

::right::

<ImageWithHint src="/images/X-ware.jpg" alt="添加内存" imgClass="h-90" class="w-fit m-auto" />

---
hideLogo: true
---

## **联系我们**

##

有疑问？

欢迎加入学生网络中心X-ware服务群！无论遇到什么问题，都可以在群内提问，或者私聊管理员进行一对一解答。

仍有问题？

关注“**学生网络中心**”公众号，预约X-ware服务。**每周五晚**，我们在**后勤楼319**提供X-ware志愿服务，解决您的一切硬件和软件问题，竭诚为您服务。

X-ware，跨越硬件与软件的桥梁！

<div style="display: flex; justify-content: space-around;">
  <QRCodeWithHint
  :width="160"
  type="canvas"
  data="https://qm.qq.com/q/aCF3RIFxxS"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded'}"
  hint="X-ware服务群1"
/>
  <QRCodeWithHint
  :width="160"
  type="canvas"
  data="https://qm.qq.com/q/qv9AmYmHBg"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded'}"
  hint="X-ware服务群2"
/>
<QRCodeWithHint
  :width="160"
  type="canvas"
  data="http://weixin.qq.com/r/TUyuq3DEtbjJKDTIbxnJ"
  :imageOptions="{ margin: 10 }"
  :dotsOptions="{ type: 'extra-rounded'}"
  hint="学生网络中心公众号"
/>
</div>
