#  React 的測試用專案

實際    [DEMO](https://amberneko.github.io/firstReact/ "React App Demo")

使用官方的     **NPM ( 套件管理程式 )**    套件製作而成

需先安裝    **[Node.js](https://nodejs.org/en/)** 裡面有附     **NPM**

安裝完後打開命令提示字元輸入 **node -v**     跟     **npm -v**     可以看到版本資訊

但是安裝方法會有   **全域安裝**    跟     **區域安裝**

 - **全域安裝法**

  1.  在命令提示字元輸入 **npm   install   -g   create-react-app**

  2.  然後使用    **cd**    指令切換至想要放專案資資料夾的地方後輸入 **create-react-app 專案名稱**
    
- **區域安裝法**

  直接    **cd**    想要放專案資資料夾的地方後輸入    **npm install  create-react-app**
  
## 啟動方法

**cd**     到專案資資料夾的地方後輸入     **npm start**

之後會幫你自動開啟瀏覽器 也可以手動輸入網址  http://localhost:3000/

只要你的專案有任何變更後存檔 系統就會自動偵測 並更新網頁

## 專案打包

**cd**    到專案資資料夾的地方後輸入     **npm run build**

專案裡面有一個     **build**     資料夾

這個資料夾才是真正拿來放到伺服器上的版本

