---
title: "Subscription & User Management"
weight: 2
bookToc: true
---

{{% hint info %}}
This document covers subscription management, user management, and authentication-related questions for Amazon Q Developer.
{{% /hint %}}

## Subscription & User Management

### Q. Why can't I find a user I created in Identity Center when searching in the subscription interface?

Don't search using username or email, please search using Display name.

### Q. Where can I see the subscription status of all users?

Currently, the Users Tab in the Amazon Q Developer console can only show the status of users subscribed individually. Users subscribed through Group method cannot be displayed. If you want to see the subscription status of all users, you can view it through the Amazon Q console.

![](/book-of-kiro/images/q_dev/check-subscription.png)

### Q. Is MFA (Multi Factor Authentication) mandatory?

No, it's not mandatory. Q Developer uses AWS Identity Center authentication with MFA enabled by default. Administrators can disable MFA functionality by following the [documentation](https://docs.aws.amazon.com/singlesignon/latest/userguide/mfa-getting-started.html) and going to AWS Identity Center:

1. Go to AWS Identity Center
2. Select Settings
3. Select Authentication Tab
4. Click Configure under Multi-factor authentication
5. Change "Prompt users for MFA" to Never

![](/book-of-kiro/images/q_dev/disable_mfa.png)

### Q. How to enable Pro version?

Please refer to the [official documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/deployment-options.html). The official documentation covers three scenarios:
1. Enable in a standalone account
2. Enable in an organization management account
3. Enable in an organization member account

**Video Tutorials:**
1. [Enable Q Developer Pro in a standalone account](https://www.bilibili.com/video/BV1ohghzZEqJ/?share_source=copy_web&vd_source=90c9e03ce2e772d5bae43b0d9e504a7e)
2. [Enable Q Developer Pro in a member account](https://www.bilibili.com/video/BV1HsXeYuE3U/?share_source=copy_web&vd_source=90c9e03ce2e772d5bae43b0d9e504a7e)
3. [Add more Amazon Q Developer Pro users](https://www.bilibili.com/video/BV1BaXeYeEe9/?vd_source=80c2d161264f9f6c3c6a4d42afc43ab2)

### Q. How to get the StartURL and Region needed for login?

You can view the StartURL and Region on the Amazon Q Developer settings page in the web console.

![](/book-of-kiro/images/q_dev/find_url.png)

### Q. Can I connect IAM Identity Center to my own IDP?

Yes, you can modify the IDP in IAM Identity Center.

![](/book-of-kiro/images/q_dev/connect_idp.png)

{{% hint warning %}}
**Note**: Existing users will be cleared. Users subscribed in Amazon Q Developer also need to be cleared and re-subscribed.
{{% /hint %}}