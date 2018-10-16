/**
 * Created by Administrator on 2016/7/7.
 */
function carPort(){
    //背景拉伸
    var height=$(document).height();
    $('.myCarport').css('height',height);
    $('.myCarport').css('backgroundSize','1366px  '+height+'px');
    //返回按钮
    var carport_back=new buttonManage('carport_back','550','1150','150','100','images/Garage/backshop.png','images/Garage/backshop_2.png');
    carport_back.btn_change();
    $('.carport_back').click(function(){
        $('.myCarport2').hide();//我的车库隐藏
        $('.shop').show();//显示商店
        change_to_bought();
        currEquip_preview();//商店左侧预览改为当前装备
    });
    //点击左右按钮，装备已有装备
    choose_equip('left_btn1','right_btn1','bicker','carport_bicker','equip1','bicker_attr');
    choose_equip('left_btn2','right_btn2','car','carport_car','equip2','carSpeed');
    choose_equip('left_btn3','right_btn3','wheel','carport_wheel','equip3','aSpeed');

    //装备左右选择方法
    function choose_equip(left_id,right_id,type,img_id,img2_id,attr_id){
        var c=0;
        $('.'+left_id).click(function() {
            $('#click_music')[0].play();
            c--;
            db.transaction(function(context){
                var sql='select * from goodInformation where good_id in (select good_id from carportInformation where user_id=(select user_id from userInformation where state="1") and good_type="'+type+'");';
                context.executeSql(sql,[],function(context,result){
                    if(c<0){
                        c=result.rows.length-1
                    }
                    var src=result.rows[c].good_src;
                    var src2=result.rows[c].preview_src;
                    var attribute=result.rows[c].good_attribute;
                    $('.'+img_id).find('img').attr('src',src);
                    $('.'+img2_id).attr('src',src2);
                    $('.'+attr_id).html(attribute);
                    currUser_equip(type,src,src2);//点击选择装备，改变当前用户本地数据的装备
                },function(context,error){
                    alert('error')
                })
            });
        });
        $('.'+right_id).click(function(){
            $('#click_music')[0].play();
            c++;
            db.transaction(function(context){
                var sql='select * from goodInformation where good_id in (select good_id from carportInformation where user_id=(select user_id from userInformation where state="1") and good_type="'+type+'");';
                context.executeSql(sql,[],function(context,result){
                    if(c>=result.rows.length){
                        c=0
                    }
                    var src=result.rows[c].good_src;
                    var src2=result.rows[c].preview_src;
                    var attribute=result.rows[c].good_attribute;
                    $('.'+img_id).find('img').attr('src',src);
                    $('.'+img2_id).attr('src',src2);
                    $('.'+attr_id).html(attribute);
                    currUser_equip(type,src,src2);//点击选择装备，改变当前用户本地数据的装备
                },function(context,error){
                    alert('error')
                })
            });
        })
    }
}
//点击选择装备，改变当前用户本地数据的装备
function currUser_equip(type,src,src2){
    db.transaction(function(context){
        var sql='update userInformation set '+type+'_src="'+src+'" where state="1" ;';
        context.executeSql(sql,[],function(context,result){

        },function(context,error){
            alert('error')
        })
    });
    db.transaction(function(context){
        var sql='update userInformation set '+type+'_src2="'+src2+'" where state="1" ;';
        context.executeSql(sql,[],function(context,result){

        },function(context,error){
            alert('error')
        })
    });
}

