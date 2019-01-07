$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			$("#scrollTop_wrap").fadeIn()
		}else{
			$("#scrollTop_wrap").fadeOut()
		}
	})
	$(".scrollTop").click(function(){
		/* $(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
			console.log($(this))
			$("#scrollTop_wrap").css("opacity",1).fadeOut(0).css("bottom",200)
		}) */
		$("body,html").animate({"scrollTop":0},400)
	})
})
