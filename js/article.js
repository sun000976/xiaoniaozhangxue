$(function(){
	(function(){
		if(getUrlParams("news")){
		var result = articleData[getUrlParams("news")]
		$(".title_big").html(result.data.typeTitle)
		$(".title_h2").html(result.data.typeEntitle)
		$(".con_h1_span").html(result.data.title)
		$(".auther_span1").html(result.data.updateAt)
		$(".auther_span2").html(result.data.updateByFullName)
		$(".image").attr("src",result.data.coverImg)
		$(".content").html(result.data.content)
		}
		function getUrlParams(name){
			var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)')
			//search  查找到的是？和后面的内容  substr(1) 取问号之后的内容  match匹配正则表达式
			var r=window.location.search.substr(1).match(reg)
			//r  是一个数组  “”  
			if(r!=null){
				console.log(r)
				return r[2]
			}else{
				return r="";
			}
		}
	})()
})
$(function(){
	var attr=["小鸟u掌学","文化中心","爱死你啦、MUA~","皇后娘娘驾到"]
	var btnfalse=false;
	$(".link_btn").click(function(){
		if(!btnfalse){
			btnfalse=true;
			var index=Math.floor(Math.random()*attr.length)
			// console.log(index)
			$(".xhts_box").html(attr[index])
			remove()
			// btnfalse=false;
		}
	}) 
	function remove(){
			$(".xhts_box").animate({"top":0,"opacity":1},600,"elasticOut",function(){
				$(this).animate({"left":-500,"opacity":0},600,"backIn",function(){
					$(".link_btn").addClass("checked")
				})
			})
	}
})
$(function(){
	$(".link_btn_wrap").hover(function(){
		$this=$(this);
		$this.addClass("animated tada")
	},function(){
		$this.removeClass("animated tada")
	})
})