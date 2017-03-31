<?php


 header('Contet-Type: application.json');
 // time() 是php获取时间的api,获取到的是毫秒数(时间戳)
 //date(format) 可以根据设定的规格格式化时间 Y 年  m 月  d 日 H 小时 m 分 s 秒

 //$today=date('Y-m-d',time());

 //我们使用前端传参的方式,其实后端来设定时间是最快的

  $today=$_GET['today'];
  //地址
  $url = 'https://moment.douban.com/api/stream/date/'. $today .'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

  echo file_get_contents($url);





?>