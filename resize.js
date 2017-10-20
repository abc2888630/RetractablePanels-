function init(){

	var cPageY=0, 
		pPageY=0, 
		isMouseDown=false, 
		moveY=0, 
		target=10;

	$("#resize").mousedown(function(e){

		pPageY = e.pageY;
		isMouseDown = true;
		console.log("mousedown");
	});
	$(document).bind("click mouseup",function(e){
		if(isMouseDown){
			isMouseDown = false;
		}
	})
	.mousemove(function(e){
		//保存鼠标弹起时，当前位置的高度
		cPageY = e.pageY;
		//记录移动了的高度
		moveY = pPageY - cPageY;

		pPageY = cPageY
		target = $("#info").height() + moveY;
		console.log(target)
		if(isMouseDown){
			$("#info").css("height", target);
		}
	});
}

init();