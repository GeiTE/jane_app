<?php
    // header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

		$data = "SELECT * FROM home_gallery";	//查询数据表home_gallery中的所有内容;
        $array = array();
        opensql($data);	//连接数据库

		if($result->num_rows >0){	//如果数据大于0，表示查询到数据
			//输出数据
			while($row = $result->fetch_array()){
                $array[] = array(
                "home_gallery_id"=>$row["home_gallery_id"],
                "home_gallery_title"=>$row["home_gallery_title"],
                "home_gallery_sketch"=>$row["home_gallery_sketch"],
                "home_gallery_url"=>$row["home_gallery_url"],
                "home_gallery_hits"=>$row["home_gallery_hits"]
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