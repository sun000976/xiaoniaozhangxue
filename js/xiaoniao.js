//动画
$(function(){
	window.onload=function(){
		new anima();
	}
	function anima(){
		var animateTimer=null;
		animateTimer=setTimeout(function(){
			$(".welcome_content").animate({"top":"40%"},600)
			$(".welcome_content .welcome_animate").each(function(index,element){
				var $this=$(this);
				setTimeout(function(){
					$this.show().addClass("animated fadeInUp")
				},200*(index+1))
			})
			setTimeout(function(){
				$(".animate_wrap").slideUp(600,"easeOutStrong")
			},2500)
		},4000)
	}
     dbBtn=false;
    $(".animate_wrap").dblclick(function(){
		if(!dbBtn){
			dbBtn=true;//当为true的时候开始执行
			$(".animate_wrap").slideUp(600,"easeOutStrong")
			// dbBtn=false;
		}
	})	
})

$(function(){
	$(".nav_price").click(function(){
		index=$(".nav_price").index($(this))
		$(".nav_price").removeClass("now").eq(index).addClass("now")
	})
})
//设置宽高  每一屏
//滑轮滚轴事件
$(function(){
	$(".wrap_block,.main_wrap,.gaishu_block").css("height",($(window).height()-50)+"px")
    $(".gaishu_block").css("width",$(window).width()+"px")
	$(window).resize(function(){
		$(".wrap_block,.main_wrap,.gaishu_block").css("height",($(window).height()-50)+"px")
	    $(".gaishu_block").css("width",$(window).width()+"px")
	})
	var index=0;
	var delay=0;
	var timer=null;
	var run=false;   //当他为false的时候执行
	function slideDown(){
		/* if(delay<1){
			clearTimeout(timer)
			timer=setTimeout(function(){
				delay++
			},100)
		}else */
		if(!run){
			run=true;
			/* setTimeout(function(){
				run=false;
			},1000) */
			index++;
			if(index>$(".wrap_block").length-2){
				index=$(".wrap_block").length-2
			}
			slideGo()
		}
	}
	function slideUp(){
		/* if(delay<1){
			clearTimeout(timer)
			timer=setTimeout(function(){
				delay++
				},100)
		}else */
		if(!run){
			run=true;
			index--;
			/* setTimeout(function(){
				run=false;
			},1000) */
			if(index<0){
				index=0;
			}
			slideGo()
		}
		
	}
	function slideGo(){
		$(".wrap_slide").animate({'top':"-"+$(".wrap_block").height()*index+"px"},600,"easeBothStrong",function(){
			run=false;
			delay=0;
			console.log(index)
			if(index==0){
				 $(".nav_price").eq(index).addClass("now")
			}else if(index==4){
				$(".nav_price").removeClass("now").eq(index-1).addClass("now")
				$(".nav_price").eq(index).addClass("now")
			}else{
				$(".nav_price").removeClass("now").eq(index-1).addClass("now")
			}
		})
	}
	
	$(".nav_price h1").click(function(){
		var navIndex=$(this).parent().index(".nav_price")
	    // console.log(navIndex)
		if(navIndex==4){
			navIndex=3;
		}
		if(navIndex!=5){
			index=navIndex+1
			// console.log(index)
			slideGo()
		}
	})
	function mouseWheel(ev) {
		if (ev.wheelDelta) {
			if (ev.wheelDelta > 0) {
				slideUp()
			} else {
				slideDown()
			}
			console.log(ev.wheelDelta)
		} else {
			if (ev.detail > 0) {
				slideDown()
			} else {
				slideUp()
			}
			// console.log(ev.detail)
		}
	}
	window.onmousewheel=mouseWheel
	window.addEventListener("DOMMouseScroll", mouseWheel)
	$(".btn_bottom").click(function(){
		index=1;
		slideGo()
	})
	
	//哈希传值
	var mainHash=window.location.hash.substring(1)
	console.log(mainHash) // 传的是#和后面的值
	if(mainHash){
		if(mainHash==0||mainHash==1||mainHash==2||mainHash==3||mainHash==4){
			$(".animate_wrap").slideUp(0,function(){
				  dbBtn=true
			})
			index=mainHash;
			console.log(index)
			slideGo()
			// gaiMove()
			// window.location.hash="";
		}
	}
	
})
//概述
$(function(){
	$(".gaishu .btn_right").mouseenter(function(){
	$(this).removeClass("nohover")
     })
    var gaishuIndex=0;
	$(".gaishu .btn_right").click(function(){
		gaishuIndex++;
		if(gaishuIndex>2){
			gaishuIndex=2
			$(this).css("opacity",0.3)
		}else{
			gaiMove()
		}
	})
	$(".gaishu .btn_left").click(function(){
		gaishuIndex--
		if(gaishuIndex<0){
			gaishuIndex=0
			$(this).css("opacity",0.3)
		}else{
			gaiMove()
		}
	})
	function gaiMove(){
		$(".gaishu_slider").animate({"left":'-'+$(".gaishu_block").width()*gaishuIndex+'px'},600,function(){
			$(".gaishu .btn_right,.gaishu .btn_left").css("opacity",1)
		})
	}
})
//呼吸灯
$(function(){
	var denTimer=null;
	denTimer=setInterval(function(){
		$(".shan").fadeIn(1200,function(){
			$(".shan").delay(100).fadeOut(400)
		})
	},1900)
})
//小鸟掌云
$(function(){
	$(".slide_btn_right").click(function(){
		var $this=$(this)
		$(".move_btn.now").animate({"left":78},100,function(){
			$(".move_btn.now").removeClass("now")
			$this.find(".move_btn").animate({"left":0},400).addClass("now"),
			$(".slide").animate({"left":-910},600)
		})
	})
	$(".slide_btn_left").click(function(){
		var $this=$(this)
		$(".move_btn.now").animate({"left":-78},100,function(){
			$(".move_btn.now").removeClass("now")
			$this.find(".move_btn").animate({"left":0},400).addClass("now"),
			$(".slide").animate({"left":0},600)
		})
	})
})
