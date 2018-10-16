/**
 * Created by Administrator on 2016/7/6.
 */
function buy(){
    /**
     * 点击购买
     * 从数据库判断，当前用户金钱是否足够购买
     * 若余额充足：从用户车库数据列表判断是否已购买
     * 若尚未购买，提示是否购买
     * 确认购买，金币加减，用户车库列表添加该商品id，页面价格显示栏改为已购买
     **/
    $('.buy').each(function(j){
        var self=this;
        $(this).click(function(){
            $('.coverLayer0').show();//开启遮罩
            var currGood_id=$(this).parent().find('img')[0].id;//获取当前购买的商品id
            /**
             * 获取本地用户金币--减去当前装备金币--值再赋给数据库里用户的金币--显示在当前窗口

            **/
            db.transaction(function(context){
                var sql='select * from userInformation where state="1";';
                context.executeSql(sql,[],function(context,result){
                    var gold=result.rows[0].gold;//购买前用户余额
                    var currUser_id=result.rows[0].user_id;//获取当前购买用户的id
                    var equip_gold= G.view_gold[j];//装备价格
                    var remain_gold=parseInt(gold)-parseInt(equip_gold);//购买商品后的余额
            /**
             * 判断用户余额是否充足
             * 判断是否已购买过该商品
             **/
                    if(remain_gold>=0){//判断当前余额是否充足
                        db.transaction(function(context){
                            var sql='select * from carportInformation where user_id='+currUser_id+' and good_id='+currGood_id+';';
                            context.executeSql(sql,[],function(context,result){

                                if(result.rows.length>0){ //判断是否已购买
                                    //'已购买'
                                    $('.notice').find('img').attr('src','images/Window/buyedwindow.png');
                                    $('.notice').show();//提示已购买
                                    //价格的地方改成已购买
                                    $(self).parent().find('div[class="price"]').html('已购买');
                                }else{
                                    db.transaction(function(context){//获取当前商品名称
                                        var sql='select * from goodInformation where good_id='+currGood_id+';';
                                        context.executeSql(sql,[],function(context,result){
                                            var currGood_name=result.rows[0].good_name;
                                            //购买提示框
                                            $('.buyed_notice').find('img').attr('src','images/Window/buywindow.png');
                                            $('.p1_gold').html(equip_gold);//购买商品金额
                                            $('.p2_type').html(currGood_name);//购买商品名字
                                            $('.buyed_notice').show();
                                            //点击确认购买
                                            buy_ensure(remain_gold,currUser_id,currGood_id,self);
                                        },function(context,error){
                                            alert('error1')
                                        })
                                    });
                                }
                            },function(context,error){
                                alert('error5')
                            })
                        });
                    }else{
                        //'余额不足'
                        $('.notice').find('img').attr('src','images/Window/nomoneywindow.png');
                        $('.notice').show();//提示已购买
                    }
                },function(context,error){
                    alert('error7')
                })
            });

        })
    });
}

/**
 * 点击确认购买
 * 扣除金币，更新当前用户余额
 *
 * **/
function buy_ensure(remain_gold,currUser_id,currGood_id,self){
    $('.judge_ok').click(function(){
        db.transaction(function(context){//购买成功修改当前账户金币余额
            var sql='update userInformation set gold='+remain_gold+' where state="1";';
            context.executeSql(sql,[],function(context,result){
                //购买后
                db.transaction(function(context){
                    var sql='select * from userInformation where state="1";';
                    context.executeSql(sql,[],function(context,result){
                        var name=result.rows[0].game_name;
                        var gold=result.rows[0].gold;//购买后的余额
                        $('.coverLayer0').hide();//隐藏遮罩
                        $('.buyed_notice').hide();//隐藏购买提示框
                        $(self).parent().find('div[class="price"]').html('已购买');//价格位置显示已购买
                        $('.player_name').html(''+name+'');
                        $('.gold').html(''+gold+'');
                        //将购买的商品写入车库数据列表
                        db.transaction(function(context){
                            var sql='insert into carportInformation values(null,?,?);';
                            context.executeSql(sql,[currUser_id,currGood_id],function(context,result){

                            },function(context,error){
                                alert('error1')
                            })
                        });

                    },function(context,error){
                        alert('error3')
                    })
                });
            },function(context,error){
                alert('error4')
            })
        });

    })
}