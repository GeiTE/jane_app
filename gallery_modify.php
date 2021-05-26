<?php
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

        if(!empty($_GET['gallery_id']) && !empty($_GET['gallery_title']) && !empty($_GET['gallery_img_url']) && !empty($_GET['gallery_author']))
        $gallery_id = $_GET['gallery_id'];
        $gallery_title = $_GET['gallery_title'];
        $gallery_img_url = $_GET['gallery_img_url'];
        $gallery_author = $_GET['gallery_author'];
		$data = "UPDATE gallery_data SET gallery_title = '{$gallery_title}',gallery_img_url = '{$gallery_img_url}',gallery_author = '{$gallery_author}' WHERE gallery_data.gallery_id = {$gallery_id}";	
        opensql($data);	//连接数据库
        
        if($rc >= 0){
            echo 1;
        }
        else{
            echo 0;
        }
?>