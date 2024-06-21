<?php
// 小数切り捨て
echo floor(10 / 3);

echo "<br>";

echo floor(152 / 10) * 10;
// 150

echo "<br>";

echo floor(15.21 * 10) / 10;
// 152

echo "<br>";

$a = 1;
if(isset($a)){
  echo $a;
}else{
  echo "未定義です";
}
// 存在チェック

echo "<br>";

$b = 30;
if($b % 15 == 0){
  echo "FizzBazz";
}elseif($b % 5 == 0){
  echo "Bazz";
}elseif($b % 3 == 0){
  echo  "Fizz";
}else{
  echo $b ."<br>";
}

echo "<br>";


echo $b % 15 == 0 ? "FizzBazz" : ($b % 5 == 0 ? "Bazz" : ($b % 3 == 0 ? "Fizz" : $b));

echo "<br>";


$input_line = "hoge fuga";
    $str = explode(" ", $input_line);
    echo $str[0];
    echo "<br>";
    echo $str[1];
    echo "<br>";

?>