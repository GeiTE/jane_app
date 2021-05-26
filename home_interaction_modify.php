<?php
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

        if(!empty($_GET['home_interaction_id']) && !empty($_GET['home_interaction_title']) && !empty($_GET['home_interaction_img_url']) && !empty($_GET['home_interaction_url']))
        $home_interaction_id = $_GET['home_interaction_id'];
        $home_interaction_title = $_GET['home_interaction_title'];
        $home_interaction_img_url = $_GET['home_interaction_img_url'];
        $home_interaction_url = $_GET['home_interaction_url'];
		$data = "UPDATE home_interaction SET home_interaction_title = '{$home_interaction_title}',home_interaction_img_url = '{$home_interaction_img_url}',home_interaction_url = '{$home_interaction_url}' WHERE home_interaction.home_interaction_id = {$home_interaction_id}";	
        opensql($data);	//连接数据库
        
        if($rc >= 0){
            echo 3;
        }
        else{
            echo 0;
        }
?>