---
layout: center
---

## 签到时间！

<div class="grid grid-cols-[330px_200px_200px] gap-8 items-center mt-4">
  <div class="text-center">
    <img src="/images/checkin1.jpg" alt="讲座签到小程序码" class="h-92 w-fit m-auto" />
    <div>讲座签到</div>
  </div>

  <QRCodeWithHint
    class="m-auto w-fit"
    :width="190"
    type="canvas"
    :margin="10"
    data="https://laptop.snc.moe"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: '#2563eb' }"
    hint="本次讲座 PPT"
  />

  <QRCodeWithHint
    class="m-auto w-fit"
    :width="190"
    type="canvas"
    :margin="10"
    data="http://weixin.qq.com/r/TUyuq3DEtbjJKDTIbxnJ"
    :backgroundOptions="{ color: '#ffffff' }"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: '#111827' }"
    hint="学生网络中心公众号"
  />
</div>
