$(function(){
    $.ajax({
        type : "POST",
        url : "../gallery_data.php",
        async:  true,   //异步
        success:function(data){
            var gallery_data = JSON.parse(data);
            console.log(gallery_data);
            gallery_add(gallery_data);    
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('0');
            console.log(jqXHR,textStatus,errorThrown);
            alert("后台访问失败！");
        }
    });

    function gallery_add(data){
        console.log(1);
        for(var i=0; i<data.length;i++){
            console.log(`<img src="./images/gallery_img/`+data[i].gallery_img_url+`" alt="`+data[i].gallery_title+`" data-largesrc="./images/gallery_img/`+data[i].gallery_img_url+`">`)
            $("#chorma_gallery").append(function(){
                return`
                <img src="./images/gallery_img/`+data[i].gallery_img_url+`" alt="`+data[i].gallery_title+`" data-largesrc="./images/gallery_img/`+data[i].gallery_img_url+`">
                `
            })
        }
    };
})