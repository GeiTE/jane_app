<?php
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

        if(!empty($_GET['home_video_id']) && !empty($_GET['home_video_title']) && !empty($_GET['home_video_img_url']) && !empty($_GET['home_video_url']))
        $home_video_id = $_GET['home_video_id'];
        $home_video_title = $_GET['home_video_title'];
        $home_video_img_url = $_GET['home_video_img_url'];
        $home_video_url = $_GET['home_video_url'];
		$data = "UPDATE home_video SET home_video_title = '{$home_video_title}',home_video_img_url = '{$home_video_img_url}',home_video_url = '{$home_video_url}' WHERE home_video.home_video_id = {$home_video_id}";	
        opensql($data);	//连接数据库
        
        if($rc >= 0){
            echo 2;
        }
        else{
            echo 0;
        }
?>