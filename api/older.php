<?php

  header('Content-Type: application/json');

 //获取请求的参数数据
  $day = $_GET['day'];

 //根据客户请求的参数,设置时间
 $older = date('Y-m-d',strtotime($day . 'day'));


 //地址
 $url = 'https://moment.douban.com/api/stream/date/' . $older . '?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


  echo file_get_contents($url);



  //echo  $older;





?>