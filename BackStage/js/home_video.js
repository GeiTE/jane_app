$(function(){
    $.ajax({
        type : "POST",
        url : "../home_video_data.php",
        async:  true,   //异步
        success:function(data){
            var home_video_data = JSON.parse(data);
            home_video_add(home_video_data);
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });
    function home_video_add(data){
        for(var i=0; i<data.length;i++){
            $("#home_video_tbody").append(function(){
                return `<tr id="home_video_data_`+data[i].home_video_id+`">
                                <td id="home_pain_no`+data[i].home_video_id+`" class="home_pain_number">`+data[i].home_video_id+`</td>
                                <td>`+data[i].home_video_title+`</td>
                                <td>`+data[i].home_video_img_url+`</td>
                                <td>`+data[i].home_video_url+`</td>
                                <td><font class="text-success">`+data[i].home_video_hits+`</font></td>
                                <td class="modify">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-xs btn-default edit" title="编辑" data-toggle="modal" data-target="#exampleModal"><i class="mdi mdi-pencil"></i></button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                      <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="exampleModalLabel">编辑内容</h4>
                                          </div>
                                          <div class="modal-body">
                                            <form>
                                            <div class="form-group">
                                                <label class="control-label">视频序号</label>
                                                <input type="text" class="form-control home_video_id">
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">视频标题</label>
                                                <input type="text" class="form-control home_video_title" placeholder="请输入标题">
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label">视频图片地址</label>
                                                  <input type="text" class="form-control home_video_img_url" placeholder="视频图片地址...">
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">视频跳转地址</label>
                                                <input type="text" class="form-control home_video_url" placeholder="视频跳转地址...">
                                              </div>
                                            </form>
                                          </div>
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>

                                            <input type="submit" class="btn btn-primary home_video_submit" value="保存">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>
                                  </div>
                                </td>
                              </tr>`
            });
            $("#home_pain_no"+data[i].home_video_id).siblings(".modify").find(".home_video_submit").click(function(){
                if ($(this).parent().siblings(".modal-body").find(".home_video_title").val() != "" && $(this).parent().siblings(".modal-body").find(".home_video_img_url").val() != "" && $(this).parent().siblings(".modal-body").find(".home_video_url").val() != "") {
                    var home_video_id = $(this).parent().siblings(".modal-body").find(".home_video_id").val();
                    var home_video_title = $(this).parent().siblings(".modal-body").find(".home_video_title").val();
                    var home_video_img_url = $(this).parent().siblings(".modal-body").find(".home_video_img_url").val();
                    var home_video_url = $(this).parent().siblings(".modal-body").find(".home_video_url").val();
                    console.log(home_video_id,home_video_title,home_video_img_url,home_video_url);
                    $('#exampleModal').modal('hide').find("input,textarea").val("");    //清空修改表单内的内容
                    //将值传给后台
                    $.ajax({
                        type : "GET",
                        url : "../home_video_modify.php",
                        data : {'home_video_id':home_video_id,'home_video_title':home_video_title,'home_video_img_url':home_video_img_url,'home_video_url':home_video_url},
                        async:  true,   //异步
                        dataType : "json",
                        success:function(data){
                            if (data === 2) {
                                alert("修改成功");
                                parent.location.reload(); //刷新   
                            }
                        },
                        error:function(jqXHR,textStatus,errorThrown){
                            console.log('0');
                            console.log(jqXHR,textStatus,errorThrown);
                            alert("后台访问失败！");
                        }
                    });

                }else{
                    console.log(0);
                }
            });
        }
    }
})