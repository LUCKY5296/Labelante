"use strict"
// getリクエストのhandlerをまとめたmodule
// ejsの変数リストとその値。render時に添付する
const ejsData = {
  "websiteName": process.env.WEBSITE_NAME
};

// /（ルート）
exports.index = (req, res) => {
  res.render("index", ejsData);
};

// /new（"世界"新規作成ページ）
exports.new = (req, res) => {
  res.render("new", ejsData);
};