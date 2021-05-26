
$(function(){
	if (IsMobile() == true) {
		$("#nav>ul>li>a:eq(3)").addClass("mobile_disabled");
	}else{
		$("#nav>ul>li>a:eq(3)").removeClass("mobile_disabled");
	}
	$("#back_top").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
	move();
	function move(){
		$("#menu").click(function(){
			// $(".nav").toggleClass("block");
			$(".nav").slideToggle(300);
		});
	};
	$(window).resize(function(){
		if (IsMobile() == true) {
			$("#nav>ul>li>a:eq(3)").addClass("mobile_disabled");
		}else{
			$("#nav>ul>li>a:eq(3)").removeClass("mobile_disabled");
		}
		var $win_width =  $(window).width();
		if($win_width >= 766){
			$(".nav").show(300);
		}
	});
	function IsMobile() {
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i) ? true : false;
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i) ? true : false;
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i) ? true : false;
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS()
				|| isMobile.Windows());
			}
		};

		return isMobile.any(); //是移动设备
	}
})