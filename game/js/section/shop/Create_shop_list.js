/**
 * Created by Administrator on 2016/7/5.
 */
//创建 注：①数据库里的商店表格要添加玩家装备②查找类型为一样的打印出来
function create(id,equip_src,equip_price,flag){
    this.id=id;
    this.equip_src=equip_src;
    this.equip_price=equip_price;
    //创建商品列表
    $('.list').append('<div class='+id+'><img class="shop_equip" id="'+flag+'"  src='+equip_src+'/><div class="price">'+equip_price+'</div><div class="buy"></div><div class="look"></div></div>');
    //创建购买、预览按钮
    this.buy_btn=new buttonManage('buy','154','-2','108','25','images/button/buy.png','images/button/buy_2.png');
    this.preview_btn=new buttonManage('look','154','110','85','25','images/button/preview.png','images/button/preview_2.png');
    //点击按钮改变按钮样式
    this.buy_btn.btn_change();
    this.preview_btn.btn_change();
    //已购买的装备，显示的价格变成为‘已购买’
    change_to_bought();
}
//已购买的装备，显示的价格变成为‘已购买’
function change_to_bought(){
    db.transaction(function(context){
        //查找当前用的所有装备的id
        var sql='select * from carportInformation where user_id in (select user_id from userInformation where  state="1") ;';
        context.executeSql(sql,[],function(context,result){
            for(var k=0; k<result.rows.length;k++){
                for(j=0;j<$('.price').length;j++){//当前商店显示列表显示的装备个数
                    a= $('.price').parent().find('img')[j].id;//当前商店显示列表的id
                    if(result.rows[k].good_id==a){//遍历当前用的装备id与当前商店显示列表的id相同时，说明已购买
                        $($('.price')[j]).parent().find('div[class="price"]').html('已购买');//将价格改变成‘已购买’
                    }
                    
                }
            }
            show_equipped('bicker');
            show_equipped('car');
            show_equipped('wheel');


        },function(context,error){
            alert('error')
        })
    });

}
db.transaction(function(context){
    //查找当前用的所有装备的id
    var sql='select good_id from goodInformation where good_src=(select bicker_src from userInformation where state="1") ;';
    context.executeSql(sql,[],function(context,result){
    },function(context,error){
        alert('error')
    })
});

function show_equipped(type){
    db.transaction(function(context){
        //查找当前用的所有装备的id
        var sql='select * from goodInformation where good_src=(select '+type+'_src from userInformation where state="1") ;';

        context.executeSql(sql,[],function(context,result){
            for(var k=0; k<result.rows.length;k++){
                for(j=0;j<$('.price').length;j++){//当前商店显示列表显示的装备个数
                    a= $('.price').parent().find('img')[j].id;//当前商店显示列表的id
                    if(result.rows[k].good_id==a){//遍历当前用的装备id与当前商店显示列表的id相同时，说明已购买
                        $($('.price')[j]).parent().find('div[class="price"]').html('已装备');//将价格改变成‘已购买’
                    }
                }
            }
        },function(context,error){
            alert('error')
        })
    });
}
