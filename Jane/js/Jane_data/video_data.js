$(function(){
    $.ajax({
        type : "POST",
        url : "../video_data.php",
        async:  true,   //异步
        success:function(data){
            var video_data = JSON.parse(data);
            console.log(video_data);
            video_add(video_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });

    function video_add(data){
        console.log(1);
        for(var i=0; i<data.length;i++){
            console.log(`
            <div class="col-sm-2 col-md-3">
                    <div class="thumbnail">
                        <a class="lightbox" href="`+data[i].video_jump_url+`" name="`+data[i].video_url+`">
                            <img src="./images/video_img/`+data[i].video_img_url+`" alt="`+data[i].video_id
                            +`">
                        </a>
                        <div class="caption">
                            <h3>`+data[i].video_title+`</h3>
                            <p>`+data[i].video_sketch+`</p>
                        </div>
                    </div>
                </div>
            `)
            $("#chorma_video").append(function(){
                return`
                <div class="col-sm-2 col-md-3">
		    			<div class="thumbnail">
		                    <a class="lightbox" href="`+data[i].video_jump_url+`" name="`+data[i].video_url+`">
		                        <img src="./images/gallery_img/`+data[i].video_img_url+`" alt="`+data[i].video_id
                                +`">
		                    </a>
		                    <div class="caption">
		                        <h3>`+data[i].video_title+`</h3>
		                        <p>`+data[i].video_sketch+`</p>
		                    </div>
		                </div>
		    		</div>
                `
            })
        }
    };
})