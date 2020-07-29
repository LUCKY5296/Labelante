"use strict";
// dotenvの読み込み
require("dotenv").config();

// handlerの読み込み
const getHandler = require("./handlers/getHandler");
const errorHandler = require("./handlers/errorHandler");

// express.jsの初期化
const express = require("express");
const app = express();

// ポート
const port = process.env.PORT;

// テンプレートエンジンをejsに設定する
// viewsフォルダ内の拡張子は.ejs
app.set("view engine", "ejs");

// 静的ファイルのルーティング
// publicフォルダに静的ファイルを設置する
app.use(express.static("public"));

// GETリクエストのルーティング
// index（ルート）
app.get("/", getHandler.index);

// new（"世界設定"新規作成ページ）
app.get("/new", getHandler.new);

// ポートを監視
app.listen(port, console.log(`Listening on ${port}...`));