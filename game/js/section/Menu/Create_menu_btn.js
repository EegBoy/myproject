/**
 * Created by Administrator on 2016/7/8.
 */
function Create_menu_btn(){
    //创建按钮(单人模式、双人模式、商店、关于、返回、退出、提示)
    var mode1=new buttonManage('mode1_option','50','100','252','126','images/Menu/playone.jpg','images/Menu/playone_2.jpg');
    var mode2=new buttonManage('mode2_option','200','100','252','126','images/Menu/playtwo.jpg','images/Menu/playtwo_2.jpg');
    var mode3=new buttonManage('shop_option','350','100','252','126','images/Menu/shop.jpg','images/Menu/shop_2.jpg');
    var mode4=new buttonManage('about_option','500','100','252','126','images/Menu/anenst.jpg','images/Menu/anenst_2.jpg');
    var back=new buttonManage('back','190','320','61','37','images/button/fanhui.png','images/button/fanhui_2.png');
    var exit=new buttonManage('exit','10','1290','60','60','images/button/close.png','images/button/close_2.png');
    var exit_cancel=new buttonManage('exit_cancel','100','10','128','64','images/button/windowcancel.png','images/button/windowcancel_2.png');
    var exit_ok=new buttonManage('exit_ok','100','160','128','64','images/button/windowensure.png','images/button/windowensure_2.png');
    var notice=new buttonManage('notice_ok','100','80','128','64','images/button/windowensure.png','images/button/windowensure_2.png');
    var judge_ok=new buttonManage('judge_ok','100','160','128','64','images/button/windowensure.png','images/button/windowensure_2.png');
    var judge_cancel=new buttonManage('judge_cancel','100','10','128','64','images/button/windowcancel.png','images/button/windowcancel_2.png');
//点击改变按钮颜色
    mode1.btn_change();
    mode2.btn_change();
    mode3.btn_change();
    mode4.btn_change();
    exit.btn_change();
    exit_ok.btn_change();
    exit_cancel.btn_change();
    notice.btn_change();
    judge_ok.btn_change();
    judge_cancel.btn_change();

}

