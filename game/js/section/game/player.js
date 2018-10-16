/**
 * Created by Administrator on 2016/6/29.
 */
function player(left,top,playerId){
    //属性
    this.topDir=top;
    this.handledSpeed=0;
    this.left=left;
    this.speed=0;
    this.aSpeed=0.5;
    this.dSpeed=0;
    this.maxSpeed=70;
    this.currSpeed=0;
    this.mapleft=-200;
    this.top=0;
    this.timeCount=0;
    this.IceDistance_X=0;
    this.IceDistance_Y=0;
    this.SandDistance_X=0;
    this.SandDistance_Y=0;
    this.WaterDistance_X=0;
    this.WaterDistance_Y=0;
    this.CoinsDistance_X=0;
    this.CoinsDistance_Y=0;
    this.BananaDistance_X=0;
    this.BananaDistance_Y=0;
    var self=this;
    var bicker_src;
    var car_src;
    var wheel_src;
    var handle;
    //1、创建人物
    this.CreatePlayer=function(){
        //获取当前玩家信息
        db.transaction(function(context){
            var sql='select * from userInformation where state="1";';
            context.executeSql(sql,[],function(context,result){
                $('.game').append('<div class='+playerId+'><img class="bicker1" src='+result.rows[0].bicker_src+'  alt=""/><img class="car1" src='+result.rows[0].car_src+' alt=""/><img class="front1 wheel1" src='+result.rows[0].wheel_src+' alt=""/><img class="after1 wheel1" src='+result.rows[0].wheel_src+' alt=""/></div>')
                $('.'+playerId+'').css({
                    position:'absolute',
                    left:''+left+'px',
                    top:''+top+'px'
                });
               bicker_src=result.rows[0].bicker_src;
               car_src=result.rows[0].car_src;
               wheel_src=result.rows[0].wheel_src;
            },function(context,error){
                alert('error')
            })
        });
        //获取当前用户车手的信息
        db.transaction(function(context){
            var sql='select * from goodInformation where good_src=?;';
            context.executeSql(sql,[bicker_src],function(context,result){
               handle=result.rows[0].good_attribute;
                if( handle=='A'){
                    handle=5.5
                }
                if( handle=='A-'){
                    handle=5
                }
                if( handle=='B+'){
                    handle=4.5
                }
                if( handle=='B'){
                    handle=4
                }
                if( handle=='B-'){
                    handle=3.5
                }
                if( handle=='C+'){
                    handle=3
                }
                if( handle=='C'){
                    handle=2.5
                }
                if( handle=='C-'){
                    handle=2
                }
            },function(context,error){
                alert('error')
            })
        });
        //获取当前用户车子的信息
        db.transaction(function(context){
            var sql='select * from goodInformation where good_src=?;';
            context.executeSql(sql,[car_src],function(context,result){
                self.speed=result.rows[0].good_attribute;
                if(self.speed=='150km/h'){
                    self.speed=25
                }
                if(self.speed=='160km/h'){
                    self.speed=30
                }
                if(self.speed=='170km/h'){
                    self.speed=35
                }
                if(self.speed=='180km/h'){
                    self.speed=40
                }
            },function(context,error){
                alert('error')
            })
        });
        //获取当前用户轮子的信息
        db.transaction(function(context){
            var sql='select * from goodInformation where good_src=?;';
            context.executeSql(sql,[wheel_src],function(context,result){
                self.aSpeed=result.rows[0].good_attribute;
                if(self.aSpeed=='12s'){
                    self.aSpeed=2
                }
                if(self.aSpeed=='13s'){
                    self.aSpeed=1.5
                }
                if(self.aSpeed=='14s'){
                    self.aSpeed=1
                }
                if(self.aSpeed=='15s'){
                    self.aSpeed=0.5
                }
            },function(context,error){
                alert('error')
            })
        });
    };
    /**
     * 2、玩家移动
     * 通过按键的status状态判断玩家行为事件
     * 按下向右，若当前速度小于玩家的速度，加速，并改变轮子旋转速度
     * 按向上、向下，改变top值
     * **/
    this.move=function(){
        if(keyStatus.right){
            //加速
            if(self.currSpeed<self.speed-self.dSpeed){
                self.currSpeed+=self.aSpeed;
            }
            else if(self.currSpeed>self.speed-self.dSpeed){
                self.currSpeed-=self.aSpeed
            }
            else{
                self.currSpeed=self.speed-self.dSpeed;
            }
            self.mapleft=self.mapleft-self.currSpeed;
            $('.map').css('left',''+ self.mapleft+'px');
        }

        //    //减速
        if(!keyStatus.right){

            if(self.currSpeed>0){
                self.currSpeed=self.currSpeed-self.aSpeed;
            }else{
                self.currSpeed=0
            }
            self.mapleft=self.mapleft-self.currSpeed;
            $('.map').css('left',''+self.mapleft+'px');

        }
        //刹车
        if(keyStatus.left){
            if(self.currSpeed>0){
                self.currSpeed=self.currSpeed-self.aSpeed-self.aSpeed;
            }
            self.mapleft=self.mapleft-self.currSpeed;
            $('.map').css('left',''+self.mapleft+'px');
        }

        //玩家轮子旋转
        if(self.currSpeed>0){
            $('#moto_music')[0].play();//开起音乐
            var rotationSpeed=1-self.currSpeed/80;
            $('.wheel1').css({
                'animation-name':'wheel',
                'animation-duration':''+rotationSpeed+'s'
            });
        }else{
            $('#moto_music')[0].pause();//开起音乐
            $('.wheel1').css({
                'animation-name':''
            });
        }

        //按下向，向上移动
        if( keyStatus.up){

            if(self.top>=-50 ){//边界检测
                self.top=self.top-handle-self.handledSpeed;
            }
            $('.player1').css('top',''+self.top+'px');
        }
        //向下移动
        if( keyStatus.down){//边界检测

            if(self.top<=100){
                self.top=self.top+handle-self.handledSpeed;
            }
            $('.player1').css('top',''+self.top+'px')
        }
    };

    /**
     * 3、人物碰撞
     * 前后碰撞，判断条件：top跟left
     * 上下碰撞，判断条件：top以及车子长度
     * **/
    this.ShockNpc=function(){
        var Distance_X1= self.left-Game.enemy1.npcleft;
        var Distance_X2= self.left-Game.enemy2.npcleft;
        var Distance_X3= self.left-Game.enemy3.npcleft;
        //前后碰撞    注：-10为附加碰撞效果
        if(-80>Distance_X1&&Distance_X1>-150&&-55<=self.top&&self.top<=-25){
            if(!keyStatus.right){
                self.currSpeed=0
            }else{
                self.currSpeed=Game.enemy1.npcCurrSpeed-self.aSpeed-10;
            }
        }
        if(-80>Distance_X2&&Distance_X2>-150&&25<=self.top&&self.top<=65){
            if(!keyStatus.right){
                self.currSpeed=0
            }else{
                self.currSpeed=Game.enemy2.npcCurrSpeed-self.aSpeed-10;
            }
        }
        if(-80>Distance_X3&&Distance_X3>-150&&70<=self.top&&self.top<=110){
            if(!keyStatus.right){
                self.currSpeed=0
            }else{
                self.currSpeed=Game.enemy3.npcCurrSpeed-self.aSpeed-10;
            }
        }
        //上下碰撞 注：加减5为附加碰撞效果
        if(110>Distance_X1&&Distance_X1>-125&&self.top>=-55&&self.top<=-15){
            self.handledSpeed=-handle-handle
        }else if(110>Distance_X2&&Distance_X2>-125&&self.top>=65&&self.top<=75){
            self.handledSpeed=-handle-handle
        }else if(110>Distance_X2&&Distance_X2>-125&&self.top<=25&&self.top>=15){
            self.handledSpeed=handle+handle
        }else if(110>Distance_X3&&Distance_X3>-125&&self.top>=65&&self.top<=110){
            self.handledSpeed=handle+handle
        }else{
            self.handledSpeed=0
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
            self.IceDistance_X=self.mapleft+parseInt(Game.Ice.arr_Ice[j].left)-self.left;
            self. IceDistance_Y=parseInt(Game.Ice.arr_Ice[j].top)-self.top;
            if(-150<self.IceDistance_X && self.IceDistance_X<150&& 340<self.IceDistance_Y && self.IceDistance_Y<375){

                self.currSpeed+=3;//踩到加速带 让npc当前速度变成60
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
            self.SandDistance_X=self.mapleft+parseInt(Game.Sand.arr_Sand[j].left)-self.left;
            self.SandDistance_Y=parseInt(Game.Sand.arr_Sand[j].top)-self.top;
            if(-150<self.SandDistance_X && self.SandDistance_X<150 && 340< self.SandDistance_Y &&  self.SandDistance_Y<375){
                self.currSpeed=5;//踩到沙地，速度变成5
                if(!keyStatus.right) {
                    self.currSpeed = 0;//放开向前走的按键，速度当前速度变成0
                }
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
            self.WaterDistance_X=self.mapleft+parseInt(Game.Water.arr_Water[j].left)-self.left;
            self.WaterDistance_Y=parseInt(Game.Water.arr_Water[j].top)-self.top;
            if(-150<self.WaterDistance_X && self.WaterDistance_X<150 && 340< self.WaterDistance_Y &&  self.WaterDistance_Y<375){
                self.currSpeed=5;//踩到水洼，速度变成5
                if(!keyStatus.right){
                    self.currSpeed = 0;//放开向前走的按键，速度当前速度变成0
                }
            }
        }

    };
    /**
     * 7、吃金币
     * 判断玩家与金币位置
     * 位于识别范围内，让金币消失
     * 并记录金币分数
     *
     * */
    this.eatCoins=function(){
        for(var i=0;i<Game.coins.coinsArr.length;i++){
            self.CoinsDistance_X=self.mapleft+parseInt(Game.coins.coinsArr[i].left)-self.left;//200是因为地图开始就往左移动了200
            self.CoinsDistance_Y=parseInt(Game.coins.coinsArr[i].top)-self.top;//310是因为轮子一开始位置为0，相当于金币310位置
            //金币碰撞
            if(50<self.CoinsDistance_X && self.CoinsDistance_X<180 && 305<self.CoinsDistance_Y && self.CoinsDistance_Y<335){
                $('#coins_music')[0].play();
                Game.coins.goldCount=Game.coins.goldCount+100;
                $('.myGold').find('span').html(Game.coins.goldCount);
                Game.coins.oCtx.clearRect(Game.coins.left,Game.coins.top,60,60);
                Game.coins.coinsArr[i].top=-80;
                Game.coins.coinsArr[i].left=-80;
            }

        }
    };
    /**
     * 8、吃香蕉
     * 判断玩家与金币位置
     * 位于识别范围内，让香蕉消失
     * 并与道具栏创建香蕉
     *
     * */
    this.eatBanana=function(){
        for(var i=0;i<Game.Banana.arr_Banana.length;i++){

            self.BananaDistance_X=self.mapleft+parseInt(Game.Banana.arr_Banana[i].left)-self.left;
            self.BananaDistance_Y=parseInt(Game.Banana.arr_Banana[i].top)-self.top;
            //香蕉碰撞
            if(50<self.BananaDistance_X && self.BananaDistance_X<180 && 300< self.BananaDistance_Y&&  self.BananaDistance_Y<335){
                $('#coins_music')[0].play();
                //香蕉消失
                $('.banana'+i).css({
                    position:'absolute',
                    top:-80,
                    left:-80
                });
                Game.Banana.arr_Banana[i].top=-80;
                Game.Banana.arr_Banana[i].left=-80;
                //玩家道具栏创建香蕉皮
                $('.prop_banana').find('img').attr({
                    'src':'images/Game/banana_2.png',
                    'class':'have'
                })
            }
        }
    };
    //丢香蕉
    this.stepBanana=function(){
        var flag=0;
        var propName= $('.prop_banana').find('img')[0].className;
        if(propName=='have'){
            //flag++;

            if(keyStatus.space){
                $('#coins_music')[0].play();
                $('.prop_banana').find('img').attr({
                    'src':'',
                    'class':'none'
                });
                //地图创建香蕉皮

                var peelDir=[-self.mapleft,self.top+320];
                console.log(peelDir);
                G.arr_BananaPeel.push(peelDir);
                for(var i=0;i<G.arr_BananaPeel.length;i++){
                    $('.banana_peel').append('<img class="banana_peel'+i+'" src="images/Game/banana_2.png">');
                    $('.banana_peel'+i).css({
                        position:'absolute',
                        left:parseInt(G.arr_BananaPeel[i][0]),
                        top:parseInt(G.arr_BananaPeel[i][1])
                    })
                }
            }

        }
    };




}
