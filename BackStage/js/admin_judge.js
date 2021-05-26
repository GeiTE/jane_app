$(function(){
    if (window.localStorage.getItem("jump_data")) {
        var user_jsonstr = window.localStorage.getItem("jump_data");
        var user_data = JSON.parse(user_jsonstr);
        // console.log(user_data);
        if(user_data.user_auth != 1){
            window.location.replace("./lyear_pages_error.html");
        }else{
            $("#user_data>img").attr('alt',user_data.admin_username);
            $("#user_data #_username").html(user_data.admin_username);
        }
    }else{
        window.location.replace("./lyear_pages_error.html");
    }
})