/**
 * Created by Administrator on 2016/6/28.
 */
function Mainload(){
    $(function(){
        var height=$(document).height();
        $('.load').css('height',height);
        $('.load').css('backgroundSize','1366px  '+height+'px');
    });
    //            进度数字加载
    $('#Theme_music')[0].pause();//关闭音乐
    $('#moto_music')[0].play();//开起音乐
    var num=0;
    var timer=setInterval(function(){
        num=num+40;
        $('.load_num').find('p').html(num);//写入加载数字
        if(num==15000){//当数字为15000时，加载完成
            $('#Theme_music')[0].play();//开起背景音乐
            $('#moto_music')[0].pause();//关闭音乐
            clearInterval(timer);//加载完成清除定时器
            $('.loading').html('加载完成');
            $('.load').hide(1,function(){
                $('.menu').show();//跳转到菜单页面
                $('.exit').show();//显示游戏退出按钮
            });
        }
    },12);

}