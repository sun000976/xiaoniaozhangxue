$(function(){
	$(".music span").click(function(){
		var index=$(this).index();
		console.log(index)
		$(this).html("")
		$(this).append("<audio src='music/sound0"+index+".mp3' autoplay></audio>")
	})
})