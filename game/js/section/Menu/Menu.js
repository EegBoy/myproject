/**
 * Created by Administrator on 2016/7/6.
 */
function menu(){
    //背景拉伸平铺
    var height=$(document).height();
    $('.menu').css('height',height);
    $('.menu').css('backgroundSize','1366px  '+height+'px');
    //菜单页面创建按钮
    Create_menu_btn();
    //按钮点击事件
    MenuBtn_action();

}