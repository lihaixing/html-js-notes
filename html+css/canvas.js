/**
 * Created by Administrator on 2014/11/7.
 */
function draw1(id) {
    var canvas1 = document.getElementById(id);
    var context = canvas1.getContext('2d');
//绘制矩形
//     context.fillStyle='#000';
//     context.strokeStyle='#fff'
//     context.lineWidth=5;
//     context.fillRect(0,0,400,400);
//     context.strokeRect(30,30,300,200);
//     context.strokeRect(40,40,300,200);
//绘制圆形
    context.fillStyle = '#f1f2f3';
    context.fillRect(0, 0, 400, 400);
    context.beginPath();//·����ʼ
    context.arc(10, 10, 10, 0, Math.PI * 2, true);//前两个参数是圆心，第三个是半径，然后开始弧度，结束弧度，true是逆时针
    context.closePath();//·������
    context.fillStyle = 'rgba(255,0,0,0.25)';
    context.fill();
    context.strokeStyle = 'rgba(255,0,0,0.8)';
    context.stroke();
//绘制多个圆形
//     context.fillStyle='#f1f2f3';
//     context.fillRect(0,0,400,400);
//     for(i=0,x=10,y=10,z=10;i<7;i++,x+=25,y+=25,z+=10){
//         context.beginPath();
//         context.arc(x,y,z,0,Math.PI*2,true);
//         context.closePath();
//         context.fillStyle='rgba(255,0,0,0.25)';
//         context.fill();
//         context.lineWidth=5;
//         context.strokeStyle='rgba(255,0,0,0.8)';
//         context.stroke();
//     }

}
//绘制文字
function draw2(id){
    var canvas2=document.getElementById(id);
    var context=canvas2.getContext('2d');
    context.fillStyle='green';
    context.fillRect(0,0,800,300);
    context.fillStyle='#fff';
    context.strokeStyle='#fff';
    context.lineWidth=1;
    context.font="bold 40px '微软雅黑','宋体'";
    context.textBaseline='hanging';//文字垂直对齐方式top middle Bottom
    context.textAlign='start';//水平对齐方式 left right center end
    context.fillText('欢迎收看麦子学院推出的' ,10 ,40);
    context.fillText('《HTML5+CSS3轻松入门与实战》',40,110);
    context.strokeText('视频教程',580,180);
    context.fillText('1234567820212223242526272829《HTML5+CSS3轻松入门与实战》《HTML5+CSS3轻松入门与实战》《HTML5+CSS3轻松入门与实战》',0,230,700);
   /* 最后一个参数800是最大值，不让溢出*/
    context.strokeText('麦子学院',0,60);
    //保存图形文件
    window.location=canvas2.toDataURL('images/jpg');
}
//绘制动画1
var i, j,width,height;
function draw(id){
    var canvas=document.getElementById(id);
    context=canvas.getContext('2d');
    //   width=canvas.width;
    //   height=canvas.height;
    setInterval(Cir,100);
    i=0;j=400;

}
function Cir(){
    context.clearRect(0,0,400,400);
    context.fillStyle='green';
    context.fillRect(i,i,10,10);
    context.fillRect(j,i,10,10);
    i+=10;j-=10;
}
//绘制动画2
var context;
var width,height;
var i;
function draw(id){
    var canvas = document.getElementById(id);
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    context.fillStyle = "green";
    context.fillRect(0,0,width,height);
    setInterval(painting,100);
    i = 0;
}
function painting(){
//    context.fillStyle = "green";
//    context.fillRect(i,i,10,10);
//    context.fillRect(400-i,400-i,10,10);
//    context.fillRect(400-i,400-i,10,10);
//    context.fillRect(0,400-i,10,10);

    context.clearRect(10,10,width,height);
    context.fillStyle = "green";
    context.fillRect(i,20,10,10);
    i=i+20;
}

