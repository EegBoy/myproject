/**
 * Created by Administrator on 2016/6/28.
 */
var G={};
$(function(){
    //游戏音乐
    $('#Theme_music')[0].play();
    //1、登录注册
    G.login=new Login_register();
    //2、菜单
    G.Menu=new menu();
    //3、商店
    G.shop=new Shop();
    //4、我的车库
    G.carport=new carPort();
    //5、关卡
    G.checkPoint=new checkPoint();//选择关卡
    G.smallPoint=new smallPoint();//选择地图
    G.myEquip=new myEquip();//游戏前选择装备
    G.game=new Game();//开始游戏
    G.arr_BananaPeel=[];
});
