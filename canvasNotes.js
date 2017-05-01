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
