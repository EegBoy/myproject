/**
 * Created by Administrator on 2016/7/3.
 */


//****************************创建数据库****************************
var db=openDatabase('game','1.0','yonghuxinxi',2*1024*1024,function(){
    //alert('ok')
});
//创建用户信息列表
db.transaction(function(context){
    var sql='create table if not exists userInformation(user_id integer primary key autoincrement,username varchar(12),password varchar(16),game_name varchar(12),bicker_src varchar(30),wheel_src varchar(30),car_src varchar(30),bicker_src2 varchar(30),wheel_src2 varchar(30),car_src2 varchar(30),gold varchar(10),state varchar(10));';
    context.executeSql(sql,[],function(context,result){
        //alert('ok')
    },function(context,error){
        alert('error')
    })
});
//创建商店列表
db.transaction(function(context){
    var sql='create table if not exists goodInformation(good_id integer primary key autoincrement,good_type varchar(8),good_name varchar(8),good_attribute varchar(8),good_src varchar(30),preview_src varchar(30),price int(8));';
    context.executeSql(sql,[],function(context,result){
        //alert('ok')
    },function(context,error){
        alert('error')
    })
});
//插入商品数据
goodInsert('bicker','bicker1','C-','images/Shop/c1.png','images/Shop/c1s.png','2000');
goodInsert('bicker','bicker2','C','images/Shop/c2.png','images/Shop/c2s.png','2800');
goodInsert('bicker','bicker3','C+','images/Shop/c3.png','images/Shop/c3s.png','3200');
goodInsert('bicker','bicker4','B','images/Shop/c4.png','images/Shop/c4s.png','3600');
goodInsert('bicker','bicker5','B-','images/Shop/c5.png','images/Shop/c5s.png','4000');
goodInsert('bicker','bicker6','B+','images/Shop/c6.png','images/Shop/c6s.png','4400');
goodInsert('bicker','bicker7','A-','images/Shop/c7.png','images/Shop/c7s.png','4800');
goodInsert('bicker','bicker8','A','images/Shop/c8.png','images/Shop/c8s.png','5200');
goodInsert('car','car1','150km/h','images/Shop/m1.png','images/Shop/m1s.png','4200');
goodInsert('car','car2','160km/h','images/Shop/m2.png','images/Shop/m2s.png','4500');
goodInsert('car','car3','170km/h','images/Shop/m3.png','images/Shop/m3s.png','5000');
goodInsert('car','car4','180km/h','images/Shop/m4.png','images/Shop/m4s.png','5500');
goodInsert('wheel','wheel1','15s','images/Shop/w1.png','images/Shop/w1s.png','600');
goodInsert('wheel','wheel2','14s','images/Shop/w2.png','images/Shop/w2s.png','800');
goodInsert('wheel','wheel3','13s','images/Shop/w3.png','images/Shop/w3s.png','1200');
goodInsert('wheel','wheel4','12s','images/Shop/w4.png','images/Shop/w4s.png','1800');

//创建我的车库列表
db.transaction(function(context){
    var sql='create table if not exists carportInformation(carport_id integer primary key autoincrement,user_id int(8),good_id int(8));';
    context.executeSql(sql,[],function(context,result){
        //alert('ok')
    },function(context,error){
        //alert('error')
    })
});

//商品列表插入数据
function goodInsert(a,c,d,e,f,g){
    //判断是否存在
    db.transaction(function(context){
        var sql='select * from goodInformation;';
        context.executeSql(sql,[],function(context,result){
            if(result.rows.length==0){
                db.transaction(function(context){
                    var sql='insert  into  goodInformation values(null,?,?,?,?,?,?);';
                    context.executeSql(sql,[a,c,d,e,f,g],function(context,result){
                        //alert('ok')
                    },function(context,error){
                        alert('error')
                    })
                });
            }
        },function(context,error){
            alert('error')
        })
    });
}

//删除数据
function deleteDb(){
    db.transaction(function(context){
        //var sql='delete  from userInformation  where good_type="car";';//删除单条数据
        var sql='drop table goodInformation;';//删除整张表
        context.executeSql(sql,[],function(context,result){
            alert('该表已删除')
        },function(context,error){
            alert('error')
        })
    });
}
//deleteDb()










