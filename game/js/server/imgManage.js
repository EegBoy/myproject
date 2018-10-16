/**
 * Created by Administrator on 2016/6/28.
 */
function imgManage(){
    //1、图片存入数组用于加载
    this.imgArr=[];
    this.index=0;
    var self=this;
    this.addImg=function(name,src){
        var oImg=new img(name,src);
        self.imgArr.push(oImg);
    };

    //2、进度条
    this.load=function(){
        imgLoading();
    };

    //图片加载，进度条方法
    function imgLoading(){
        var Img=new Image();
        Img.src=self.imgArr[self.index].src;
        Img.name=self.imgArr[self.index].name;
        Img.onload=function(){
            self.index++;
            var width=Math.ceil(self.index/self.imgArr.length*100);
            $('.load_bar').css('width',width+'%');
            if(self.index<self.imgArr.length){
                //继续加载
                imgLoading()
            }else{
                //加载完成

                //alert('加载完成')

            }
        };

    }



    function img(name,src){
        this.name=name;
        this.src=src;
    }



}
