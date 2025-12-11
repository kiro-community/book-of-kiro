---
title: "插件管理"
weight: 22
---

# **插件管理**

插件可以为 Kiro 提供额外的语言支持，实现跳转到定义、跳转到实现等功能。

## **从 Kiro 的插件市场安装**

在左侧导航栏中，点击 Extensions 图标，界面左侧显示插件面板，您可在面板中搜索需要使用的插件并安装。

![](/book-of-kiro/images/extension-market.png)

## **从 VSCode 的插件市场安装**

由于 Kiro 使用 OpenVSX Registry 管理插件，有些 VSCode 中的插件可能无法在 Kiro 插件市场中找到。您可以从 VSCode 插件市场中下载 VSIX 文件然后手动安装。

### **使用 Chrome 浏览器插件下载插件**

下载插件最简单的方式是安装 [Visual Studio Marketplace Downloader](https://chromewebstore.google.com/detail/visual-studio-marketplace/pfnjpnflbdpmbpnifkdheagiilnhccgh) Chrome 浏览器插件，安装后在 Visual Studio Marketplace 会出现 Download 按钮，点击即可下载对应的插件。

1. 前往 [Visual Studio Marketplace Downloader](https://chromewebstore.google.com/detail/visual-studio-marketplace/pfnjpnflbdpmbpnifkdheagiilnhccgh) Chrome 浏览器插件页面安装插件。
2. 前往 [VS Code 的插件市场](https://marketplace.visualstudio.com/vscode)。
3. 搜索你想要的插件，例如：Deno。
4. 在搜索结果中，点击你所需的插件。你会前往该插件的详情页。
5. 点击详情页中的 Download 按钮即可下载插件。

此方法下载的插件文件，后缀为 `.zip`，重命名后缀为 `.vsix` 即可使用。

### **手动拼接 URL 下载插件**

1. 前往 [VS Code 的插件市场](https://marketplace.visualstudio.com/vscode)。
2. 搜索你想要的插件，例如：Deno。
3. 在搜索结果中，点击你所需的插件。你会前往该插件的详情页。
4. 在详情页中，点击 **Version History**。
5. 结合插件页的 URL 和 Version History 中的信息，提取出以下信息（以 Deno 为例）：
   - ![](/book-of-kiro/images/deno.png)
   - `itemName`：URL Query 中的 `itemName` 字段，如 Deno 的 itemName 为 `denoland.vscode-deno`，并将小数点（.）前后的内容分成以下两个字段：
     - fieldA：`denoland`
     - fieldB：`vscode-deno`
   - `version`：如截图中的 3.43.3
6. 使用提取出来的 3 个字段的值替换下方 URL 中的同名字段。
   - 模板：`https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${itemName.fieldA}/vsextensions/${itemName.fieldB}/${version}/vspackage`
   - 示例：`https://marketplace.visualstudio.com/_apis/public/gallery/publishers/denoland/vsextensions/vscode-deno/3.43.3/vspackage`
8. 在浏览器中输入修改后的 URL，然后按下回车键。浏览器开始下载该插件。

### **在 Kiro 中安装 VSIX 插件**

在插件面板选项中点击 Install from VSIX 即可选择本地插件文件进行安装。

![](/book-of-kiro/images/install-vsix.png)

## **常见问题**

### **暂不支持安装 VS Code 插件市场中某个版本的插件**

若 VS Code 插件市场中某个版本的插件依赖了新版 VS Code 中的某些接口，则可能会导致该插件与 Kiro 不兼容。你可以查看该插件的 Version History，然后下载该插件的历史版本
