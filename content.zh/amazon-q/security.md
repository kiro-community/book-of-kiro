---
title: "安全与隐私设置"
weight: 80
bookToc: true
---

# **安全与隐私设置**

## **数据隐私与遥测**

### **退出（Opt-out）方法**

根据 [Amazon Q Developer 官方 FAQ](https://aws.amazon.com/q/developer/faqs/) 中 Privacy 相关条款，订阅了 Pro 的用户（即付费用户）默认处于 Opt-out 的状态，不需要额外的操作。

对于免费用户，退出方法详见[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/opt-out-IDE.html)

## **为企业防火墙配置白名单**

可以参考[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/firewall.html)为您的企业防火墙配置白名单。

除了以上域名，如果您需要用户联网更新 Q 的 IDE 的插件，还需要开放如下域名：

- IDE 插件：开放对应 IDE 插件市场的域名
  - VSCode：参考 [VSCode 文档](https://code.visualstudio.com/docs/setup/network#_common-hostnames)
  - JetBrains：参考 [JetBrains 文档](https://youtrack.jetbrains.com/articles/SUPPORT-A-288/Whats-the-IP-whitelist-of-IntelliJ-IDE-in-case-of-firewall-policy-or-restricted-network)

## **内网访问**

Amazon Q Developer 提供了 VPC Endpoint 来使所有的 **数据流量（与大模型交互的流量）** 能够不出公网。但是其他流量（如登录、鉴权认证等）仍然需要走公网。

您可以参考[官方网站的配置教程](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/vpc-interface-endpoints.html)来配置 VPC Endpoint。
