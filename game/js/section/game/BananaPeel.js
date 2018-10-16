/**
 * Created by Administrator on 2016/7/18.
 */
function BananaPeel(){
    //创建香蕉皮
    this.arr_BananaPeel=[];
    for(var i=0;i<this.arr_BananaPeel.length;i++){
        $('.banana_peel').append('<img class="banana_peel'+i+'" src="images/Game/banana_2.png">');
        $('.banana_peel'+i).css({
            position:'absolute',
            top:this.arr_BananaPeel[i][0],
            left:this.arr_BananaPeel[i][1]
        })
    }
}
