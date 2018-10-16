/**
 * Created by Administrator on 2016/7/3.
 */
function verification(){
    $('#reg').validate({
//                  验证成功时，写入img标签生产打钩图片
        success:function(label){
            label.addClass('success').html('<img src="images/button/ok.png">');
        },
//                验证规则
        rules:{
            name:{//用户名
                required:true,
                rangelength:[6,12]

            },

            pwd:{//密码
                required:true,
                rangelength:[6,16]
            },
            pwd2:{//确认密码
                required:true,
                equalTo:'#pwd'

            },
            game_name:{//昵称
                required:true,
                //digites:true,
                rangelength:[6,12]
            }
        },
//                正则提示信息修改
        messages:{
            name:{
                ranglength:'在{0}到{1}之间'
            },
            pwd:{//密码
                ranglength:'在{0}到{1}之间'
            },
            game_name:{//昵称
                ranglength:'在{0}到{1}之间'
            }
        }
    });

}
