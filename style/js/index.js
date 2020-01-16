$(function() {
	// 头部下拉列表
	$("header ul li:has(ul)").hover(function() {
		$(this).children("ul").slideDown("1500");
	}, function() {
		$(this).children("ul").slideUp("1500");
	});

	//选项卡
	$('.tab_menu li').mouseover(function() {
		var _index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.tab_content>div').eq(_index).show().siblings().hide();
	});
	
	//您的需求:网页加载动画
	$(window).scroll(function() { //获得滚动条距离顶部的高度
		if ($(window).scrollTop() > 3700 && $(window).scrollTop()<4500){
			$("#demandL").addClass("item-01");
			$("#demandR").addClass("item-02");
		}
	});
})
