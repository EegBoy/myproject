/**
 * Created by Administrator on 2016/7/2.
 */
function Login_register(){
    //页面背景拉伸
    $(function(){
        var height=$(document).height();
        $('.login_register').css('height',height);
        $('.login_register').css('backgroundSize','1366px  '+height+'px');
    });
    Create_login_btn();

//**************************点击按钮页面跳转*********************
    action();


//**************************jq表单验证*************************
    verification();
}