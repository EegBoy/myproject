/**
 * Created by Administrator on 2016/7/9.
 */
function ShopBtn_action(){
    //点击我的仓库，进入仓库
    $('.carport').click(function(){
        $('.shop').hide();//商店隐藏
        $('.myCarport2').show();//显示我的仓库
        first_carport();//装备预览
    });
    //点击返回按钮，回到主菜单
    $('.shop_back').click(function(){
        $('.shop').hide();//商店隐藏
        $('.menu').show();//显示主菜单
    });
    //进入页面时显示的第一个页面
    var view_src=['images/Shop/c1.png','images/Shop/c2.png','images/Shop/c3.png','images/Shop/c4.png','images/Shop/c5.png','images/Shop/c6.png'];//预览的图片地址数组
    G.view_gold=['2000','2800','3200','3600','4000','4400'];//价格
    var good_type=['bicker','car','wheel'];//三种装备类型
    var arr=['bicker_view','car_view','Wheel_view'];//预览装备的class名字
    var arr_notice=[['cw1','cw2','cw3','cw4','cw5','cw6','cw7','cw8'],['mw1','mw2','mw3','mw4'],['ww1','ww2','ww3','ww4']];

    db.transaction(function(context){
        var sql='select * from goodInformation where good_type="bicker";';
        context.executeSql(sql,[],function(context,result){
            //点击上一页，显示商品内容
            $('.pre').click(function(){
                view_src=['images/Shop/c1.png','images/Shop/c2.png','images/Shop/c3.png','images/Shop/c4.png','images/Shop/c5.png','images/Shop/c6.png']
                G.view_gold=['2000','2800','3200','3600','4000','4400'];
                G.arr_notice=['cw1','cw2','cw3','cw4','cw5','cw6'];
                $('.list').html('');//点击的时候就清空商品展示列表
                for(var l=0;l<6;l++){
                    create('bicker',result.rows[l].preview_src,result.rows[l].price,result.rows[l].good_id);
                }
                $('.look').each(function(j){
                    $(this).click(function(){
                        $('.bicker_view').attr('src',view_src[j])
                    })
                });
                //购买
                buy();
            });
            //点击下一页，显示商品内容
            $('.next').click(function(){
                G.view_gold=['4800','5200'];
                G.arr_notice=['cw7','cw8'];
                view_src=['images/Shop/c7.png','images/Shop/c8.png'];
                $('.list').html('');//点击的时候就清空商品展示列表
                for(var l=6;l<8;l++){
                    create('bicker',result.rows[l].preview_src,result.rows[l].price,result.rows[l].good_id);
                }
                $('.look').each(function(j){
                    $(this).click(function(){
                        $('.bicker_view').attr('src',view_src[j])
                    })
                });
                buy();//购买
            })
        },function(context,error){
            alert('error')
        })
    });
    //点击选项卡时，选项卡按钮的样式
    $('.equip').each(function(i){
        //显示第一个按钮页面
        for(m=1;m<3;m++){
            $($('.list')[m]).hide();
            $($('.equip')[0]).css({
                'background-image':'url("images/Shop/item1.png")'
            });
        }
        var k=i+1;
        //点击选项卡的时候
        $(this).click(function(){
            $('#click_music')[0].play();
            $('.list').html('');//点击的时候就清空商品展示列表
            view_src=[];
            G.view_gold=[];
            G.arr_notice=[];
            for(n=0;n<3;n++){
                var j=n+4;
                $($('.equip')[n]).css({
                    'background-image':'url("images/Shop/item'+j+'.png")'//全部选项卡图片初始化
                });
            }
            $(this).css({
                'background-image':'url("images/Shop/item'+k+'.png")'//当前选项卡背景图片改变
            });
            //分页
            //数据库查找打印
            $('.btn').hide();//点击的时候就清空商品展示列表
            db.transaction(function(context){
                var sql='select * from goodInformation where good_type="'+good_type[i]+'";';
                context.executeSql(sql,[],function(context,result){
                    var pageSize=6;
                    var start=0;
                    var end=0;
                    var pageCount=Math.ceil(result.rows.length/pageSize);
                    var current_page=1;
                    if(pageCount>1){
                        $('.btn').show();
                    }
                    if(result.rows.length>pageSize){
                        end=pageSize
                    }else{
                        end=result.rows.length
                    }
                    for(var l=start;l<end;l++){
                        create(good_type[i],result.rows[l].preview_src,result.rows[l].price,result.rows[l].good_id);
                        view_src.push(result.rows[l].good_src);
                        G.view_gold.push(result.rows[l].price);
                        G.arr_notice.push(arr_notice[i][l]);
                    }
                    buy();//购买
                    $('.look').each(function(j){//预览
                        $(this).click(function(){
                            $('.'+arr[i]).attr('src',view_src[j])
                        })
                    })
                },function(context,error){
                    alert('error')
                })
            });
        })
    });
    //鼠标放到商品上提示
    G.arr_notice=['cw1','cw2','cw3','cw4','cw5','cw6','cw7','cw8'];//提示图片的地址
    $(document).mouseover(function(e){
        $('.shop_equip').each(function(i){
            $(this).mouseover(function(e){//鼠标经过的时候，显示提示
                $('.equip_notice').find('img').attr('src','images/Window/'+ G.arr_notice[i]+'.png')
                $('.equip_notice').show();
            });
            //鼠标移动的时候，提示跟着鼠标移动
            $(this).mousemove(function(e){
                var top= e.clientY;
                var left= e.clientX;
                $('.equip_notice').css({
                    top:top,
                    left:left
                })
            });
            //鼠标离开的时候，提示消失
            $(this).mouseout(function(e){
                $('.equip_notice').hide();
            });
        })

    });
    //点击充值
    $('.credit').click(function(){
        $('.credit_notice').find('img').attr('src','images/Window/unwindow.png');//显示提示信息
        $('.credit_notice').show();//显示提示框
        $('.coverLayer0').show();//显示遮罩
    });
    //点击充值提示返回
    $('.back1').click(function(){
        $('.credit_notice').hide();//隐藏提示框
        $('.coverLayer0').hide();//隐藏遮罩
    })

}