$(function(){
	$(".nav_piece").click(function(){
		$(".nav_piece").removeClass("now")
		$(this).addClass("now")
	})
	$(".has_down").hover(function(){
		$(this).find("ul").css("display","block")
	},function(){
		$(this).find("ul").stop().slideUp(200);
	})
})
$(function(){
	$(".con_h1 .pen").click(function(){
		if($(".con_h1").width()==100){
			$(".con_h1").animate({"width":"800px","backgroundPositionX":"0"},1300,"easeOutStrong")
		}else{
			$(".con_h1").animate({"width":"100px","backgroundPositionX":"-1000px"},1300,"easeOutStrong")
		}
	})
})
$(function(){
	$(".has_down:first").hover(function(){
		$(this).find("ul").addClass("animate1")
	},function(){
		$(this).find("ul").removeClass("animate1")
	})
	$(".has_down").not(".has_down:first").hover(function(){
		$(this).find("ul").addClass("animate2")
	},function(){
		$(this).find("ul").removeClass("animate2")
	})
})
