/**
 * Created by Administrator on 2016/7/9.
 */

    //1、商店预览窗口，当前用户显示装备为上次退出前的装备
    function currEquip_preview(){
        db.transaction(function(context){
            var sql='select * from userInformation where state="1";';//查找当前用户信息里的当前装备
            context.executeSql(sql,[],function(context,result){
                var bicker_src=result.rows[0].bicker_src;//获取当前装备车手
                var car_src=result.rows[0].car_src;//获取当前装备车子
                var Wheel_src=result.rows[0].wheel_src;//获取当前装备的轮子
                $('.bicker_view').attr('src',bicker_src);//装备车手
                $('.car_view').attr('src',car_src);//装备车子
                $('.Wheel_view').attr('src',Wheel_src);//装备轮子
                var name=result.rows[0].game_name;
                var gold=result.rows[0].gold;
                $('.player_name').html(''+name+'');
                $('.gold').html(''+gold+'');
                $('.marquee_user').html(''+name+'');
            },function(context,error){
                alert('error')
            })
        });
    }
    //2、菜单进入商店时，商店列表第一次显示页面
    function shopList(){
        var view_src=['images/Shop/c1.png','images/Shop/c2.png','images/Shop/c3.png','images/Shop/c4.png','images/Shop/c5.png','images/Shop/c6.png'];//预览的图片地址数组
        G.view_gold=['2000','2800','3200','3600','4000','4400'];//预览的图片地址数组
        var good_type=['bicker','car','wheel'];//装备类型
        G.arr_notice=['cw1','cw2','cw3','cw4','cw5','cw6','cw7','cw8'];
        $('.list').html('');//清空商品展示列表
        db.transaction(function(context){
            var sql='select * from goodInformation where good_type="bicker";';
            context.executeSql(sql,[],function(context,result){
                for(var l=0;l<6;l++){
                    create('bicker',result.rows[l].preview_src,result.rows[l].price,result.rows[l].good_id);

                }
                //装备预览
                $('.look').each(function(j){
                    $(this).click(function(){
                        $('.bicker_view').attr('src',view_src[j])
                    })
                });
                buy();  //购买
            },function(context,error){
                alert('error')
            })
        });
    }



