---
title: "Security and Privacy Settings"
weight: 80
bookToc: true
---

# **Security and Privacy Settings**

## **Data Privacy and Telemetry**

### **Opt-out Method**

According to the Privacy terms in the [Amazon Q Developer official FAQ](https://aws.amazon.com/q/developer/faqs/), users who subscribe to Pro (i.e., paid users) are in an Opt-out state by default and do not require additional actions.

For free users, the opt-out method is detailed in the [official documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/opt-out-IDE.html)

## **Configure Whitelist for Enterprise Firewalls**

You can refer to the [official documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/firewall.html) to configure a whitelist for your enterprise firewall.

In addition to the above domains, if you need users to update Q's IDE plugins online, you also need to open the following domains:

- IDE plugins: Open the corresponding IDE plugin marketplace domain
  - VSCode: Refer to [VSCode documentation](https://code.visualstudio.com/docs/setup/network#_common-hostnames)
  - JetBrains: Refer to [JetBrains documentation](https://youtrack.jetbrains.com/articles/SUPPORT-A-288/Whats-the-IP-whitelist-of-IntelliJ-IDE-in-case-of-firewall-policy-or-restricted-network)

## **Private Network Access**

Amazon Q Developer provides VPC Endpoints to ensure that all **data traffic (traffic interacting with the large model)** does not leave the private network. However, other traffic (such as login, authentication, etc.) still needs to go through the public network.

You can refer to the [official website configuration tutorial](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/vpc-interface-endpoints.html) to configure VPC Endpoints.
