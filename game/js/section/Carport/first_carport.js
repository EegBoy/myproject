/**
 * Created by Administrator on 2016/7/9.
 */
function first_carport(){
    db.transaction(function(context){
        var sql='select * from userInformation where state="1";';//查找当前用户信息里的当前装备
        context.executeSql(sql,[],function(context,result){
            var bicker_src=result.rows[0].bicker_src;//获取当前装备车手
            var car_src=result.rows[0].car_src;//获取当前装备车子
            var Wheel_src=result.rows[0].wheel_src;//获取当前装备的轮子
            var bicker_src2=result.rows[0].bicker_src2;//获取当前装备车手
            var car_src2=result.rows[0].car_src2;//获取当前装备车子
            var Wheel_src2=result.rows[0].wheel_src2;//获取当前装备的轮子

            $('.carport_bicker').find('img').attr('src',bicker_src);
            $('.carport_car').find('img').attr('src',car_src);
            $('.carport_wheel').find('img').attr('src',Wheel_src);
            $('.equip1').attr('src',bicker_src2);
            $('.equip2').attr('src',car_src2);
            $('.equip3').attr('src',Wheel_src2);

            equip_attr('bicker','bicker_attr');//显示车手属性
            equip_attr('car','carSpeed');//显示当前车子属性
            equip_attr('wheel','aSpeed');//显示当前轮子属性

        },function(context,error){
            alert('error')
        })
    });

    //显示装备属性
    function equip_attr(type,id){

        db.transaction(function(context){
            var sql='select * from goodInformation where good_src=(select '+type+'_src from userInformation where state="1");';

            context.executeSql(sql,[],function(context,result){

                var attr=result.rows[0].good_attribute;
                $('.'+id).html(attr)

            },function(context,error){
                alert('error')
            })
        });
    }




}