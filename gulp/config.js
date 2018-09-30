var path = require('path');

var dest = './dest'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src); // 後々、つかいます

module.exports = {
  src: src,
  dest: dest,

  // 各タスクごとの設定をこの下に追加していく

  //pug
  pug: {
    src: [
      src + '/**/!(_)*.pug'
    ],
    dest: dest,
    output: 'index.html',  // 出力ファイル名
    options: {pretty: true}
  },

  stylus: {
    src: [
      src + '/styl/**/!(_)*'
    ],
    dest: dest + '/css/',
    output: 'main.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },
}