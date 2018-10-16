/**
 * Created by Administrator on 2016/7/10.
 */
function checkPoint(){
    //背景拉伸平铺
    var height=$(document).height();
    $('.main_checkpoint').css('height',height);
    $('.main_checkpoint').css('backgroundSize','1366px  '+height+'px');
    //创建关卡左右选择按钮、继续按钮、返回按钮
    var turn_left=new buttonManage('turn_left','300','180','69','69','images/button/left.png','images/button/left.png');
    var turn_right=new buttonManage('turn_right','300','1100','69','69','images/button/right.png','images/button/right.png');
    var checkpoint_back=new buttonManage('check_back','500','50','96','96','images/button/back.png','images/button/back_2.png');
    var checkpoint_continue=new buttonManage('checkpoint_continue','530','1200','135','69','images/button/next.png','images/button/next_2.png');
    var notice_back=new buttonManage('notice_back','135','225','61','37','images/button/fanhui.png','images/button/fanhui_2.png');
    checkpoint_continue.btn_change();
    checkpoint_back.btn_change();
    var num=0;
    var left=0;
    G.point=0;
    //点击向右切换
    $('.turn_right').click(function(){
        $('#click_music')[0].play();
        if(num>-11){
            G.point--;
            num--;
            if(num==-1){
                left=280*num;
            }else{
                left=-280+584*(num+1)
            }
            $('.checkpoint').animate({
                'left':''+left+'px'
            },1000)
        }

    });
    //点击向左切换
    $('.turn_left').click(function(){
        $('#click_music')[0].play();
        if(num<0){
            G.point++;
            num++;
            if(num==-1){
                left=280*num;
            }else{
                left=-280+584*(num+1)
            }
            $('.checkpoint').animate({
                'left':''+left+'px'
            },1000)
        }

    });
    //点击反回按钮
    $('.check_back').click(function(){
        $('.main_checkpoint').hide();//隐藏关卡页面
        $('.menu').show();//显示主菜单
        $('.exit').show()
    });
    //点击继续按钮
    $('.checkpoint_continue').click(function(){
        if(G.point==0){
            $('.main_checkpoint').hide();//隐藏关卡页面
            $('.small_point').show();//显示小地图关卡
        }else{
            $('.checkpoint_notice').find('img').attr('src','images/Window/blockwindow1.png');//显示提示信息
            $('.checkpoint_notice').show();//显示提示框
            $('.coverLayer0').show();//显示遮罩
            $('.notice_back').click(function(){
                $('#click_music')[0].play();
                $('.checkpoint_notice').hide();//隐藏提示框
                $('.coverLayer0').hide();//隐藏遮罩
            })

        }
    });

}