<?php
    // header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

		$data = "SELECT * FROM video_data";	//查询数据表video_data中的所有内容;
        $array = array();
        opensql($data);	//连接数据库

		if($result->num_rows >0){	//如果数据大于0，表示查询到数据
			//输出数据
			while($row = $result->fetch_array()){
                $array[] = array(
                "video_id"=>$row["video_id"],
                "video_title"=>$row["video_title"],
                "video_sketch"=>$row["video_sketch"],
                "video_img_url"=>$row["video_img_url"],
                "video_jump_url"=>$row["video_jump_url"],
                "video_url"=>$row["video_url"],
                "video_hits"=>$row["video_hits"]
            );
			}
		}
		else{
			$array = array("user_auth"=>0);
			// echo "没有查询到内容！";
		}

		$str = json_encode($array);
        echo $str;

		mysqli_free_result($result);	//释放数据库
?>