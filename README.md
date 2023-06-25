手元ですぐに TypeScript + Node.js の環境を作りたかった。

サーバーのときはホットリロードさせたいので`npm run ts-node-dev`

プレイグラウンド的に色々スクリプト実行したいときもサクッと起動したい。`npm run ts-node`

1. make empty directory.
2. run VS Code, open the directory
3. run scripts below.

`npm init -y`
`npm install typescript --save-dev`
`npm install @types/node --save-dev`
`npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs`

`npm install ts-node --save-dev`

https://typescript-jp.gitbook.io/deep-dive/nodejs

add `"ts-node": "ts-node src/index.ts"` to package.json#scripts.

import エイリアス使えるように、tsconfig.json に baseUrl, paths を追加。
npm i -D tsconfig-paths

modify package.json#scripts#ts-node into `"ts-node -r tsconfig-paths/register src/index.ts"`

npm i -D ts-node-dev

npm i express
npm i -D @types/express

# テスト

`npm i -D jest ts-jest @types/jest`
`npx ts-jest config:init`
