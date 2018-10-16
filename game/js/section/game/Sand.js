/**
 * Created by Administrator on 2016/7/15.
 */
function Sand(){
    //创建沙子
    this.SandSpeed=0;
    var self=this;
    var Sand1=new SandDir(1800,400);
    var Sand2=new SandDir(5800,360);
    var Sand3=new SandDir(9000,440);
    var Sand4=new SandDir(13000,360);
    var Sand5=new SandDir(15000,320);
    var Sand6=new SandDir(17200,440);
    this.arr_Sand=[Sand1,Sand2,Sand3,Sand4,Sand5,Sand6];
    for(var i=0;i<this.arr_Sand.length;i++){
        $('.sand').append('<img class="sand'+i+'" src="images/Maps/Map1/Sandsmall.png">');
        $('.sand'+i).css({
            position:'absolute',
            top:this.arr_Sand[i].top,
            left:this.arr_Sand[i].left
        })
    }
}
function SandDir(left,top){
    this.top=top;
    this.left=left;
}