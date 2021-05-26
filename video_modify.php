<?php
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

        if(!empty($_GET['video_id']) && !empty($_GET['video_title']) && !empty($_GET['video_sketch']) && !empty($_GET['video_url']) && !empty($_GET['video_jump_url']) && !empty($_GET['video_img_url']))
        $video_id = $_GET['video_id'];
        $video_title = $_GET['video_title'];
        $video_sketch = $_GET['video_sketch'];
        $video_url = $_GET['video_url'];
        $video_jump_url = $_GET['video_jump_url'];
        $video_img_url = $_GET['video_img_url'];
		$data = "UPDATE video_data SET video_title = '{$video_title}',video_sketch = '{$video_sketch}',video_url = '{$video_url}',video_jump_url = '{$video_jump_url}',video_img_url = '{$video_img_url}' WHERE video_data.video_id = {$video_id}";	
        opensql($data);	//连接数据库
        
        if($rc >= 0){
            echo 1;
        }
        else{
            echo 0;
        }
?>