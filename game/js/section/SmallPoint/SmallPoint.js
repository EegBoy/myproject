/**
 * Created by Administrator on 2016/7/10.
 */
function smallPoint(){
    //背景拉伸平铺
    var height=$(document).height();
    $('.small_point').css('height',height);
    $('.small_point').css('backgroundSize','1366px  '+height+'px');
    //创建按钮
    var small_map_back=new buttonManage('small_map_back','490','-50','120','120','images/button/back_1.png','images/button/back_1_2.png');
    var small_map_continue=new buttonManage('small_map_continue','490','850','120','120','images/button/go.png','images/button/go_2.png');
    var smallMap_noticeBack=new buttonManage('smallMap_noticeBack','135','225','61','37','images/button/fanhui.png','images/button/fanhui_2.png');

    small_map_back.btn_change();
    small_map_continue.btn_change();
    smallMap_noticeBack.btn_change();


    //地图点击时放大
    $('.track').mousedown(function(){
        $('#click_music')[0].play();
        $(this).animate({
            width:170,
            height:140
        },500);
        //选中地图底部显示
        $('.choose_map').find('img').attr('src',''+ $(this)[0].src+'')
    });
    //鼠标离开时，地图大小还原
    $('.track').mouseup(function(){
        $(this).animate({
            width:160,
            height:120
        },500)
    });
    //点击返回
    $('.small_map_back').click(function(){
        $('.small_point').hide();
        $('.main_checkpoint').show()

    });
    //点击继续
    $('.small_map_continue').click(function(){
        $('.small_point').hide();
        $('.myEquip').show();
        first_carport();
    });
    //点击未解锁地图提示
    $('.small_block').click(function(){
        $('#click_music')[0].play();
        $('.smallMap_notice').find('img').attr('src','images/Window/blockwindow2.png');//显示提示信息
        $('.smallMap_notice').show();//显示提示框
        $('.coverLayer0').show();//显示遮罩
        $('.smallMap_noticeBack').click(function(){
            $('.smallMap_notice').hide();//隐藏提示框
            $('.coverLayer0').hide();//隐藏遮罩
        })
    })


}