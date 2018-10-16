/**
 * Created by Administrator on 2016/7/12.
 */
//倒计时、红绿灯
function CountDown(){
    $('.coverLayer2').show();//显示遮罩
    $('.countDown').find('img').fadeIn(function(){
        $(this).attr( 'src','images/Game/3.png');
        $('.light1').show();
        $(this).fadeOut(1000,function(){
            $(this).attr( 'src','images/Game/2.png');
            $('.light2').show();
            $(this).fadeIn(500,function(){
                $(this).fadeOut(1000,function(){
                    $(this).attr( 'src','images/Game/1.png');
                    $('.light3').show();
                    $(this).fadeIn(500,function(){
                        $('.light4').show();
                        $(this).attr( 'src','images/Game/0.png');
                        $(this).fadeOut(1000,function(){
                            $(this).attr( 'src','');
                            $('.coverLayer2').hide();//隐藏遮罩
                            Action();
                        })
                    })
                })
            })
        })
    });
}
