$(function() {
    var arr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
    var index = 0;
    $('.btn_left').on('click', function() { btn_left(); });
    $('.btn_right').on('click', function() { btn_right(); });

    function btn_left() {
        arr.unshift(arr[7]);
        arr.pop();
        $('.Cooldog_content li').each(function(i, e) { $(e).removeClass().addClass(arr[i]); });
        $(".qrqdbtn em").text($(".p4 .qizi").attr("alt"));
        index--;
        if (index < 0) { index = 7; }
    }

    function btn_right() {
        arr.push(arr[0]);
        arr.shift();
        $('.Cooldog_content li').each(function(i, e) { $(e).removeClass().addClass(arr[i]); });
        $(".qrqdbtn em").text($(".p4 .qizi").attr("alt"));
        index++;
        if (index > 7) { index = 0; }
    }
    $('.Cooldog_content, .picshow').bind('touchstart',function(e){
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
    $('.Cooldog_content, .picshow').bind('touchend',function(e){
    	$(".wyjcbtn, .picshow").hide();
    	$(".qrqdbtn").show();
	    //获取滑动屏幕时的X,Y
	    endX = e.originalEvent.changedTouches[0].pageX,
	    endY = e.originalEvent.changedTouches[0].pageY;
	    //获取滑动距离
	    distanceX = endX-startX;
	    distanceY = endY-startY;
	    //判断滑动方向
	    if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
	    	btn_right();
	        //console.log('往右滑动');
	    }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
	    	btn_left();
	        //console.log('往左滑动');
	    }
	});
})