---
title: "Extension Management"
weight: 70
---

# **Extension Management**

Extensions can provide Kiro with additional language support, enabling features like jump to definition and jump to implementation.

## **Install from Kiro's Extension Marketplace**

In the left navigation bar, click the Extensions icon. The extension panel will be displayed on the left side of the interface, where you can search for the extensions you need and install them.

![](/book-of-kiro/images/extension-market.png)

## **Install from VSCode's Extension Marketplace**

Since Kiro uses OpenVSX Registry to manage extensions, some extensions available in VSCode may not be found in Kiro's extension marketplace. You can download VSIX files from the VSCode extension marketplace and install them manually.

### **Download Extensions Using Chrome Browser Extension**

The simplest way to download extensions is to install the [Visual Studio Marketplace Downloader](https://chromewebstore.google.com/detail/visual-studio-marketplace/pfnjpnflbdpmbpnifkdheagiilnhccgh) Chrome browser extension. After installation, a Download button will appear in the Visual Studio Marketplace, which you can click to download the corresponding extension.

1. Go to the [Visual Studio Marketplace Downloader](https://chromewebstore.google.com/detail/visual-studio-marketplace/pfnjpnflbdpmbpnifkdheagiilnhccgh) Chrome extension page to install the extension.
2. Go to the [VS Code extension marketplace](https://marketplace.visualstudio.com/vscode).
3. Search for the extension you want, for example: Deno.
4. In the search results, click on the extension you need. You will go to the extension's details page.
5. Click the Download button on the details page to download the extension.

The extension file downloaded using this method has a `.zip` suffix. Rename the suffix to `.vsix` to use it.

### **Manually Construct URL to Download Extensions**

1. Go to the [VS Code extension marketplace](https://marketplace.visualstudio.com/vscode).
2. Search for the extension you want, for example: Deno.
3. In the search results, click on the extension you need. You will go to the extension's details page.
4. On the details page, click **Version History**.
5. Combining the URL of the extension page and the information in Version History, extract the following information (using Deno as an example):
   - ![](/book-of-kiro/images/deno.png)
   - `itemName`: The `itemName` field in the URL Query. For Deno, the itemName is `denoland.vscode-deno`. Split the content before and after the period (.) into the following two fields:
     - fieldA: `denoland`
     - fieldB: `vscode-deno`
   - `version`: Such as 3.43.3 in the screenshot
6. Use the extracted values of the 3 fields to replace the same-named fields in the URL below.
   - Template: `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${itemName.fieldA}/vsextensions/${itemName.fieldB}/${version}/vspackage`
   - Example: `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/denoland/vsextensions/vscode-deno/3.43.3/vspackage`
8. Enter the modified URL in the browser and press Enter. The browser will start downloading the extension.

### **Install VSIX Extensions in Kiro**

In the extension panel options, click Install from VSIX to select a local extension file for installation.

![](/book-of-kiro/images/install-vsix.png)

## **FAQ**

### **Installing a specific version from VS Code extension marketplace is not currently supported**

If a specific version of an extension from the VS Code extension marketplace depends on some interfaces in a newer version of VS Code, it may cause the extension to be incompatible with Kiro. You can view the extension's Version History and download a historical version of the extension
