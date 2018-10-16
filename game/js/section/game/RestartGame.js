/**
 * Created by Administrator on 2016/7/17.
 */
function restartGame(){
    //var nLeft1=Game.enemy1.left;
    //var nLeft2=Game.enemy2.left;
    //var nLeft3=Game.enemy3.left;
    //玩家参数初始化
    $('.player1').css({
        position:'absolute',
        left:120,
        top:0
    });
    $('.wheel1').css({
        'animation-name':''
    });
    Game.player1.handledSpeed=0;
    Game.player1.top=0;
    Game.player1.aSpeed=0.5;
    Game.player1.maxSpeed=70;
    Game.player1.currSpeed=0;
    Game.player1.mapleft=-200;
    Game.player1.timeCount=0;
    //npc初始化
    $('.enemy1').css({
        position:'absolute',
        left:100,
        top:-40
    });
    $('.enemy2').css({
        position:'absolute',
        left:150,
        top:45
    });
    $('.enemy3').css({
        position:'absolute',
        left:170,
        top:90
    });
    Game.enemy1.left=100;
    Game.enemy1.npcASpeed=1;
    Game.enemy1.dSpeed=0;
    Game.enemy1.maxSpeed=50;
    Game.enemy1.npcCurrSpeed=0;
    Game.enemy1.npcleft=100;
    Game.enemy1.top=-40;
    Game.enemy1.timeCount=0;
    Game.enemy1.IceSpeed=0;



    Game.enemy2.left=150;
    Game.enemy2.npcASpeed=1;
    Game.enemy2.dSpeed=0;
    Game.enemy2.maxSpeed=50;
    Game.enemy2.npcCurrSpeed=0;
    Game.enemy2.npcleft=150;
    Game.enemy2.top=45;
    Game.enemy2.timeCount=0;
    Game.enemy2.IceSpeed=0;



    Game.enemy3.left=170;
    Game.enemy3.npcASpeed=1;
    Game.enemy3.dSpeed=0;
    Game.enemy3.maxSpeed=50;
    Game.enemy3.npcCurrSpeed=0;
    Game.enemy3.npcleft=170;
    Game.enemy3.top=90;
    Game.enemy3.timeCount=0;
    Game.enemy3.IceSpeed=0;

    //红绿灯初始化
    $('.light1').hide();
    $('.light2').hide();
    $('.light3').hide();
    $('.light4').hide();
    //地图位置初始化
    $('.map').css({
        position:'absolute',
        left:-200,
        top:0
    });
    //时间初始化

    G.count=0;
    $('.time').find('span').html(0);
    //金币初始化
    Game.coins=new CoinsCanvas();
    $('.myGold').find('span').html(0);
    //排位初始化
    $('.ranking').find('span').html(4);
    //香蕉初始化
    Game.Banana=new Banana();//创建香蕉

}


