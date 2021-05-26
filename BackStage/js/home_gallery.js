$(function(){
    $.ajax({
        type : "POST",
        url : "../home_gallery_data.php",
        async:  true,   //异步
        // data : {'admin_username':admin_username,'admin_password':admin_password},
        // dataType : "json",
        success:function(data){
            // console.log(data);
            var home_gallery_data = JSON.parse(data);
            home_gallery_add(home_gallery_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });
    function home_gallery_add(data){
        for(var i=0; i<data.length;i++){
            $("#home_gallery_tbody").append(function(){
                return `<tr id="home_gallery_data_`+data[i].home_gallery_id+`">
                                <td id="home_pain_no`+data[i].home_gallery_id+`" class="home_pain_number">`+data[i].home_gallery_id+`</td>
                                <td>`+data[i].home_gallery_title+`</td>
                                <td>`+data[i].home_gallery_sketch+`</td>
                                <td>`+data[i].home_gallery_url+`</td>
                                <td><font class="text-success">`+data[i].home_gallery_hits+`</font></td>
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
                                                <input type="text" class="form-control home_pain_id">
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">画作标题</label>
                                                <input type="text" class="form-control home_pain_title" placeholder="请输入对应的标题">
                                              </div>
                                              <div class="form-group">
                                                  <label class="control-label">画作简述</label>
                                                 <textarea class="form-control home_pain_sketch" rows="6" placeholder="内容..."></textarea>
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label">图片地址</label>
                                                <input type="text" class="form-control home_pain_url" placeholder="图片地址...">
                                              </div>
                                            </form>
                                          </div>
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>

                                            <input type="submit" class="btn btn-primary home_pain_submit" value="保存">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>
                                  </div>
                                </td>
                              </tr>`
            });
            $("#home_pain_no"+data[i].home_gallery_id).siblings(".modify").find(".home_pain_submit").click(function(){
                if ($(this).parent().siblings(".modal-body").find(".home_pain_title").val() != "" && $(this).parent().siblings(".modal-body").find(".home_pain_sketch").val() != "" && $(this).parent().siblings(".modal-body").find(".home_pain_url").val() != "") {
                    var home_gallery_id = $(this).parent().siblings(".modal-body").find(".home_pain_id").val();
                    var home_gallery_title = $(this).parent().siblings(".modal-body").find(".home_pain_title").val();
                    var home_gallery_sketch = $(this).parent().siblings(".modal-body").find(".home_pain_sketch").val();
                    var home_gallery_url = $(this).parent().siblings(".modal-body").find(".home_pain_url").val();
                    console.log(home_gallery_id,home_gallery_title,home_gallery_sketch,home_gallery_url);
                    $('#exampleModal').modal('hide').find("input,textarea").val("");    //清空修改表单内的内容
                    //将值传给后台
                    $.ajax({
                        type : "GET",
                        url : "../home_gallery_modify.php",
                        data : {'home_gallery_id':home_gallery_id,'home_gallery_title':home_gallery_title,'home_gallery_sketch':home_gallery_sketch,'home_gallery_url':home_gallery_url},
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