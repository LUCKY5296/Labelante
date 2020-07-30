"use strict"
// postリクエストのhandlerをまとめたmodule
// moduleの読み込み
const fs = require("fs");
const errorHandler = require("./errorHandler");

// /register/:type（登録フォームが飛んでくるところ）
exports.register = (req, res) => {
  // type一覧
  // world: 世界
  // area: 地域
  // history: 歴史
  // people: 人物
  // culture: 文化
  // item: アイテム
  // library: 辞書
  // （以下、実装未定）
  // user: ユーザー

  let type = req.params.type;
  switch (type) {
    // world（世界）を登録する
    case "world":
      if (!req.body.name) {

      }
      let world = {
        "name": req.body.name,
        "discription": req.body.discription
      };
      fs.mkdir(`worlds/${world.name}`, errorHandler.mkdir(`worlds/${world.name}`));
      break;

    default:
      break;
  }
}
