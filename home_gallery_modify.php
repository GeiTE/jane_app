<?php
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

        if(!empty($_GET['home_gallery_id']) && !empty($_GET['home_gallery_title']) && !empty($_GET['home_gallery_sketch']) && !empty($_GET['home_gallery_url']))
        $home_gallery_id = $_GET['home_gallery_id'];
        $home_gallery_title = $_GET['home_gallery_title'];
        $home_gallery_sketch = $_GET['home_gallery_sketch'];
        $home_gallery_url = $_GET['home_gallery_url'];
		$data = "UPDATE home_gallery SET home_gallery_title = '{$home_gallery_title}',home_gallery_sketch = '{$home_gallery_sketch}',home_gallery_url = '{$home_gallery_url}' WHERE home_gallery.home_gallery_id = {$home_gallery_id}";	
        opensql($data);	//连接数据库
        
        if($rc >= 0){
            echo 1;
        }
        else{
            echo 0;
        }
?>