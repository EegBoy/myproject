/**
 * Created by Administrator on 2016/7/12.
 */
function CreateGameBtn(timer){
    //创建按钮
    var continue_game=new  buttonManage('continue_game','5','65','168','64','images/Game/continue.png','images/Game/continue_2.png');
    var restart=new  buttonManage('restart','58','65','168','64','images/Game/again.png','images/Game/again_2.png');
    var return_menu=new  buttonManage('return_menu','110','65','168','64','images/Game/backmenu.png','images/Game/backmenu_2.png');
    continue_game.btn_change();
    restart.btn_change();
    return_menu.btn_change();

}