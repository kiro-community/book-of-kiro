---
title: "Q Developer CLI"
weight: 4
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer CLI 的安装、登录、使用和常见问题。
{{% /hint %}}

## Q CLI 的安装与登陆

### Q. Windows 上如何进行安装？

需要在 Windows 上安装 WSL。请[查看教程](https://amzn-chn.feishu.cn/docx/YI5xdNBtRozbjkx5H3McqRm5nNg)。

### Q. Q CLI 如何进行登陆？

- **macOS**: 您可以通过 GUI 直接登陆
- **Linux**: 通过 `q login` 指令进行登陆

### Q. Q CLI 如何登出？

使用 `q logout` 指令进行登出。

## Q Developer CLI 的使用

### Q. 在 Windows 上通过 WSL 的方式来使用 Q Developer CLI，消耗多少资源？

Windows 上通过 WSL 的方式来使用 Q Developer CLI 使用的资源非常有限。在 Windows 上安装 WSL 并且安装 Q Developer CLI 之后的内存开销很小。

![](/book-of-kiro/images/q_dev/wsl_resource_1.png)
![](/book-of-kiro/images/q_dev/wsl_resource_2.png)


### Q. 有非交互式模式吗？

有。使用命令：`q chat --no-interactive --trust-all-tools`

### Q. 可以在容器中用吗？

可以。参考 [auto-q 项目](https://github.com/DiscreteTom/auto-q/)

### Q. 可以在 CI/CD 流水线里用吗？

请参考[相关博客](https://aws.amazon.com/cn/blogs/china/using-amazon-q-developer-to-build-an-enterprise-automated-code-review-process/)在 GitLab 中进行配置，GitHub 等其他仓库可参考博客中的流程。

### Q. CLI 有哪些 AWS 权限？

CLI 自身无权限，使用的是本地配置的 credential，比如可以使用 `aws configure` 命令进行配置。

### Q. 在使用 Q CLI 做 AWS 运维的时候，如何避免误操作风险？

我们建议采取如下措施：

1. **为本地的 AWS CLI 配置只读权限** - Q Developer CLI 使用您本地的 AWS Credentials 访问 AWS，您可以通过给 AK/SK 配置只读权限来限制。在这种情况下，建议您使用 Q Developer CLI 做查询（如故障诊断），自己在控制台手动执行操作

2. **不启动自动模式** - Q Developer CLI 可使用 `q chat --trust-all-tools` 指令来进入自动模式，在运维场景下，我们建议您通过 `/trust` 指令来授权部分指令，其他命令需要每次使用 `y` 来确认 Q Developer CLI 需要执行的指令

### Q. Q CLI 每个指令都需要输入 y 来确认，有没有方法可以自动化？

可以通过 `q chat --trust-all-tools` 来进入对话，这样所有工具都不需要询问您权限了。

{{% hint warning %}}
我们建议用户谨慎使用该功能。尤其是在运维场景下，对生产系统使用，具有一定的风险性。
{{% /hint %}}

### Q. 如何授权 MCP tools 的权限？

Q Developer CLI 默认每次操作 MCP 都需要您进行确认。您可以使用以下方式来进行授权配置，简化输入：

- **使用 CLI 参数**: `q chat --trust-tools xxx`。可以使用 alias 命令简化它：`alias qq="q chat --trust-tools xxx"`。该指令会信任所有的 tools，包括 built-in tools 和 MCP tools。请谨慎使用该指令
- **在对话中使用 /trust**: 如 `/trust xxx`。可授权单个 tool

### Q. 如何升级？

- **Mac/Linux**: 直接执行 `q update` 指令即可升级
- **Windows WSL**: 如果执行 `q update` 出错，重新安装新版本覆盖即可，参考[教程](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html#command-line-installing-ubuntu).

### Q. 是否可以执行其它云厂的 CLI 指令？

可以。经过初步测试，Amazon Q Developer CLI 能够识别、执行主流云厂的指令。在测试中，我们发现 Q Developer CLI 对于阿里云、GCP、Azure 的命令行都有不错的认知，能够正确执行指令。

### Q. 如何查看 Amazon Q Developer CLI 的日志？

请参考[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-reference.html#command-line-reference-log-files)。

