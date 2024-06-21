// 入力値取得
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(lines);


// D問題
onst array = [];
for(let i = 1; i <= 10;i++ ){
    array.push(i);
}

//join()で配列を文字列にして" "半角空白でつなぐ
console.log(array.join(" "));


// C問題
//入力値取得
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const array = [];
// split()で文字列を切り出す
array.push(lines[0].split(" "));
console.log(array.join(","));