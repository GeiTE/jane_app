$(function(){
    $.ajax({
        type : "POST",
        url : "../gallery_data.php",
        async:  true,   //异步
        success:function(data){
            var gallery_data = JSON.parse(data);
            gallery_add(gallery_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });
    function gallery_add(data){
        for(var i=0; i<data.length;i++){
            $("#gallery_tbody").append(function(){
                return `<tr id="gallery_data_`+data[i].gallery_id+`">
                                <td>
                                    <label class="lyear-checkbox checkbox-primary">
                                    <input type="checkbox" name="ids[]" value="1"><span></span>
                                    </label>
                                </td>
                                <td id="gallery_no`+data[i].gallery_id+`" class="gallery_number">`+data[i].gallery_id+`</td>
                                <td>`+data[i].gallery_title+`</td>
                                <td>`+data[i].gallery_img_url+`</td>
                                <td>`+data[i].gallery_author+`</td>
                                <td><font class="text-success">`+data[i].gallery_hits+`</font></td>
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
                                                <label class="control-label">画作序号</label>
                                                <input type="text" class="form-control gallery_id">
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">画作标题</label>
                                                <input type="text" class="form-control gallery_title" placeholder="请输入标题">
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">图片地址</label>
                                                <input type="text" class="form-control gallery_img_url" placeholder="图片地址...">
                                              </div>
                                              <div class="form-group">
                                              <label class="control-label">作者</label>
                                              <input type="text" class="form-control gallery_author" placeholder="作者名">
                                            </div>
                                            </form>
                                          </div>
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>

                                            <input type="submit" class="btn btn-primary gallery_submit" value="保存">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>
                                  </div>
                                </td>
                              </tr>`
            });
            $("#gallery_no"+data[i].gallery_id).siblings(".modify").find(".gallery_submit").click(function(){
                if ($(this).parent().siblings(".modal-body").find(".gallery_title").val() != "" && $(this).parent().siblings(".modal-body").find(".gallery_img_url").val() != "" && $(this).parent().siblings(".modal-body").find(".gallery_author").val() != "") {
                    var gallery_id = $(this).parent().siblings(".modal-body").find(".gallery_id").val();
                    var gallery_title = $(this).parent().siblings(".modal-body").find(".gallery_title").val();
                    var gallery_img_url = $(this).parent().siblings(".modal-body").find(".gallery_img_url").val();
                    var gallery_author = $(this).parent().siblings(".modal-body").find(".gallery_author").val();
                    console.log(gallery_id,gallery_title,gallery_img_url,gallery_author);
                    $('#exampleModal').modal('hide').find("input,textarea").val("");    //清空修改表单内的内容
                    //将值传给后台
                    $.ajax({
                        type : "GET",
                        url : "../gallery_modify.php",
                        data : {'gallery_id':gallery_id,'gallery_title':gallery_title,'gallery_img_url':gallery_img_url,'gallery_author':gallery_author},
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
    $every_page = 5;
    $item = $("")
})