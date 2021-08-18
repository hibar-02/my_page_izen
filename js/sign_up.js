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

    //유효성 검사
    function cheak_value() {
        var form = document.user_info;

    if(!form.userName.value) {
        alert('이름을 입력하세요.');
        return false;
    }
    if(!form.ID.value == "") {
        alert('아이디를 입력하세요.');
        return false;
    }
    if(form.id_dupl.value != "id_chk"){
        alert("아이디 중복체크를 해주세요.");
        return false;
    }
    if(!form.PW.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    if(form.password.value.length < 10 || form.pwd.value.length > 13) {
        alert('비밀번호는 10 ~ 13자 사이로 입력하세요.');
        form.pwd.focus() ;
        return false;
    }
    if(form.PW_cheak.value != form.PW.value) {
        alert('비밀번호를 동일하게 입력해주세요.');
        return false;
    }
    if(!form.userPhone.value){
        alert("전화번호를 입력하세요.");
        return false;
    }
    if(!form.mail_id.value) {
        alert('e-mail을 입력하세요.');
        return false;
    }
}
