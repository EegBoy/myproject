/**
 * Created by Administrator on 2016/7/6.
 */
function action(){
//1、点击注册按钮，填写注册信息
    $('.register_btn').click(function(){
        $('.login_box').hide();//登录框隐藏
        $('.register_box').show(); //注册框显示
        $('.username').val('');//清空输入框
        $('.password').val('');//清空输入框
    });

//2、点击取消注册
    $('.cancel').click(function(){
        $('.login_box').show();//登录框显示
        $('.register_box').hide();//注册框隐藏
    });
//3、点击登录按钮
    $('.login_btn').click(function(){//点击登录
        var username=$('.username').val();//获取用户名输入框内容
        var password=$('.password').val();//获取密码输入框内容
        // ①点击登录的时候，让所有登录状态改成0
        db.transaction(function(context){
            var sql='update userInformation set state=0 where state="1";';
            context.executeSql(sql,[],function(context,result){

            },function(context,error){
                alert('error')
            })
        });
        //②点击登录的时候，让当前登录用户状态改成1
        db.transaction(function(context){
            var sql='select * from userInformation where username=? and password=?;';
            var sql2='update userInformation set state="1" where username=? and password=?;';
            context.executeSql(sql,[username,password],function(context,result){
                if(result.rows.length>0){
                    context.executeSql(sql2,[username,password],function(context,result){

                    },function(){
                        alert('sql未执行')
                    });
                    $('.login_register').hide();//登录成功，隐藏登录界面
                    $('.load').show();//登录成功，显示进度条界面
                    $('.username').val('');//登录成功，清空输入框
                    $('.password').val('');//登录成功，清空输入框
                    G.load=Mainload();//登录成功后进行加载
                }else{
                    //提示登录失败
                    $('.coverLayer0').show();//显示遮罩
                    $('.notice').find('img').attr('src','images/Window/error.png');
                    $('.notice').show();
                    $('.username').val('');//登录失败，清空输入框
                    $('.password').val('');//登录失败，清空输入框
                }
            },function(context,error){
                alert('error')
            })
        });

    });

//4、注册框点击确定，且验证通过，保存用户注册信息
    $('.ensure').click(function(){//点击确认注册
        if($('#reg').valid()){//①表单验证成功
            var username=$('.name').val();//获取输入的用户名
            var password=$('.pwd').val();//获取输入的密码
            var gameName=$('.game_name').val();//获取输入的游戏昵称
            var bicker_src='images/Shop/c1.png';//初始车手
            var wheel_src='images/Shop/w1.png';///初始轮子
            var car_src='images/Shop/m1.png';//初始车子
            var bicker_src2='images/Shop/c1s.png';//初始车手
            var wheel_src2='images/Shop/w1s.png';//初始轮子
            var car_src2='images/Shop/m1s.png';//初始车子
            var gold='10000';//初始金币
            db.transaction(function(context){
                var sql='insert into userInformation values(null,?,?,?,?,?,?,?,?,?,?,?);';//数据库写入注册信息
                var sql2='select * from userInformation where username='+username+';';
                var sql3='select * from userInformation where game_name='+gameName+';';

                context.executeSql(sql2,[],function(context,result){
                    if(result.rows.length==0){//②判断没有找到一样的用户名
                        context.executeSql(sql3,[],function(context,result){
                            if(result.rows.length==0){//③判断能否找到一样的用户昵称
                                //没有一样的就录入信息，错误提示为‘5’
                                context.executeSql(sql,[username,password,gameName,bicker_src,wheel_src,car_src,bicker_src2,wheel_src2,car_src2,gold,'0'],function(context,result){

                                    db.transaction(function(context){
                                        context.executeSql(sql3,[],function(context,result){
                                            var currUser_id=result.rows[0].user_id;//当前注册用户在数据库用户列表中的id

                                            //④注册成功，新用户车库获得默认初始装备
                                            initial_equip(1,currUser_id);//新用户车库写入初始车手id

                                            initial_equip(9,currUser_id);//新用户车库写入初始车子id

                                            initial_equip(13,currUser_id);//新用户车库写入初始轮子id

                                        },function(context,error){
                                            alert('error4')
                                        })
                                    });
                                    $('.register_box').find('input').val('');//注册成功，清空输入框
                                    $('.register_box').find('label').html('');//注册成功，清空提示框
                                    $('.coverLayer0').show();//显示遮罩
                                    $('.notice2').find('img').attr('src','images/Window/success.png');
                                    $('.notice2').show();
                                    $('.notice_ok2').click(function(){
                                        $('.register_box').hide();//注册框隐藏
                                        $('.login_box').show();//登录框显示
                                        $('.notice2').hide();
                                        $('.coverLayer0').hide();
                                    });

                                },function(context,error){
                                    alert('error5')
                                })
                            }else{
                                //昵称已存在
                                $('.coverLayer0').show();//显示遮罩
                                $('.notice').show();//显示提示框
                                $('.notice').find('img').attr('src','images/Window/name_have.png');


                            }
                        },function(context,error){
                            alert('error6')
                        })
                    }else{
                        //用户名已存在
                        $('.coverLayer0').show();//显示遮罩
                        $('.notice').show();//显示提示框
                        $('.notice').find('img').attr('src','images/Window/username_have.png');

                    }
                },function(context,error){
                    alert('error7')
                });

            })
        }
    });
}
//注册成功，车库写入新用户初始装备id
function initial_equip(x,currUser_id){
    db.transaction(function(context){
        var sql='insert into carportInformation values(null,?,'+x+');';
        context.executeSql(sql,[currUser_id],function(context,result){
        },function(context,error){
            alert('error1')
        })
    });
}







