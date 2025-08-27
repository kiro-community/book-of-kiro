---
title: "IDE 插件 FAQ"
weight: 21
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer IDE 插件的常见问题。
{{% /hint %}}

## **💻 IDE 插件的安装与登陆**

### **❓ Q. 如何在 Android Studio 中安装插件？**

直接安装 Amazon Q 插件后，在 Android Studio 中无法正常使用聊天面板。可以参考 [GitHub Issue](https://github.com/aws/aws-toolkit-jetbrains/issues/5048) 来修复，选一个带 JCEF 的 boot runtime。

![](/book-of-kiro/images/q_dev/android_studio.png)

## **🔧 IDE 插件的使用**

### **❓ Q. 如何让 AI 对整个代码库有所感知？**

由于上下文窗口的限制，目前的编程助手无法把整个代码库放入上下文窗口（也不建议，会有注意力丢失）。但是可以使用 Local RAG 的方式来尝试索引本地代码库，AI 能够在本地对代码进行切片和向量化，以便根据用户的输入来使用语义检索相关的内容，不过会有额外的 CPU 和内存占用。

在 Amazon Q 插件中，您可以使用 @workspace 来引用整个代码库，AI 会根据输入的信息来检索相关的代码片段来回答问题。

![](/book-of-kiro/images/q_dev/at-workspace.gif)

需要注意：此功能第一次使用时需要花较长时间进行切片和建立索引，并会占用 CPU 和内存。

除此之外，因为智能体也能够根据语义来主动查询相关代码文件（查看文件树、基于文件名来查找相关文件、使用 shell 搜索关键字来查找相关文件），所以绝大多数场景下不使用 @workspace 也可以满足要求。

详见[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/workspace-context.html)。

### **❓ Q. @workspace 可以修改代码库索引的大小吗？**

可以。默认情况下 Index 代码库的大小为 250 MB，用户可以在 IDE 设置中手动修改大小。调整完之后，不会造成 CPU 的压力，但是会使用更多的内存。

### **❓ Q. 如何触发自动补全？**

默认情况下自动补全是启用的状态，您在书写代码时会自动触发。您也可以使用快捷键 Alt+C (Windows) / Option+C (Mac)来手动触发。

### **❓ Q. Inline suggestion 功能，为什么使用方向键没有出现多个推理选项？**

通常是由于 Q Developer 只生成了一个 suggestion。

### **❓ Q. 安装 Amazon Q 插件，启动只能提示后，方向键左右失灵？**

因为 Amazon Q 插件的 Inline Suggestion 使用方向键左右来切换推理选项。您可以在 IDE 的快捷键绑定中修改此快捷键。
