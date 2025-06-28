# SkyPerfectV番組フィルター

このGoogleChrome拡張機能は、SkyPerfectVのリアルタイム番組一覧ページ（https://streaming.skyperfectv.co.jp/realtime）で以下の番組を自動的に非表示にします：

- 「ファーム」という文字列が含まれる番組
- 「野球」「BASEBALL」「公式戦」のいずれも含まれない番組

## 機能

- 指定されたページでのみ動作
- 「ファーム」を含む番組を非表示
- 野球関連以外の番組を非表示（「野球」「BASEBALL」「公式戦」のいずれも含まれない番組）
- ページの動的な更新にも対応（MutationObserver使用）

## インストール方法

1. このフォルダをダウンロードまたはクローン
2. GoogleChromeで `chrome://extensions/` を開く
3. 「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. このフォルダを選択

## 使用方法

1. 拡張機能をインストール後、https://streaming.skyperfectv.co.jp/realtime にアクセス
2. 以下の番組が自動的に非表示になります：
   - 「ファーム」を含む番組
   - 野球関連以外の番組

## ファイル構成

- `manifest.json`: 拡張機能の設定ファイル
- `content.js`: メインの機能を実装したスクリプト
- `README.md`: このファイル 