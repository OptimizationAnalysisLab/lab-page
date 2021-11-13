## 網址
https://optimizationanalysislab.github.io/lab-page/

## 架構
用 [Create React App](https://create-react-app.dev/) 產生一個網站，並透過 [gh-pages](https://github.com/tschaub/gh-pages) 放在 [GitHub Page](https://pages.github.com/) 上

開發使用的 branch 是 `main`

實際上 github page 會用 `gh-pages` 上的 code

## 參考
[參考文章](https://ithelp.ithome.com.tw/articles/10228423)

## 安裝與啟動
```bash
git clone https://github.com/OptimizationAnalysisLab/lab-page.git
```

```bash
cd lab-page
```

```bash
git checkout main
```

```bash
npm install
```

```bash
npm run start
```

## 調整檔案
- 內容調整就修改 `data.js`

- 樣式調整就改 `App.scss`

- 架構調整就改 `components` folder

## 部署
確認修改好後

使用下面指令，就會把改動更新到網頁上
```bash
npm run deploy
```

使用下面指令，會把目前程式碼更新到 Github repo 的 `main` branch 上
```bash
git push origin main
```
