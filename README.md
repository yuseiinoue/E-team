# アプリケーション開発

## 概要
これは、E-teamの新潟観光アプリver.2.0です。

## 使用技術
- README
- html
- javascript
- css

## 開発メンバー
- 井上侑政
- 田島大夢
- 濱野隼輔
- 河合蒼太
- 岡田洸次郎
- 赤神莉玖

## ファイル構成
- Eteam
  - ADMIN
    - images
    - 01_admin.html
    - 02_admin.html
    - 03_admin.html
  - HOME
    - EVENT
      - images
      - 01_event.html
      - event.css
    - GURUME
      - images
      - 01_gurume.html
      - 02_gurume.html
      - 03_gurume.html
      - 04_gurume.html
      - gurume.css
    - INN
      - images 
      - 01_inn.html
      - 02_inn.html
      - 03_inn.html
      - 04_inn.html
      - 05_inn.html
      - 06_inn.html
      - 07_inn.html
      - 08_inn.html
      - inn.css
    - NEWS
      - images 
      - 01_news.html
      - news.css
    - SIGHTSEEING
      - images
      - 01.sightseeing.html
      - 02.sightseeing.html
      - 03.sightseeing.html
      - 04.sightseeing.html
      - 05.sightseeing.html
      - 06.sightseeing.html
      - 07.sightseeing.html
      - 08.sightseeing.html
      - sightseeing.css
    - 01_index.html
    - HOME.css
    - images
  - SEARCH
    - 01_index.html
    - style.css
  - MYPAGE
    - MYPAGE_02
      - ank.html
      - style.css
    - MYPAGE_03
      - images
      - coupon.html
      - style.css
    - 01_index.html
    - scriptjs
    - style.css
  - README
  - images
  - style.css
  - script.js

## Github x vscode 共同開発マニュアル

### Step 1：リポジトリをクローン

`git clone https://github.com/チーム名/リポジトリ名.git`<br>
`cd リポジトリ名`

理由：GitHub上のコードを自分のPCにコピーする

<hr>

### Step 2：mainブランチを最新にする

`git checkout main`<br>
`git pull origin main`

理由：他のメンバーの更新を取り込んでおくことで、エラーやコンフリクトを防ぐ

<hr>

### Step 3：作業用ブランチを作成

`git checkout -b feature/login-page`

理由：
- mainを壊さずに作業できる
- 機能ごとに作業が分かれて管理しやすい

<hr>

### Step 4：VSCodeで開発（コーディング）
- ブランチを切ったら、VSCodeで自由に編集
- 他の人の作業に影響を与えない

<hr>

### Step 5：変更を保存（add + commit）

`git add .`<br>
`git commit -m "ログインページのUIを追加"`

理由：
- add：変更をステージに追加（記録対象にする）
- commit：スナップショットとして履歴に保存

<hr>

### Step 6：GitHubにpushする

`git push origin feature/login-page`

理由：GitHub上に自分のブランチをアップロードして、他の人が確認できるようにする

<hr>

### Step 7：Pull Request（PR）を作成
- GitHub上で該当ブランチを開く
- 「Compare & pull request」ボタンを押す
- タイトル・説明を書いてPRを作成
- レビュー → 問題なければマージ
理由：
- コードレビューを受ける
- 透明性のある開発ができる

<hr>

### Step 8：mainブランチを更新（他人のPRマージ後）

`git checkout main`
`git pull origin main`

理由：mainが更新されていたら自分のmainにも反映する必要がある

<hr>

### Step 9：次のブランチを切って作業

`git checkout -b feature/user-settings`

理由：作業単位ごとに分けるとPRや管理がしやすくなる

<hr>

## チーム開発のルール（基本方針）
- 作業ごとにブランチを分ける（mainを直接いじらない）
- 作業前・作業後は必ず git pull
- 完成したらPRを出してレビュー・マージ
- コンフリクトは落ち着いて対処（VSCodeで解決可能）


