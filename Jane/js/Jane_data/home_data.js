$(function(){

    $.ajax({
        type : "POST",
        url : "../home_gallery_data.php",
        async:  true,   //异步
        success:function(data){
            var gallery_data = JSON.parse(data);
            home_gallery_add(gallery_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });

    function home_gallery_add(data){
        for(var i=0; i<data.length;i++){
            $("#gallery_box>div>.tz-gallery>.row").append(function(){
                return`
                <div class="col-sm-6 col-md-4 col-lg-3">
								<div class="thumbnail" title="`+data[i].home_gallery_title+`">
									<a class="lightbox" href="`+data[i].home_gallery_url+`" data-caption="`+data[i].home_gallery_sketch+`">
										<img src="`+data[i].home_gallery_url+`" alt="`+data[i].home_gallery_id+`">
									</a>
									<div class="caption">
										<h3>`+data[i].home_gallery_title+`</h3>
										<p class="home_gallery_sketch">`+data[i].home_gallery_sketch+`</p>
									</div>
								</div>
							</div>
                `
            })
        }
    };

    $.ajax({
        type : "POST",
        url : "../home_video_data.php",
        async:  true,   //异步
        success:function(data){
            var video_data = JSON.parse(data);
            home_video_add(video_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });

    function home_video_add(data){
        for(var i=0; i<data.length;i++){
            $("#video_box>div>.tz-video>.row").append(function(){
                return`
                <div class="col-sm-3 col-md-3">
								<div class="thumbnail">
									<a class="lightbox" href="`+data[i].home_video_url+`" name="`+data[i].home_video_title+`">
										<img src="`+data[i].home_video_img_url+`" alt="`+data[i].home_video_id+`">
									</a>
								</div>
							</div>
                `
            })
        }
    };

    $.ajax({
        type : "POST",
        url : "../home_interaction_data.php",
        async:  true,   //异步
        success:function(data){
            var interaction_data = JSON.parse(data);
            home_interaction_add(interaction_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });

    function home_interaction_add(data){
        for(var i=0; i<data.length;i++){
            $("#artist_box>div>.tz-canvas>.row").append(function(){
                return`
                <div class="col-sm-6 col-md-2">
								<div class="thumbnail">
									<a href="`+data[i].home_interaction_url+`" class="lighbox" name="`+data[i].home_interaction_title+`">
										<img src="`+data[i].home_interaction_img_url+`" alt="">
									</a>
								</div>
							</div>
                `
            })
        }
    };
})