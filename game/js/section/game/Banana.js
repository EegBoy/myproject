/**
 * Created by Administrator on 2016/7/18.
 */

function Banana(){
    //创建香蕉
    var Banana1=new BananaDir(2300,360);
    var Banana2=new BananaDir(3800,410);
    var Banana3=new BananaDir(7000,360);
    var Banana5=new BananaDir(11000,360);
    var Banana6=new BananaDir(15000,410);
    this.arr_Banana=[Banana1,Banana2,Banana3,Banana5,Banana6];
    for(var i=0;i<this.arr_Banana.length;i++){
        $('.banana').append('<img class="banana'+i+'" src="images/Game/banana_1.png">');
        $('.banana'+i).css({
            position:'absolute',
            top:this.arr_Banana[i].top,
            left:this.arr_Banana[i].left
        })
    }
}
function BananaDir(left,top){
    this.top=top;
    this.left=left;
}