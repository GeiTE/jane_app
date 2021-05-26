<?php
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

		$data = "SELECT * FROM gallery_data";	//查询数据表home_gallery中的所有内容;
        $array = array();
        opensql($data);	//连接数据库

		if($result->num_rows >0){	//如果数据大于0，表示查询到数据
			//输出数据
			while($row = $result->fetch_array()){
                $array[] = array(
                "gallery_id"=>$row["gallery_id"],
                "gallery_title"=>$row["gallery_title"],
                "gallery_img_url"=>$row["gallery_img_url"],
                "gallery_author"=>$row["gallery_author"],
                "gallery_hits"=>$row["gallery_hits"]
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