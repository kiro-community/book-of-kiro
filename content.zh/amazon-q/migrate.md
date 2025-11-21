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

### **切换 Kiro IDE 订阅**

管理员完成上述步骤后，用户只需要退出 Kiro 客户端并重新启动，即可刷新登录状态，对话中也可以看到消耗的 Credit 以及耗时

> 登陆凭证的更新有延迟。如果重启客户端、重新登录，还是无法查看到 Credit 用量，请等待最大 24 小时后重试

![credit-usage](/book-of-kiro/images/q_dev/credit-usage.png)

### **迁移 Q CLI 到 Kiro CLI**

使用 `q update` 升级即可。如果无法升级，可以直接重新安装 kiro-cli 来覆盖。参考[官方文档](https://kiro.dev/docs/cli/installation/)

升级后，使用 `kiro-cli logout` 退出登录，然后使用 `kiro-cli login` 重新登录，确保使用 Kiro 的订阅进行登录即可

升级后，Kiro 的配置文件和 Q CLI 的配置文件都会被识别，但是建议进行配置文件迁移，参考[官方文档](https://kiro.dev/docs/cli/migrating-from-q/#kiro-cli-changes)

## **FAQ**

### **升级 Kiro 的订阅后还可以使用 Amazon Q Developer 吗**

可以，IDE 插件和老版本的 Q CLI 都可以继续使用

### **Amazon Q Developer Pro 的订阅还可以继续使用 Kiro 吗**

可以，但是无法查看 credit 使用情况。建议升级到 Kiro 订阅。Kiro 订阅也可以使用 Amazon Q Developer

### **不同用户/组能否配置不同的订阅计划**

支持

### **不同用户/组能否配置不同的 overage 设置**

暂不支持，仅支持组织级别的 overage 设置（启用/禁用）
