"use strict"
// ルーティングのエラーを扱うmodule
// フォルダ作成時のエラーハンドリング
exports.mkdir = (dirPath, res) => {
  // 戻り値となる関数
  let rFunction = (err) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log(`Create a new folder at here: ${dirPath}`);
  };
  return rFunction;
};

exports.NOT_FOUND = (req, res) => {
  res.status(404);
  res.render("error/Not_Found");
};

exports.INTERNAL_SERVER_ERROR = (error, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
};