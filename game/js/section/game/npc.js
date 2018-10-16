/**
 * Created by Administrator on 2016/6/29.
 */
function npc(left,top,playerId,bicker_src,car_src,wheel_src,npcSpeed){
    //属性

    this.left=left;
    this.npcASpeed=1;
    this.dSpeed=0;
    this.maxSpeed=50;
    this.npcCurrSpeed=0;
    this.npcleft=parseInt(left);
    this.top=top;
    this.timeCount=0;
    this.IceDistance_X=0;
    this.IceDistance_Y=0;
    this.SandDistance_X=0;
    this.SandDistance_Y=0;
    this.WaterDistance_X=0;
    this.WaterDistance_Y=0;
    this.IceSpeed=0;
    this.rotationSpeed=1;
    this.BananaDistance_X=0;
    this.BananaDistance_Y=0;
    var self=this;
    //1、创建人物
    this.CreateNpc=function(){
        $('.game').append('<div class='+playerId+'><img class="bicker1" src='+bicker_src+'  alt=""/><img class="car1" src='+car_src+' alt=""/><img class="front1 wheel2" src='+wheel_src+' alt=""/><img class="after1 wheel2" src='+wheel_src+' alt=""/></div>')
        $('.'+playerId+'').css({
            position:'absolute',
            left:''+left+'px',
            top:''+top+'px'
        });
    };

    //2、npc移动
    this.npcMove=function(){
        if(self.npcCurrSpeed<npcSpeed){
            self.npcCurrSpeed+=self.npcASpeed
        }else if(self.npcCurrSpeed>npcSpeed){
            self.npcCurrSpeed-=self.npcASpeed
        }
        else{
            self.npcCurrSpeed=npcSpeed
        }
        self.npcleft+=self.npcCurrSpeed-Game.player1.currSpeed;

        $('.'+playerId+'').css({
            'left':''+self.npcleft+'px'//npc加载移动
        });
        $('.'+playerId+'').find('.wheel1').css({
            'animation-name':'wheel'//npc轮子css旋转
        });
        //轮子旋转
        if(self.npcCurrSpeed>0){
            self.rotationSpeed=1-self.npcCurrSpeed/60;
            $('.wheel2').css({
                'animation-name':'wheel',
                'animation-duration':''+self.rotationSpeed+'s'
            });
        }else{
            $('.wheel2').css({
                'animation-name':''
            });
        }

    };

    //3、npc碰撞玩家
    this.ShockPlayer=function(){
        var Distance_X1= Game.enemy1.npcleft-Game.player1.left;
        var Distance_X2= Game.enemy2.npcleft-Game.player1.left;
        var Distance_X3= Game.enemy3.npcleft-Game.player1.left;
        var Distance_Y1= Game.enemy1.top-Game.player1.top;
        var Distance_Y2= Game.enemy2.top-Game.player1.top;
        var Distance_Y3= Game.enemy3.top-Game.player1.top;
        if(-145<Distance_X1 && Distance_X1<-105 && -13<=Distance_Y1 &&Distance_Y1<=20){
            Game.enemy1.npcCurrSpeed=Game.player1.currSpeed-Game.enemy1.npcASpeed-10;
        }
        if(-145<Distance_X2 && Distance_X2<-105 && -13<=Distance_Y2 &&Distance_Y2<=20){
            Game.enemy2.npcCurrSpeed=Game.player1.currSpeed-Game.enemy2.npcASpeed-10;
        }
        if(-145<Distance_X3 && Distance_X3<-105 && -13<=Distance_Y3 &&Distance_Y3<=20){
            Game.enemy3.npcCurrSpeed=Game.player1.currSpeed-Game.enemy3.npcASpeed-10;
        }

    };

    /**
     * 4冰块加速
     * 判断车子与冰块位置
     * 位于识别范围内，车子当前速度加10
     *
     * */
    this.IceSpeedup=function(){
        self.IceSpeed=0;
        for(var j=0;j<Game.Ice.arr_Ice.length;j++){
            self.IceDistance_X=self.npcleft-Game.player1.mapleft-Game.Ice.arr_Ice[j].left+parseInt(self.left);
            self. IceDistance_Y=parseInt(Game.Ice.arr_Ice[j].top)-self.top;
            if(0<self.IceDistance_X && self.IceDistance_X<250&& 340<self.IceDistance_Y && self.IceDistance_Y<375){
                self.npcCurrSpeed+=3;//踩到加速带 让npc当前速度变成60
            }
        }
    };

    /**
     * 5、沙地减速
     * 判断车子与沙地位置
     * 位于识别范围内，车子当前速度变成5
     * 放开向前走的按键，速度当前速度变成0
     *
     * */
    this.SandDSpeed=function(){
        for(var j=0;j<Game.Sand.arr_Sand.length;j++){
            self.SandDistance_X=self.npcleft-Game.player1.mapleft-Game.Sand.arr_Sand[j].left+parseInt(self.left);
            self.SandDistance_Y=parseInt(Game.Sand.arr_Sand[j].top)-self.top;
            if(0<self.SandDistance_X &&  self.SandDistance_X<320 && 340< self.SandDistance_Y &&  self.SandDistance_Y<375){
                self.npcCurrSpeed=5;//踩到沙地，npc速度变成5
            }
        }

    };

    /**
     * 6、水洼减速
     * 判断车子与沙地位置
     * 位于识别范围内，车子当前速度变成5
     * 放开向前走的按键，速度当前速度变成0
     *
     * */
    this.WaterDSpeed=function(){
        for(var j=0;j<Game.Water.arr_Water.length;j++){
            self.WaterDistance_X=self.npcleft-Game.player1.mapleft-Game.Water.arr_Water[j].left+parseInt(self.left);
            self.WaterDistance_Y=parseInt(Game.Water.arr_Water[j].top)-self.top;
            if(0<self.WaterDistance_X && self.WaterDistance_X<320 && 340<self.WaterDistance_Y && self.WaterDistance_Y<375){
                self.npcCurrSpeed=5;//踩到沙地，npc速度变成5

            }
        }

    };

    /**
     * 7、吃香蕉
     * 判断玩家与金币位置
     * 位于识别范围内，让香蕉消失
     * 并与道具栏创建香蕉
     *
     * */
    this.eatBanana=function(){
        for(var i=0;i<Game.Banana.arr_Banana.length;i++){
            self.BananaDistance_X=self.npcleft-Game.player1.mapleft-Game.Banana.arr_Banana[0].left+parseInt(self.left);
            self.BananaDistance_Y=parseInt(Game.Banana.arr_Banana[i].top)-self.top;
            //香蕉碰撞
            if(-50<self.BananaDistance_X && self.BananaDistance_X<100 && 300< self.BananaDistance_Y&&  self.BananaDistance_Y<335){
                $('#coins_music')[0].play();//吃香蕉音乐
                //香蕉消失
                $('.banana'+i).css({
                    position:'absolute',
                    top:-80,
                    left:-80
                });
                Game.Banana.arr_Banana[i].top=-80;
                Game.Banana.arr_Banana[i].left=-80;
            }
        }
    };



}
