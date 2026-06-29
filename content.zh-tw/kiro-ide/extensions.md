---
title: "外掛管理"
weight: 22
---

# **外掛管理**

外掛可以為 Kiro 提供額外的語言支援，實現跳轉到定義、跳轉到實現等功能。

## **從 Kiro 的外掛市集安裝**

在左側導覽列中，點擊 Extensions 圖示，介面左側顯示外掛面板，您可在面板中搜尋需要使用的外掛並安裝。

![](/book-of-kiro/images/extension-market.png)

## **從 VSCode 的外掛市集安裝**

由於 Kiro 使用 OpenVSX Registry 管理外掛，有些 VSCode 中的外掛可能無法在 Kiro 外掛市集中找到。您可以從 VSCode 外掛市集中下載 VSIX 檔案然後手動安裝。

### **使用 Chrome 瀏覽器外掛下載外掛**

下載外掛最簡單的方式是安裝 [Visual Studio Marketplace Downloader](https://chromewebstore.google.com/detail/visual-studio-marketplace/pfnjpnflbdpmbpnifkdheagiilnhccgh) Chrome 瀏覽器外掛，安裝後在 Visual Studio Marketplace 會出現 Download 按鈕，點擊即可下載對應的外掛。

1. 前往 [Visual Studio Marketplace Downloader](https://chromewebstore.google.com/detail/visual-studio-marketplace/pfnjpnflbdpmbpnifkdheagiilnhccgh) Chrome 瀏覽器外掛頁面安裝外掛。
2. 前往 [VS Code 的外掛市集](https://marketplace.visualstudio.com/vscode)。
3. 搜尋你想要的外掛，例如：Deno。
4. 在搜尋結果中，點擊你所需的外掛。你會前往該外掛的詳情頁。
5. 點擊詳情頁中的 Download 按鈕即可下載外掛。

此方法下載的外掛檔案，副檔名為 `.zip`，重新命名副檔名為 `.vsix` 即可使用。

### **手動拼接 URL 下載外掛**

1. 前往 [VS Code 的外掛市集](https://marketplace.visualstudio.com/vscode)。
2. 搜尋你想要的外掛，例如：Deno。
3. 在搜尋結果中，點擊你所需的外掛。你會前往該外掛的詳情頁。
4. 在詳情頁中，點擊 **Version History**。
5. 結合外掛頁的 URL 和 Version History 中的資訊，提取出以下資訊（以 Deno 為例）：
   - ![](/book-of-kiro/images/deno.png)
   - `itemName`：URL Query 中的 `itemName` 欄位，如 Deno 的 itemName 為 `denoland.vscode-deno`，並將小數點（.）前後的內容分成以下兩個欄位：
     - fieldA：`denoland`
     - fieldB：`vscode-deno`
   - `version`：如截圖中的 3.43.3
6. 使用提取出來的 3 個欄位的值替換下方 URL 中的同名欄位。
   - 範本：`https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${itemName.fieldA}/vsextensions/${itemName.fieldB}/${version}/vspackage`
   - 範例：`https://marketplace.visualstudio.com/_apis/public/gallery/publishers/denoland/vsextensions/vscode-deno/3.43.3/vspackage`
8. 在瀏覽器中輸入修改後的 URL，然後按下 Enter 鍵。瀏覽器開始下載該外掛。

### **在 Kiro 中安裝 VSIX 外掛**

在外掛面板選項中點擊 Install from VSIX 即可選擇本機外掛檔案進行安裝。

![](/book-of-kiro/images/install-vsix.png)

## **常見問題**

### **暫不支援安裝 VS Code 外掛市集中某個版本的外掛**

若 VS Code 外掛市集中某個版本的外掛依賴了新版 VS Code 中的某些介面，則可能會導致該外掛與 Kiro 不相容。你可以查看該外掛的 Version History，然後下載該外掛的歷史版本
