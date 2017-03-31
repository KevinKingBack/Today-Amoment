<?php



    header('Content-Type: application/json');

// 热门作者(推荐)
    $urlHot = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

    // 热门作者(全部)
    $urlAll = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


    $hotAuthor = file_get_contents($urlHot);
    $allAuthor = file_get_contents($urlAll);

    //先将json数据转成php数组,然后再将php数组处理成二位数组,再转成 json
    // {} => PHP对象，通过第2个参数true  也能是一个PHP数组
   // [{},{}] => PHP 数组

   $hotAuthor=json_decode($hotAuthor,true);
   $allAuthor=json_decode($allAuthor,true);

   //$result=array('rec'=>$hotAuthor, 'all'=>$allAuthor);
   $result = array('rec'=>$hotAuthor, 'all'=>$allAuthor);

   echo json_encode($result);


?>
















