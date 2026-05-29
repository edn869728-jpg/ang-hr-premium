# ANG HR Premium

ANG HR Premium 是完整功能版前端。

## GitHub Pages 預計網址

```text
https://edn869728-jpg.github.io/ang-hr-premium/
```

## 版本定位

包含 Plus，另加：

- 完整權限
- 權限管理中心
- 班別設定
- 工時計算規則
- 正式薪資計算
- 薪資審核發布
- 員工薪資單查看
- 歷史資料歸檔
- Drive 匯出
- Flutter App WebView 正式包裝
- Android 權限測試
- 上架準備

## 架構

```text
Flutter App / Browser
→ GitHub Pages 前端
→ GAS API
→ Google Sheets
```

## 設定

請在 `config.js` 設定 GAS Web App `/exec` 網址。

前端 repo 只放 UI 與 API 呼叫，不放私人資料或金鑰。
