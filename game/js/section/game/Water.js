/**
 * Created by Administrator on 2016/7/15.
 */


function Water(){
    //创建沙子
    this.WaterSpeed=0;
    var self=this;
    var Water1=new WaterDir(2300,320);
    var Water2=new WaterDir(7300,440);
    var Water3=new WaterDir(9500,360);
    var Water4=new WaterDir(13500,440);
    var Water5=new WaterDir(15500,360);
    var Water6=new WaterDir(17500,320);
    this.arr_Water=[Water1,Water2,Water3,Water4,Water5,Water6];
    for(var i=0;i<this.arr_Water.length;i++){
        $('.water').append('<img class="water'+i+'" src="images/Maps/Map1/water.png">');
        $('.water'+i).css({
            position:'absolute',
            top:this.arr_Water[i].top,
            left:this.arr_Water[i].left
        })
    }
}
//创建水洼的类
function WaterDir(left,top){
    this.top=top;
    this.left=left;
}