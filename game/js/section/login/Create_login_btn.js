/**
 * Created by Administrator on 2016/7/8.
 */
function Create_login_btn(){
    //创建登录框按钮
    var Login_btn=new buttonManage('login_btn','270','50','265','70','images/button/login.png','images/button/login_2.png');
    var Register_btn=new buttonManage('register_btn','270','370','265','70','images/button/register.png','images/button/register_2.png');
    //创建注册框按钮
    var ensure_btn=new buttonManage('ensure','500','0','265','70','images/button/ensure.png','images/button/ensure_2.png');
    var cancel_btn=new buttonManage('cancel','500','320','265','70','images/button/cancel.png','images/button/cancel_2.png');
    var notice_ok2btn=new buttonManage('notice_ok2','110','90','128','64','images/button/windowensure.png','images/button/windowensure_2.png');
    //点击改变按钮样式
    Login_btn.btn_change();
    Register_btn.btn_change();
    ensure_btn.btn_change();
    cancel_btn.btn_change();
    notice_ok2btn.btn_change();
}