$(function(){
	$(".banner_wrap .btn_middle span").click(function(){
		var index=$(this).index();
		$(".btn_middle span").removeClass("now")
		$(this).addClass("now")
		$(".banner_one").hide();
		$(".banner_one").eq(index).show();
	})
	var index=0;
  $(".banner_change .prev").click(function(){
		index--;
		if(index<0){
			index=$(".banner_one").size()-1;
		}
		console.log(index)
		$(".banner_one").hide();
		$(".banner_one").eq(index).show();
		$(".btn_middle span").removeClass("now")
		$(".btn_middle span").eq(index).addClass("now")
  })
  $(".banner_change .next").click(function(){
  	index++;
  	if(index>$(".banner_one").size()-1){
  		index=0;
  	}
  	$(".banner_one").hide();
  	$(".banner_one").eq(index).show();
	$(".btn_middle span").removeClass("now")
	$(".btn_middle span").eq(index).addClass("now")
  })
})


//产品板块
/* $(function(){
	$(".now_linebtn").click(function(){
		$(".now_linebtn").removeClass("now")
		$(this).addClass("now")
	})
}) */
/* $(function(){
	var $prev=$(".content_wrap").find(".prev")
	var $next=$(".content_wrap").find(".next")
    var $btnow=$(".content_wrap").find(".now_linebtn")
	var $img=$(".content_wrap").find(".left_con")
	var $tex=$(".content_wrap").find(".right_con")
	var $now_con=$(".content_wrap").find(".now_con_one")
	var index=0;
	function animate(ele,className){
		//清除所有动画
		ele.eq(index).removeClass("animated fadeInLeft fadeInRight").addClass("animated").addClass(className)
	}
	function cpcon(){
		$btnow.removeClass("now")
		$btnow.eq(index).addClass("now")
	}
	$next.click(function(){
		index++;
		if(index>$now_con.length-1){
			index=0
		}
		cpcon()
		animate($img,"fadeInRight")
		animate($tex,"fadeInRight")
		$now_con.hide().eq(index).show()
	})
	$prev.click(function(){
		index--;
		if(index<0){
			index=$now_con.length-1
		}
		cpcon()
		animate($img,"fadeInLeft")
		animate($tex,"fadeInLeft")
		$now_con.hide().eq(index).show()
	})
})
 */

//产品板块
$(function(){
	var $prev=$(".content_wrap").find(".prev")
	var $next=$(".content_wrap").find(".next")
	var $btnow=$(".content_wrap").find(".now_linebtn")
	var $now_con=$(".content_wrap").find(".now_con_one")
	var index=0;
	$next.click(function(){
		index++
		if(index>$now_con.length-1){
			index=0
		}
		doFade("fadeInRight")
	})
	$prev.click(function(){
		index--
		if(index<0){
			index=$now_con.length-1
		}
		doFade("fadeInLeft")
	})
	$btnow.click(function(){
		var nowindex=$btnow.index($(this))
		console.log(index)
		console.log(nowindex)
		var action=(index>nowindex)?"fadeInLeft":"fadeInRight";
		index=nowindex
		doFade(action)
	})
	function doFade(action){
		$btnow.removeClass("now").eq(index).addClass("now")
		$now_con.fadeOut(0).eq(index).fadeIn(200)
		$now_con.eq(index).find("h1,p,img").attr("class","").addClass("animated "+action)
	}
})
// 业务板块
$(function(){
	$(".yewu_btn").click(function(){
		index=$(".yewu_btn").index($(this));
		aside()
	})
	$(".centerimg").click(function(){
		index=$(".centerimg").index($(this));
		console.log(index)
		aside()
	})
	function aside(){
		if($(".yewu_btn").eq(index).hasClass("zhankai")){
			$(".bottom_slide").eq(index).stop().slideUp(300);
			$(".yewu_btn").removeClass("zhankai")
		}else{
			$(".bottom_slide").stop().slideUp(300).delay(300).eq(index).stop().slideDown(300);
			$(".yewu_btn").removeClass("zhankai").eq(index).addClass("zhankai")
		}
	}
})
$(function(){
	$(".centerimg").add(".yewu_btn").hover(function(){
		$(this).addClass("animated tada")
	},function(){
		$(this).removeClass("animated tada")
	})
})
//团队介绍
$(function(){
	$(".team_box").find(".team_header").hover(function(){
		$(this).find("a").stop().fadeIn(400)
	},function(){
		$(this).find("a").stop().fadeOut(400)
	})
	var $move_team=$(".move_team")
	var $move_box=$(".move_box")
	var $prev=$(".team_wrap").find(".prev")
	var $next=$(".team_wrap").find(".next")
	var $btnspan=$(".team_wrap .btn_middle").find("span")
	var timer = null;
	var nextTimer = null;
	var prevTimer = null;
	var nowIndex = 0;
	$prev.click(function(){
		clearTimeout(prevTimer)
		var isRun=false;
		if(!isRun){
			isRun=true;
			prevTimer=setTimeout(function(){
				doPrev()
				isRun=false;
			},200)
		}
	})
	$next.click(function(){
		clearInterval(nextTimer)
		var isRun=false;
		if(!isRun){
			isRun=true;
			nextTimer=setTimeout(function(){
				doNext()
				isRun=false
			},200)
		}
	})
	$move_team.hover(function(){
		clearInterval(timer)
	},autoMove)
	$next.hover(function(){
		clearInterval(timer)
	},autoMove)
	$prev.hover(function(){
		clearInterval(timer)
	},autoMove)
	function doPrev(){
		$move_box.find(".team_one:last").insertBefore($move_box.find(".team_one:first"))
	   $move_box.animate({"left":"-1100px"},0)
		  $move_box.animate({"left":"0px"},1000,"backOut")
			/* $move_box.animate({"left":-1100},0,function(){
				$move_box.animate({"left":400},500)
				$move_box.animate({"left":0},1000)
			}) */
		nowIndex--;
		if(nowIndex<0){
			nowIndex=$btnspan.length-1;
		}
		$btnspan.removeClass("now").eq(nowIndex).addClass("now")
	}
	function doNext(){
		$move_box.animate({"left":"-1100px"},1000,"backIn",function(){
			$move_box.find(".team_one:first").insertAfter($move_box.find(".team_one:last"))
			$move_box.animate({"left":"0px"},0)
		})
		nowIndex++;
		if(nowIndex>$btnspan.length-1){
			nowIndex=0;
		}
		$btnspan.removeClass("now").eq(nowIndex).addClass("now")
	}
	function autoMove(){
		clearInterval(timer)
		timer=setInterval(function(){
			doNext()
		},5500)
	}
	autoMove()
 })
