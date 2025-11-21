---
title: "迁移到 Kiro"
weight: 999
bookToc: true
---

# **迁移到 Kiro**

如果您已经订阅 Amazon Q Developer Pro，并且想要迁移到 Kiro，可以参考以下步骤。

## **管理员操作**

### **升级订阅**

首先，[登录 Kiro 控制台](https://console.aws.amazon.com/amazonq/developer/home?region=us-east-1)，在左侧面板选择 Amazon Q Developer 订阅界面，然后点击 Upgrade to Kiro

![upgrade-button](/book-of-kiro/images/q_dev/upgrade-button.png)

选择要进行升级的用户或组，然后点击右上角选择 Kiro Plan，然后点击下一步

![select-user-to-upgrade](/book-of-kiro/images/q_dev/select-user-to-upgrade.png)

确认订阅计划无误后，点击右下角的 Upgrade 按钮

![check-upgrade-plan](/book-of-kiro/images/q_dev/check-upgrade-plan.png)

完成后，会被重定向到 Kiro 的用户订阅界面

![finish-upgrade](/book-of-kiro/images/q_dev/finish-upgrade.png)

至此即完成了订阅的升级。原本 Amazon Q Developer Pro 的订阅已被取消，被升级为了 Kiro 订阅。

### **启用数据统计和指标**

由于 Kiro 的数据指标和 Amazon Q Developer 的数据指标是两套不同的系统，您还需要为 Kiro 启动 Dashboard, Prompt Logging 和 用户级指标 (User Activity Report)。

![upgrade-settings](/book-of-kiro/images/q_dev/upgrade-settings.png)

## **用户操作**

管理员完成上述步骤后，用户只需要退出 Kiro 客户端并重新启动，即可刷新登录状态，对话中也可以看到消耗的 Credit 以及耗时

![credit-usage](/book-of-kiro/images/q_dev/credit-usage.png)

## **FAQ**

### **升级 Kiro 的订阅后还可以使用 Amazon Q Developer 吗？**

可以，IDE 插件和 CLI 都可以继续使用
