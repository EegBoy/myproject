/**
 * Created by Administrator on 2016/7/4.
 */
function Shop(){
    //背景拉伸平铺
    var height=$(document).height();
    $('.shop').css('height',height);
    $('.shop').css('backgroundSize','1366px  '+height+'px');
    //1、商店创建按钮
    Create_shop_btn();
    //2、商店按钮事件
    ShopBtn_action();
}


