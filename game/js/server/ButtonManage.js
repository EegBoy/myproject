/**
 * Created by Administrator on 2016/7/2.
 */

function buttonManage(btn_id,top,left,width,height,bkg_src1,bkg_src2){
    this.btn_id=btn_id;
    this.width=width;
    this.height=height;
    this.top=top;
    this.left=left;
    this.bkg_src1=bkg_src1;
    this.bkg_src2=bkg_src2;
    //创建按钮
    $('.'+btn_id).css({//按钮样式
        position:'absolute',
        left:''+left+'px',
        top:''+top+'px',
        width:width,
        height:height,
        'background-image':'url('+bkg_src1+')',
        'background-size':'100% 100%'
    });
    this.btn_change=function(){
        $('.'+btn_id+'').on({
            'mousedown':function(){
                $(this).css({
                    'background-image':'url('+bkg_src2+')'
                });
                $('#click_music')[0].play()
            },
            'mouseup':function(){
                $(this).css({
                    'background-image':'url('+bkg_src1+')'
                })
            }
        })
    }

}