//X와 햄버거 상호 변경
$(document).ready(function(){
	/*웹페이지 열었을 때*/
	$("#header_x").show();
	$("#header_hamburger").hide();

	/*x을 클릭했을 때 hamburger를 보여줌*/
	$("#header_x").click(function(){
		$("#header_x").hide();
		$(".hamburger_content").hide();
		$("#header_hamburger").show();
	});

	/*hamburger를 클릭했을 때 x을 보여줌*/
	$("#header_hamburger").click(function(){
		$("#header_x").show();
		$(".hamburger_content").show();
		$("#header_hamburger").hide();
	});
});
// 로그인 기능 구현...!
// 하고싶다
// 언제쯤 할 수 있을지
// SQL도 시도했지만 모르겠다