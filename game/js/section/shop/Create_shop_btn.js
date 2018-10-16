/**
 * Created by Administrator on 2016/7/9.
 */
function Create_shop_btn(){
    //创建我的车库、充值、返回按钮
    var carportBtn=new buttonManage('carport','490','130','192','66','images/button/garage.png','images/button/garage_2.png');
    var creditBtn=new buttonManage('credit','550','130','192','66','images/button/chongzhi.png','images/button/chongzhi_2.png');
    var back1=new buttonManage('back1','190','320','61','37','images/button/fanhui.png','images/button/fanhui_2.png');

    var shop_back=new buttonManage('shop_back','550','1150','150','100','images/button/back_1.png','images/button/back_1_2.png');
    var pre=new buttonManage('pre','560','850','68','30','images/Shop/pre.png','images/Shop/pre_2.png');
    var next=new buttonManage('next','560','950','68','30','images/Shop/nextpage.png','images/Shop/nexpage_2.png');


    //点击改变按钮样式
    carportBtn.btn_change();
    creditBtn.btn_change();
    shop_back.btn_change();
    pre.btn_change();
    next.btn_change();
    back1.btn_change();

    //创建我的车手、车子、轮子选项卡按钮
    var bikerOption=new buttonManage('bicker_option','100','460','102','102','images/Shop/item4.png','images/Shop/item1.png');
    var carOption=new buttonManage('car_option','250','460','102','102','images/Shop/item5.png','images/Shop/item2.png');
    var wheelOption=new buttonManage('wheel_option','400','460','102','102','images/Shop/item6.png','images/Shop/item3.png');
}