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

## **内网访问**

Amazon Q Developer 提供了 VPC Endpoint 来使所有的 **数据流量（与大模型交互的流量）** 能够不出公网。但是其他流量（如登录、鉴权认证等）仍然需要走公网。

您可以参考[官方网站的配置教程](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/vpc-interface-endpoints.html)来配置 VPC Endpoint。

配置 VPC Endpoint 后，可能无法使用 `q update` 进行 CLI 的升级。这是因为升级时需要访问 `desktop-release.q.us-east-1.amazonaws.com` ，它是 Q 的 VPC Endpoint 的子域名。如果您需要升级，可以参考[此文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing-ssh-setup-autocomplete.html)，从公网下载 zip 安装包后手动安装。
