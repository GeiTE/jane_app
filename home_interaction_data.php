<?php
    // header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
	include_once('openSQL.php');	//连接进入数据库接口

		$data = "SELECT * FROM home_interaction";	//查询数据表home_interaction中的所有内容;
        $array = array();
        opensql($data);	//连接数据库

		if($result->num_rows >0){	//如果数据大于0，表示查询到数据
			//输出数据
			while($row = $result->fetch_array()){
                $array[] = array(
                "home_interaction_id"=>$row["home_interaction_id"],
                "home_interaction_title"=>$row["home_interaction_title"],
                "home_interaction_img_url"=>$row["home_interaction_img_url"],
                "home_interaction_url"=>$row["home_interaction_url"],
                "home_interaction_hits"=>$row["home_interaction_hits"]
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