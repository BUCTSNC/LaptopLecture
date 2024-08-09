---
layout: cols
---

<style>
.cols-container {
  --uno: "gap-4";
}
</style>

::header::
### Intel 13、14代 CPU缩缸问题

::0::
<ImageWithHint src="../../../images/intel_13_14thgen_announce.png" alt="13、14代缩缸（主要影响桌面端）" imgClass="w-full" class="m-auto" />

::1::

> 针对此前因稳定性问题被退回的第 13 / 14 代酷睿台式机处理器，我们已进行大量详细的调查分析。现已确定是过高的运行电压导致了部分第 13 / 14 代酷睿台式机处理器出现不稳定情况。通过我们对退回处理器的分析，**确认过高的运行电压由微代码算法造成，而该算法向处理器发送了错误的电压请求。**
>
> 英特尔将提供一个微代码补丁，来修复过高电压导致的根本问题。我们还会持续进行验证工作，确保所有关于第 13 / 14 代酷睿台式机处理器稳定性问题的反馈都能得到解决。**英特尔预计将于八月中旬完成全面验证后，向合作伙伴发布此补丁。**
>
> 英特尔将**全力妥善地帮助客户解决**在第 13 / 14 代酷睿台式机处理器上遇到的稳定性问题。

<!-- Image Source: https://community.intel.com/t5/Processors/July-2024-Update-on-Instability-Reports-on-Intel-Core-13th-and/td-p/1617113
Source: https://www.ithome.com/0/783/564.htm -->

这里的**缩缸**指的是由于在高电压下，CPU出现运行**不稳定**的情况，
为了修复这个问题，厂商通过更新固件，降低你的处理器电压设置，同时也会导致你的**处理器性能降低**。
