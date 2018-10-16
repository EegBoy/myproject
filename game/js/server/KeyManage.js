/////**
//// * Created by Administrator on 2016/6/30.
//// */
//
var keyManage = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    space: 32
};
var keyStatus = {
    left: false,
    up: false,
    right: false,
    down: false,
    space: false

};
//键盘按下的时候，改变status的状态改为true
$(document).keydown (function (ev) {
    if (ev.keyCode == keyManage.left){
        keyStatus.left = true;
    }
    if (ev.keyCode == keyManage.up){
        keyStatus.up = true;
    }
    if (ev.keyCode == keyManage.right){
        keyStatus.right = true;
    }
    if (ev.keyCode == keyManage.down){
        keyStatus.down = true
    }
    if (ev.keyCode == keyManage.space){
        keyStatus.space = true
    }
});
//按键离开的时候，改变status的状态还原为false
$(document).keyup(function (ev){
    if (ev.keyCode == keyManage.left){
        keyStatus.left = false;
    }
    if (ev.keyCode == keyManage.up){
        keyStatus.up = false;
    }
    if (ev.keyCode == keyManage.right){
        keyStatus.right = false;
    }
    if (ev.keyCode == keyManage.down){
        keyStatus.down = false
    }
    if (ev.keyCode == keyManage.space){
        keyStatus.space = false
    }
});
//鼠标点击按钮改变状态
$(function(){
    //点击向左,改变status的状态为true
    $('.stop').mousedown(function(){

        keyStatus.left = true;
    });
//点击向右,改变status的状态为true
    $('.go').mousedown(function(){
        keyStatus.right = true;
    });
//点击向上,改变statue状态为true
    $('.up').mousedown(function(){

        keyStatus.up = true;
    });
//点击向下,改变statue状态为true
    $('.down').mousedown(function(){

        keyStatus.down = true;
    });
//取消点击向左,改变status的状态为false
    $('.stop').mouseup(function(){
        keyStatus.left = false;
    });
//取消点击向右,改变status的状态为false
    $('.go').mouseup(function(){
        keyStatus.right = false;
    });
//取消点击向上,改变statue状态为false
    $('.up').mouseup(function(){
        keyStatus.up = false;
    });
//取消点击向下,改变statue状态为false
    $('.down').mouseup(function(){
        keyStatus.down = false;
    });
});








