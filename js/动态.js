$(function(){
	$("#con_h1").animate({"width":"100px"},0,function(){
		$("#con_h1").animate({"width":"1041px"},1500)
	})
	$("#con_h1 .pen").click(function(){
		if($("#con_h1").width()==100){
			$("#con_h1").animate({"width":"1100px","backgroundPositionX":"0"},0,"easeOutStrong")
		}else{
			$("#con_h1").animate({"width":"100px","backgroundPositionX":"-1000px"},1300,"easeOutStrong")
		}
	})
})

$(function(){
	(function(){
	//global  避免变量被污染  一般情况下不用也可以
	var global=global||{};
	global.loadStart=0;//控制加载次数
	loadList()
	function loadList(){
		//判断是不是第一次加载
		if(global.loadStart==0){
			//清空里面的内容重新加载
			$(".list_cont").html("")
		}
			//请求数据   每一页
			var result=listData["listData0"+global.loadStart]
			//每一页的内容
			var list=result.data.list;
			//判断数据是否存在
			if(!list||!list.length){
				$("#list_con").html("你请求的数据不存在")
			}else{
				for (var i = 0; i < list.length; i++) {
					var modelHtml=$(".model_html").html();
					modelHtml=modelHtml.replace("arcticleId",list[i].sysId)
					modelHtml=modelHtml.replace("img1/list_img01.jpg",list[i].coverImg)
					modelHtml=modelHtml.replace("$title$",list[i].title)
					modelHtml=modelHtml.replace("$data$",list[i].creatAt)
					modelHtml=modelHtml.replace("$text$",list[i].describe)
				   $("#list_con").append(modelHtml)
				}
			}
		    global.loadStart++;
			global.count=Math.ceil(result.data.count/result.data.pageSize)
			if(global.loadStart>=global.count){
				$(".list_btn").fadeTo(200,0)
				$(".li_img").attr("src",'images/list_gomore_bg_nomore.jpg')
			}
	}
	var leng=0;
	$(".list_btn").on("click",function(){
		loadList()
		leng++
		if(leng==2){
			$(".list_btn").off("click")
		}
	})
	
	
	
	
})()
})

