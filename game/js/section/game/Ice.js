/**
 * Created by Administrator on 2016/7/14.
 */
function Ice(){
    //创建冰块加速带
    this.IceSpeed=0;
    var self=this;
    var ice1=new IcesDir(1500,360);
    var ice2=new IcesDir(4800,320);
    var ice3=new IcesDir(8000,400);
    var ice4=new IcesDir(12500,440);
    var ice5=new IcesDir(14000,320);
    var ice6=new IcesDir(16000,440);
    this.arr_Ice=[ice1,ice2,ice3,ice4,ice5,ice6];
    for(var i=0;i<self.arr_Ice.length;i++){
        $('.ice').append('<img class="ice'+i+'" src="images/Maps/Map2/up.png">');
        $('.ice'+i).css({
            position:'absolute',
            top:self.arr_Ice[i].top,
            left:self.arr_Ice[i].left
        })
    }
}
//创建冰块加速带类
function IcesDir(left,top){
    this.top=top;
    this.left=left;
}