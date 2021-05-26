$(function(){
    $.ajax({
        type : "POST",
        url : "../video_data.php",
        async:  true,   //异步
        success:function(data){
            var video_data = JSON.parse(data);
            video_add(video_data);
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });
    function video_add(data){
        for(var i=0; i<data.length;i++){
            $("#video_tbody").append(function(){
                return `<tr id="video_data_`+data[i].video_id+`">
                                <td>
                                    <label class="lyear-checkbox checkbox-primary">
                                    <input type="checkbox" name="ids[]" value="1"><span></span>
                                    </label>
                                </td>
                                <td id="video_no`+data[i].video_id+`" class="video_number">`+data[i].video_id+`</td>
                                <td>`+data[i].video_title+`</td>
                                <td>`+data[i].video_sketch+`</td>
                                <td>`+data[i].video_img_url+`</td>
                                <td>`+data[i].video_jump_url+`</td>
                                <td>`+data[i].video_url+`</td>
                                <td><font class="text-success">`+data[i].video_hits+`</font></td>
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
                                                <input type="text" class="form-control video_id">
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">视频标题</label>
                                                <input type="text" class="form-control video_title" placeholder="请输入标题">
                                              </div>
                                              <div class-"form-group">
                                                <label class="control-label">视频简介</label>
                                                <textarea class="form-control video_sketch" rows="6" placeholder="内容..."></textarea>
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">视频图片地址</label>
                                                <input type="text" class="form-control video_img_url" placeholder="图片地址...">
                                              </div>
                                              <div class="form-group">
                                              <label class="control-label">视频跳转地址</label>
                                              <input type="text" class="form-control video_jump_url" placeholder="视频跳转地址...">
                                            </div>
                                            <div class="form-group">
                                              <label class="control-label">视频地址</label>
                                              <input type="text" class="form-control video_url" placeholder="视频地址...">
                                            </div>
                                            </form>
                                          </div>
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>

                                            <input type="submit" class="btn btn-primary video_submit" value="保存">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>
                                  </div>
                                </td>
                              </tr>`
            });
            $("#video_no"+data[i].video_id).siblings(".modify").find(".video_submit").click(function(){
                if ($(this).parent().siblings(".modal-body").find(".video_title").val() != "" && $(this).parent().siblings(".modal-body").find(".video_img_url").val() != "" && $(this).parent().siblings(".modal-body").find(".video_sketch").val() != "" && $(this).parent().siblings(".modal-body").find(".video_jump_url").val() != "" && $(this).parent().siblings(".modal-body").find(".video_url").val() != "") {
                    var video_id = $(this).parent().siblings(".modal-body").find(".video_id").val();
                    var video_title = $(this).parent().siblings(".modal-body").find(".video_title").val();
                    var video_img_url = $(this).parent().siblings(".modal-body").find(".video_img_url").val();
                    var video_sketch = $(this).parent().siblings(".modal-body").find(".video_sketch").val();
                    var video_jump_url = $(this).parent().siblings(".modal-body").find(".video_jump_url").val();
                    var video_url = $(this).parent().siblings(".modal-body").find(".video_url").val();
                    console.log(video_id,video_title,video_sketch,video_img_url,video_jump_url,video_url);
                    $('#exampleModal').modal('hide').find("input,textarea").val("");    //清空修改表单内的内容
                    //将值传给后台
                    $.ajax({
                        type : "GET",
                        url : "../video_modify.php",
                        data : {'video_id':video_id,'video_title':video_title,'video_sketch':video_sketch,'video_img_url':video_img_url,'video_jump_url':video_jump_url,'video_url':video_url},
                        async:  true,   //异步
                        dataType : "json",
                        success:function(data){
                          if (data === 1) {
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