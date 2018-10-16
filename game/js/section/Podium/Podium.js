/**
 * Created by Administrator on 2016/7/16.
 */
function Podium(){
    //背景拉伸平铺
    var height=$(document).height();
    $('.podium').css('height',height);
    $('.podium').css('backgroundSize','1366px  '+height+'px');
    //创建按钮
    var podium_continue=new buttonManage('podium_continue','560','1250','64','64','images/End/continue.png','images/End/continue_2.png');
    var podium_restart=new buttonManage('podium_restart','560','1050','64','64','images/End/restart.png','images/End/restart_2.png');
    podium_continue.btn_change();
    podium_restart.btn_change();
    //点击继续
    $('.podium_continue').click(function(){
        $('.small_point').show();//游戏界面显示
        $('.podium').hide();//颁奖界面消失
        $('#end_music')[0].play();
        $('#Theme_music')[0].play();
    });
    //点击重新开始
    $('.podium_restart').click(function(){
        $('#start_music')[0].play();
        $('#end_music')[0].play();
        $('.podium').hide();//颁奖界面消失
        $('.game').show();//显示游戏界面
        restartGame();//游戏参数初始化
        CountDown();//倒计时
    });

    //用户的金币
    db.transaction(function(context){
        var sql='select * from userInformation where state="1";';
        context.executeSql(sql,[],function(context,result){
            var nowGold=result.rows[0].gold;
            var getGold=$('.myGold').find('span').html();
            var userGold=eval(parseInt(nowGold)+parseInt(getGold));

            $('.MyCoins').find('span').html(userGold);
            db.transaction(function(context){
                var sql='update userInformation set gold=? where state="1";';
                context.executeSql(sql,[userGold],function(context,result){

                },function(context,error){
                    alert('error')
                })
            });
        },function(context,error){
            alert('error')
        })
    });


}