---
title: "Migrating to Kiro"
weight: 999
bookToc: true
---

# **Migrating to Kiro**

If you have already subscribed to Amazon Q Developer Pro and want to migrate to Kiro, you can follow these steps.

## **Administrator Actions**

### **Upgrade Subscription**

First, [log in to the Kiro console](https://console.aws.amazon.com/amazonq/developer/home?region=us-east-1), select the Amazon Q Developer subscription interface in the left panel, then click Upgrade to Kiro

![upgrade-button](/book-of-kiro/images/q_dev/upgrade-button.png)

Select the users or groups you want to upgrade, then select Kiro Plan in the upper right corner, and click next

![select-user-to-upgrade](/book-of-kiro/images/q_dev/select-user-to-upgrade.png)

After confirming the subscription plan is correct, click the Upgrade button in the lower right corner

![check-upgrade-plan](/book-of-kiro/images/q_dev/check-upgrade-plan.png)

After completion, you will be redirected to Kiro's user subscription interface

![finish-upgrade](/book-of-kiro/images/q_dev/finish-upgrade.png)

This completes the subscription upgrade. The original Amazon Q Developer Pro subscription has been cancelled and upgraded to a Kiro subscription.

### **Enable Data Statistics and Metrics**

Since Kiro's data metrics and Amazon Q Developer's data metrics are two different systems, you also need to enable Dashboard, Prompt Logging, and User Activity Report for Kiro.

![upgrade-settings](/book-of-kiro/images/q_dev/upgrade-settings.png)

## **User Actions**

### **Switch Kiro IDE Subscription**

After the administrator completes the above steps, users only need to exit the Kiro client and restart to refresh the login status. The conversation will also show the consumed Credits and time

> There is a delay in updating login credentials. If you restart the client and log in again but still cannot see Credit usage, please wait up to 24 hours before retrying

![credit-usage](/book-of-kiro/images/q_dev/credit-usage.png)

### **Migrate Q CLI to Kiro CLI**

Use `q update` to upgrade. If you cannot upgrade, you can reinstall kiro-cli directly to overwrite. Refer to the [official documentation](https://kiro.dev/docs/cli/installation/)

After upgrading, use `kiro-cli logout` to log out, then use `kiro-cli login` to log in again, ensuring you log in using the Kiro subscription

After upgrading, both Kiro's configuration file and Q CLI's configuration file will be recognized, but it is recommended to migrate the configuration file. Refer to the [official documentation](https://kiro.dev/docs/cli/migrating-from-q/#kiro-cli-changes)

## **FAQ**

### **Can I still use Amazon Q Developer after upgrading to a Kiro subscription**

Yes, both the IDE plugin and older versions of Q CLI can continue to be used

### **Can I still use Kiro with an Amazon Q Developer Pro subscription**

Yes, but you cannot view credit usage. It is recommended to upgrade to a Kiro subscription. Kiro subscriptions can also use Amazon Q Developer

### **Can different users/groups be configured with different subscription plans**

Yes

### **Can different users/groups be configured with different overage settings**

Not currently supported, only organization-level overage settings (enable/disable) are supported
