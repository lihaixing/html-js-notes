var canvas=document.getElementById('drawing');
var context=canvas.getContext('2d');
//原点在canvas画布的左上角
// 导出图像 调用imgUrl必须是同域下
var imgUrl=canvas.toDataURL('image/png');
// 填充和描边 可以是颜色、渐变、图像
context.strokeStyle='red';
context.fillStyle='red';
//矩形是唯一一种可以直接在2D上下文中绘制的形状
context.fillRect(10,10,50,50);
context.strokeRect(10,10,50,50);
context.clearRect(10,10,50,50);//使这一区域变透明

context.lineWidth=5;//可以是任意整数
context.lineGap='butt' //round square 可设置线条末端是平头、圆头、方头
context.lineJoin='round' //bevel miter 可设置线条相交是圆交、斜交、斜接


//绘制路径
context.beginPath();

//以(x,y)为圆心绘制一条弧线，弧线半径radius,起始和结束角度(用弧度表示)分别是startAngle和endAngle,最后一个参数表示是否按逆时针方向计算，false表示顺时针
context.arc(x,y,radius,startAngle,endAngle,conterclockwise);
//从上一点开始绘制弧线，到(x2,y2)为止，并且以给定的半径radius通过(x1,y1);
context.arcTo(x1,y1,x2,y2,radius);
//从上一点绘制一条曲线，到(x,y)为止，并且以(c1x,c1y)和(c2x,c2y)为控制点
context.bezierCurveTo(c1x,c1y,c2x,c2y,x,y);
//从上一点绘制一条直线，到(x,y)为止
context.lineTo(x,y);
//将绘图游标移动到(x,y),不画线
context.moveTo(x,y);
//从上一点绘制一条二次曲线，到(x,y)为止，并且以(cx,cy)作为控制点
context.quadraticCurveTo(cx,cy,x,y);
//从点(x,y)开始绘制一个矩形，这个方法是绘制路径
context.rect(x,y,width,height);

// 接下来如果想绘制一条连接到路径起点的线条，可以调用closePath();
context.closePath();

context.fill();
context.stroke();
context.clip();//创建一个剪切区域，之后的绘图只能在此区域内进行

// 判断某一点是否在路径上
if(context.isPointInPath(100,100)){

}

// 绘制文本
context.font='bold 14px Arial';//文本样式、大小、字体
context.textAlign='start';//文本对齐方式 start end left right center 建议使用start和end
context.textBaseline='top';//文本的基线 top hanging middle alphabetic ideographic bottom
context.fillText('12',100,20)；//接收四个参数：文本字符串 x坐标 y坐标 最大像素宽度(可选)
context.strokeText();

//计算文本宽度
context.measureText('hello world');//返回文本对象，里面现在只有width这个属性 context.measureText('hello world').width 表示所占的宽度

// 变换
context.translate(x,y);//将原点移动到(x,y)
context.scale(scalX,scalY);//缩放图像
context.rotate(angle);//围绕原点旋转图像angle弧度
context.transform(m1_1,m1_2,m2_1,m2_2,dx,dy);//变换矩阵
context.setTransform(m1_1,m1_2,m2_1,m2_2,dx,dy);//将变换矩阵重置为默认状态，然后再调用transform

//变换 fillStyle strokeStyle在上下文中一直有效，除非更改
//如果你知道将来还会返回某组属性与变换的组合，可以调用save(),然后修改，需要返回时，restore()就可以，可以多次save()
context.save();
context.restore();

// 如何将一个图像绘制到画布上？有三种不同的参数组合
var image=document.images[0];
context.drawImage(image,10,10);//图片dom 画布x坐标 画布y坐标

//以上方法图片在画布上的大小是原始图片大小，若要改变图片大小
context.drawImage(image,10,10,100,100);//多传的两个参数是目标宽度和目标高度

// 如果想把图片的某个区域绘制到上下文中，则总共需传入9个参数
context.drawImage(image,原图像的x坐标,原图像的y坐标,原图像宽度,原图像高度,目标图像x坐标,目标图像y坐标,目标图像宽度,目标图像高度);

// image不仅可以是HTML<img>元素，也可以是canvas元素

//阴影 也是在绘制前设置
context.shadowColor='rgba(0,0,0,0.5)';
context.shadowOffsetX=5;
context.shadowOffsetY=5;
context.shadowBlur=4;

// 渐变
// 创建一个线性渐变
var gradient=context.createLinearGradient(30,30,70,70);//起点x坐标 起点y坐标 终点x坐标 终点y坐标
gradient.addColorStop(0,'white'); //0是开始的颜色 1是结束的颜色
gradient.addColorStop(1,'black');
// 运用渐变
context.fillStyle=gradient;

// 渐变应该和图形的坐标匹配才行，否则只能显示部分渐变
context.fillRect(50,50,50,50);
// 利用函数使得渐变和图形匹配
function createRectLinearGradient(context,x,y,width,height){
	return context.createLinearGradient(x,y,x+width,y+height);
}
//径向渐变 两个(55,55)是两个圆心，开始和结束，10和30是半径
var gradient=context.createRadialGradient(55,55,10,55,55,30);

// 模式 其实就是重复的图像 可用来填充或描边图形
// 第一个参数还可以是video元素或canvas元素
var img=document.images[0];
var pattern=content.createPattern(image,'repeat');//第二个参数可以是repeat repeat-x repeat-y no-repeat
context.fillStyle=pattern;
// 和渐变一样重复都是从(0,0)开始的，不是从图形开始绘制

// 使用图像数据
// 取得原始图像数据 从左上角(10,5)大小为50*50像素区域的数据
var imageData=context.getImageData(10,5,50,50);
//imageData有三个属性：width/height/data
//data是一个数据，保存着图像的每一个像素的数据
//第一个像素保存在第0~3个元素中，分别代表红、绿、蓝、透明度，每个元素值都在0~255之间
//实现灰度，只需将红绿蓝三个值的平均值赋给红绿蓝
var data=imageData.data;//取得数据
imageData.data=data2;//改变数据
context.putImageData(imageData,0,0);//将图像数据绘制到画布上

// 合成
context.globalAlpha=0.5;//绘制图形的透明度 默认是0,绘制完成后恢复为0

context.globalCompositeOperation='source-over';//表示后面绘制的图像与前面绘制的图像怎样结合
//source-over 默认，后绘制的图像位于先绘制图形的上方
//source-in 后绘制图形和先绘制图形重叠部分可见，其它部分透明
//source-out 不重叠部分可见，先绘制的图像完全透明
//source-atop 重叠部分可见，先绘制图形不受影响
//destination-over 后绘制位于先绘制下方，只有之前透明像素下的部分才可见
//destination-in 后绘制位于先绘制下方，两者不重叠部分完全透明
//destination-out 后绘制的图像擦掉与先绘制重叠的部分
//destination-atop 后绘制位于先绘制下方,两者不重叠的地方，先绘制的透明
//lighter 后绘制与先绘制重叠部分的值相加，使该部分变亮
//copy 后绘制的图像完全替代与之重叠的先绘制图像
//xor 后绘制与先绘制重叠的部分执行‘异或’操作

// 代码
context.fillStyle="#ff0000";
context.fillRect(10,10,50,50);
context.globalCompositeOperation="destination-over";
context.fillStyle='rgba(0,0,255,1)';
context.fillRect(30,30,50,50);


