$(function(){

	$("#login_submit").click(function(){
		submit();
	});

	function submit(){
		var admin_username = $("#admin_username").val();
		var admin_password = $("#admin_password").val();
		if (admin_username != "" && admin_password != "") {
			console.log(admin_username,admin_password);
			$.ajax({
				type : "POST",
				url : "../backstage_logon.php",
				data : {'admin_username':admin_username,'admin_password':admin_password},
				dataType : "json",
				success:function(data){
					// console.log(data);
					// var jump_data = data;
					// console.log(jump_data);
					// console.log(jump_data.user_auth);
					jump_or_not(data);
				},
				error:function(jqXHR,textStatus,errorThrown){
					console.log('0');
					console.log(jqXHR,textStatus,errorThrown);
					alert("后台访问失败！");
				}
			})
		}
	};

	function jump_or_not(jump_data){
		if(jump_data.user_auth == 1){
			window.localStorage.setItem("jump_data",JSON.stringify(jump_data));
			window.location.replace("./index.html");
		}else{
			alert("输入的账号密码有错误，请重新输入！");
		}
	};
})