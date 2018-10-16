/**
 * Created by Administrator on 2016/6/29.
 */

function Game(){
    //鼠标控制按钮
    CreateGameBtn();
    //创建玩家
    Game.player1=new player('120','0','player1');
    Game.player1.CreatePlayer();
    //创建npc
    Game.enemy1=new  npc('100','-40','enemy1','images/Shop/c1.png','images/Shop/m1.png','images/Shop/w1.png',25);
    Game.enemy1.CreateNpc();

    Game.enemy2=new  npc('150','45','enemy2','images/Shop/c2.png','images/Shop/m2.png','images/Shop/w2.png',25);
    Game.enemy2.CreateNpc();

    Game. enemy3=new  npc('170','90','enemy3','images/Shop/c3.png','images/Shop/m3.png','images/Shop/w3.png',25);
    Game.enemy3.CreateNpc();

    //创建金币
    Game.coins=new CoinsCanvas();
    //创建冰块加速带
    Game.Ice=new Ice();
    //创建沙地
    Game.Sand=new Sand();
    //创建水洼
    Game.Water=new Water();
    //创建香蕉
    Game.Banana=new Banana();
}