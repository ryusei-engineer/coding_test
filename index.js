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

// D問題
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
//["177 645 96 546 114 66 33 957 770 674", ""]
const array = lines[0].split(" ");
for(let i = 0; i < array.length; i++){
    process.stdout.write(array[i] + ",");
}

// D問題
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
//Math.maxで最大値を取得
console.log(Math.max(...lines));

// D問題
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
for(let i = 1; i < lines[0]; i++){
    process.stdout.write("paiza ");
}
process.stdout.write("paiza");

//C問題
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

for(let i = 1; i <= lines[0]; i++){
    const array = lines[i].split(" ");
    //Number()で文字から数値に変換
    array[1] = Number(array[1]);
    array[1]++;
    console.log(array.join(" "));
}

// D問題
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

for(let i = 1; i <= lines[0]; i++){
    let num = lines[i];
    //toString()文字列に変換
    //数値の桁数を取得するには文字列に変換後.lengthで桁数を取得
    console.log(num.toString().length);
}

// D問題
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let word = lines[0];
//str.includes("a")でaがstrに含まれているか、trueかfalseを返す
if(lines[1].includes(word)){
    console.log("YES");
}else{
    console.log("NO");
}