/**
 * Created by Administrator on 2016/7/13.
 */
function CoinsCanvas(){
    //金币位置
    var coinsDir1=new coinsDir('2800','410');
    var coinsDir2=new coinsDir('2880','410');
    var coinsDir3=new coinsDir('2960','410');
    var coinsDir4=new coinsDir('3040','410');
    var coinsDir5=new coinsDir('3120','410');
    var coinsDir6=new coinsDir('3200','410');

    var coinsDir7=new coinsDir('4800','360');
    var coinsDir8=new coinsDir('4880','360');
    var coinsDir9=new coinsDir('4960','360');
    var coinsDir10=new coinsDir('5040','360');
    var coinsDir11=new coinsDir('5120','360');
    var coinsDir12=new coinsDir('5200','360');

    var coinsDir13=new coinsDir('8800','320');
    var coinsDir14=new coinsDir('8880','320');
    var coinsDir15=new coinsDir('8960','320');
    var coinsDir16=new coinsDir('9040','320');
    var coinsDir17=new coinsDir('9120','320');
    var coinsDir18=new coinsDir('9200','320');

    var coinsDir19=new coinsDir('13800','360');
    var coinsDir20=new coinsDir('13880','360');
    var coinsDir21=new coinsDir('13960','360');
    var coinsDir22=new coinsDir('14040','360');
    var coinsDir23=new coinsDir('14120','360');
    var coinsDir24=new coinsDir('14200','360');

    var coinsDir25=new coinsDir('16800','320');
    var coinsDir26=new coinsDir('16880','320');
    var coinsDir27=new coinsDir('16960','320');
    var coinsDir28=new coinsDir('17040','320');
    var coinsDir29=new coinsDir('17120','320');
    var coinsDir30=new coinsDir('17200','320');

   this.coinsArr=[coinsDir1,coinsDir2,coinsDir3,coinsDir4,coinsDir5,coinsDir6,coinsDir7,coinsDir8,coinsDir9,coinsDir10,coinsDir11,coinsDir12,coinsDir13,coinsDir14,coinsDir15,coinsDir16,coinsDir17,coinsDir18,coinsDir19,coinsDir20,coinsDir21,coinsDir22,coinsDir23,coinsDir24,coinsDir25,coinsDir26,coinsDir27,coinsDir28,coinsDir29,coinsDir30];

    this.left=800;
    this.top=300;
    this.goldCount=0;//吃金币分数
    var self=this;
    $('.myGold').find('span').html(self.goldCount);//金币分数显示
    //画布
    var oC=document.getElementById('canvas');
    this.oCtx=oC.getContext('2d');
    var img_coins=new Image();
    img_coins.src='images/Shop/Coin.png';
    var x=0;
    var y=0;
    this.coinsAction=function(){
        //x，y画图截点位置
        x += 60;
        if (x == 600 && y == 0){
            x = 0;
            y = 60;
        }
        if (x == 600 && y == 60) {
            x = 0;
            y = 0;
        }
        var CoinsDistance_X;//与金币x轴距离
        var CoinsDistance_Y;//与金币Y轴距离
        self.oCtx.clearRect(0,0,25600,484);
        //画金币
        for(var i=0;i<self.coinsArr.length;i++){
            self.oCtx.drawImage(img_coins,x,y,60,60,self.coinsArr[i].left,self.coinsArr[i].top,60,60);

        }

    }
}
//金币位置类
function coinsDir(left,top){
    this.top=top;
    this.left=left;
}