/**
 * Created by Administrator on 2016/7/12.
 */
function Action(){
    clearInterval(G.timer);
    G.count=0;
    G.timer=null;
    run();
    //点击暂停
    $('.pause').click(function(){
        $('#start_music')[0].pause();//关闭游戏音乐
        $('#moto_music')[0].pause();
        $('.game_menu').show();
        clearInterval(G.timer)
    });
    //点击继续游戏
    $('.continue_game').click(function(){
        $('#start_music')[0].play();
        $('.game_menu').hide();
        clearInterval(G.timer);
        run();
    });
    //点击重新开始游戏
    $('.restart').click(function(){
        $('#start_music')[0].play();
        $('.game_menu').hide();
        $('.prop_banana').find('img').attr({
            'src':'',
            'class':'none'
        });
        restartGame();//游戏参数初始化
        CountDown();//倒计时

    });
    //点击返回菜单
    $('.return_menu').click(function(){
        $('#start_music')[0].pause();
        $('#Theme_music')[0].play();
        $('.menu').show();
        $('.game').hide();
        $('.game_menu').hide();
        clearInterval(G.timer);
    });
    //鼠标点击行走方向,改变按钮大小
    $('.mouse_control').find('img').mousedown(function(){
        $(this).animate({
            width:66,
            height:66,
            opacity:0.6
        },50)
    });
    $('.mouse_control').find('img').mouseup(function(){
        $(this).animate({
            width:64,
            height:64,
            opacity:1
        },50)
    });
    $('.mouse_control').click(function(){

    });

    function run(){


        var a=0;
        var b=0;
        var c=0;
        var rank_num;//排名

        /**
         *排名；
         * 玩家判断终点：mapleft位移到终点，玩家到达终点，并记录时间
         * npc判断终点：npc的位移加上地图的位移等于地图的长度时，npc到达终点，并记录时间
         * 排名：通过玩家到达终点时，判断npc位置，如果npc的位置小于初始位置，即玩家排名靠前
         *
         */
        G.timer=setInterval(function(){

            G.count+=0.05;//计时器
            $('.time').find('span').html(G.count.toFixed(1));
            //终点判断
            //①玩家
            if(Game.player1.mapleft>=-18000){
                Game.player1.move();//玩家移动
                Game.player1.timeCount=G.count;//记录玩家用时
                //判断排位
                if(Game.enemy1.npcleft<140){//140为npc初始位置
                    a=1
                }else{//rank_num=4-a-b-c
                    a=0
                }
                if(Game.enemy2.npcleft<140){
                    b=1
                }else{
                    b=0
                }
                if(Game.enemy3.npcleft<140){
                    c=1
                }else{
                    c=0
                }
            }else{
                $('#moto_music')[0].pause();//关闭摩托音乐
                $('#start_music')[0].pause();//关闭摩托音乐
                $('#end_music')[0].play();//关闭摩托音乐
                Game.player1.currSpeed=0;//让玩家当前速度为0，这样不影响npc
                $('.game').hide();//游戏界面消失
                Podium(); //颁奖台
                $('.podium').show();//颁奖界面出现
                $('.podium_rank').find('span').html($('.ranking').find('span').html());//颁奖界面排名
                $('.podium_time').find('span').html($('.time').find('span').html());//颁奖界面时间
                $('.getCoins').find('span').html($('.myGold').find('span').html());//颁奖界面获得的金币
                clearInterval(G.timer);
            }
            //②敌人1
            //判断敌人是否到终点
            if(Game.player1.mapleft-Game.enemy1.npcleft>=-18100){
                Game.enemy1.npcMove();//npc移动
                Game.enemy1.timeCount=G.count;//记录npc用时
            }else{
                //到了终点，若玩家还未到终点，就让npc跟着地图往回走
                Game.enemy1.npcleft= Game.enemy1.npcleft-Game.player1.currSpeed;
                $('.enemy1').css({
                    'left':''+Game.enemy1.npcleft+'px'//npc加载移动
                });
            }
            //③敌人2
            if(Game.player1.mapleft-Game.enemy2.npcleft>=-18150){
                Game.enemy2.npcMove();//npc移动
                Game.enemy2.timeCount=G.count;//记录npc用时
            }else{
                Game.enemy2.npcleft= Game.enemy2.npcleft-Game.player1.currSpeed;
                $('.enemy2').css({
                    'left':''+Game.enemy2.npcleft+'px'//npc加载移动
                });
            }
            //④敌人3
            if(Game.player1.mapleft-Game.enemy3.npcleft>=-18170){
                Game.enemy3.npcMove();//npc移动
                Game.enemy3.timeCount=G.count;//记npc家用时
            }else{
                Game.enemy3.npcleft= Game.enemy3.npcleft-Game.player1.currSpeed;
                $('.enemy3').css({
                    'left':''+Game.enemy3.npcleft+'px'//npc加载移动
                });
            }
            rank_num=4-a-b-c;
            $('.ranking').find('span').html(rank_num);
            Game.coins.coinsAction();//金币旋转
            Game.player1.eatCoins();//吃金币
            Game.player1.eatBanana();//吃香蕉
            Game.player1.stepBanana();//丢香蕉
            Game.player1.IceSpeedup();//冰块加速
            Game.player1.SandDSpeed();//沙子减速
            Game.player1.WaterDSpeed();//水潭减速
            Game.player1.ShockNpc();//选手与npc碰撞

            Game.enemy1.ShockPlayer();//npc1与选手碰撞
            Game.enemy2.ShockPlayer();//npc2与选手碰撞
            Game.enemy3.ShockPlayer();//npc3与选手碰撞

            Game.enemy1.IceSpeedup();//npc1加速带
            Game.enemy2.IceSpeedup();//npc2加速带
            Game.enemy3.IceSpeedup();//npc3加速带

            Game.enemy1.SandDSpeed();//npc1沙地减速
            Game.enemy2.SandDSpeed();//npc2沙地减速
            Game.enemy3.SandDSpeed();//npc3沙地减速

            Game.enemy1.WaterDSpeed();//npc1水潭减速
            Game.enemy2.WaterDSpeed();//npc2水潭减速
            Game.enemy3.WaterDSpeed();//npc3水潭减速

            Game.enemy1.eatBanana();//吃香蕉
            Game.enemy2.eatBanana();//吃香蕉
            Game.enemy3.eatBanana();//吃香蕉
        },50);
    }
}

