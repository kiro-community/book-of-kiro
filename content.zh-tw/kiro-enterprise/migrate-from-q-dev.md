---
title: "從 Amazon Q Developer 遷移"
weight: 55
bookToc: true
---

# **遷移到 Kiro**

如果您已經訂閱 Amazon Q Developer Pro，並且想要遷移到 Kiro，可以參考以下步驟。

## **管理員操作**

### **升級訂閱**

首先，[登入 Kiro 主控台](https://console.aws.amazon.com/amazonq/developer/home?region=us-east-1)，在左側面板選擇 Amazon Q Developer 訂閱介面，然後點擊 Upgrade to Kiro

![upgrade-button](/book-of-kiro/images/q_dev/upgrade-button.png)

選擇要進行升級的使用者或群組，然後點擊右上角選擇 Kiro Plan，然後點擊下一步

![select-user-to-upgrade](/book-of-kiro/images/q_dev/select-user-to-upgrade.png)

確認訂閱計畫無誤後，點擊右下角的 Upgrade 按鈕

![check-upgrade-plan](/book-of-kiro/images/q_dev/check-upgrade-plan.png)

完成後，會被重新導向到 Kiro 的使用者訂閱介面

![finish-upgrade](/book-of-kiro/images/q_dev/finish-upgrade.png)

至此即完成了訂閱的升級。原本 Amazon Q Developer Pro 的訂閱已被取消，被升級為了 Kiro 訂閱。

### **啟用資料統計和指標**

由於 Kiro 的資料指標和 Amazon Q Developer 的資料指標是兩套不同的系統，您還需要為 Kiro 啟動 Dashboard, Prompt Logging 和使用者級指標 (User Activity Report)。

![upgrade-settings](/book-of-kiro/images/q_dev/upgrade-settings.png)

## **使用者操作**

### **切換 Kiro IDE 訂閱**

管理員完成上述步驟後，使用者只需要退出 Kiro 用戶端並重新啟動，即可重新整理登入狀態，對話中也可以看到消耗的 Credit 以及耗時

> 登入憑證的更新有延遲。如果重新啟動用戶端、重新登入，還是無法查看到 Credit 用量，請等待最大 24 小時後重試

![credit-usage](/book-of-kiro/images/q_dev/credit-usage.png)

### **遷移 Q CLI 到 Kiro CLI**

使用 `q update` 升級即可。如果無法升級，可以直接重新安裝 kiro-cli 來覆蓋。參考[官方文件](https://kiro.dev/docs/cli/installation/)

升級後，使用 `kiro-cli logout` 退出登入，然後使用 `kiro-cli login` 重新登入，確保使用 Kiro 的訂閱進行登入即可

升級後，Kiro 的設定檔和 Q CLI 的設定檔都會被識別，但是建議進行設定檔遷移，參考[官方文件](https://kiro.dev/docs/cli/migrating-from-q/#kiro-cli-changes)

## **FAQ**

### **升級 Kiro 的訂閱後還可以使用 Amazon Q Developer 嗎**

可以，IDE 外掛和舊版本的 Q CLI 都可以繼續使用

### **Amazon Q Developer Pro 的訂閱還可以繼續使用 Kiro 嗎**

可以，但是無法查看 credit 使用情況。建議升級到 Kiro 訂閱。Kiro 訂閱也可以使用 Amazon Q Developer

### **不同使用者/群組能否設定不同的訂閱計畫**

支援

### **不同使用者/群組能否設定不同的 overage 設定**

暫不支援，僅支援組織級別的 overage 設定（啟用/停用）
