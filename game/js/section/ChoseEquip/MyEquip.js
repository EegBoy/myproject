/**
 * Created by Administrator on 2016/7/11.
 */
function myEquip(){
    //背景拉伸平铺
    var height=$(document).height();
    $('.myEquip').css('height',height);
    $('.myEquip').css('backgroundSize','1366px  '+height+'px');
    $('.myEquip').css('backgroundImage','url("images/Bg/garagebg2.png")');
    ////创建按钮
    var myEquip_back=new buttonManage('myEquip_back','550','50','157','78','images/Garage/back.png','images/Garage/back_2.png');
    var myEquip_start=new buttonManage('myEquip_start','550','1150','157','78','images/Garage/start.png','images/Garage/start_2.png');

    myEquip_start.btn_change();
    myEquip_back.btn_change();
    //点击返回地图
    $('.myEquip_back').click(function(){
        $('.myEquip').hide();//隐藏我的装备界面
        $('.main_checkpoint').show();//回到地图界面
    });
    //点击开始
    $('.myEquip_start').click(function(){
        $('.myEquip').hide();//隐藏我的装备界面
        $('.game').show();//显示游戏界面
        $('.player1').html('');//玩家清空
        Game.player1.CreatePlayer();//重新创建玩家
        $('#start_music')[0].play();
        $('#Theme_music')[0].pause();
        restartGame();//游戏参数初始化
        CountDown(); //倒计时
    })
}