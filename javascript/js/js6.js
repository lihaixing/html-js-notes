/**
 * Created by 344 on 2016/7/4.
 */
var drawing=document.getElementById('drawing');
if(drawing.getContext){
    var image=document.createElement('img');
    var imgURI=drawing.toDataURL('image/png');
    image.src=imgURI;
    document.body.appendChild(image);

    var context=drawing.getContext('2d');
    //context.fillStyle='#f00';
    //context.fillRect(10,10,50,50);
    //context.fillStyle='rgba(0,0,255,0.5)';
    //context.fillRect(30,30,50,50);
    //context.clearRect(40,40,10,10);

    //context.lineWidth=5;//默认是1
    //context.lineJoin='bevel';//round圆交，bevel斜交，miter斜接
    //context.strokeStyle='#f00';
    //context.strokeRect(10,10,50,50);
    //context.strokeStyle='rgba(0,0,255,0.5)';
    //context.strokeRect(30,30,50,50);

    context.lineWidth=1;
    //context.lineJoin='round';
    //context.lineCap='square';//butt平头，round源头，square方头
    context.beginPath();
    context.arc(100,100,95,0,2*Math.PI,false);
    context.moveTo(185,100);
    context.arc(100,100,85,0,2*Math.PI,false);
    context.moveTo(100,100);
    context.lineTo(100,20);
    context.moveTo(100,100);
    context.lineTo(30,100);
    context.stroke();
    context.font='bold 14px Arial';
    context.textAlign='center';//start end left right center
    context.textBaseline='hanging';//top hanging middle alphabetic bottom
    context.fillText('12',100,20);
    context.textAlign='end';
    context.textBaseline='middle';
    context.fillText('9',30,100)
}
var drawing1=document.getElementById('drawing1');
if(drawing1.getContext){
    var context1=drawing1.getContext('2d');
    context1.moveTo(10,10);
    context1.bezierCurveTo(40,20,40,60,70,70);
    context1.moveTo(10,30);
    context1.quadraticCurveTo(30,90,70,90);
    context1.moveTo(10,80);
    context1.rect(10,80,50,70);
    context1.moveTo(100,10);
    context1.arcTo(150,150,190,130,20);
    context1.stroke();
    if(context1.isPointInPath(10,30)){
        //alert('Point(10,30) is in the path.');
    }else{
        alert('no');
    }
}
var drawing2=document.getElementById('drawing2');
if(drawing2.getContext){
    var context2=drawing2.getContext('2d');
    context2.strokeRect(10,10,140,140);
    var fontSize=100;
    context2.font=fontSize+'px Arial';
    while(context2.measureText('Hello world!').width>140){
        fontSize--;
        context2.font=fontSize+'px Arial';
    }
    context2.textBaseline='top';
    context2.fillText('Hello world!',10,10);
    context2.fillText('Font size is '+fontSize+'px',10,50);
    context2.fillText('Hello world!',10,100,100);//使得文本压缩
}
var drawing3=document.getElementById('drawing3');
if(drawing3.getContext){
    var context3=drawing3.getContext('2d');
    context3.beginPath();
    context3.arc(100,100,95,0,2*Math.PI,false);
    context3.moveTo(185,100);
    context3.arc(100,100,85,0,2*Math.PI,false);
    context3.translate(100,100);//这三个都放在前边，只影响以后的操作，不影响前面的
    context3.rotate((Math.PI)/4);
    context3.scale(0.5,0.5);
    context3.moveTo(0,0);
    context3.lineTo(0,-75);
    context3.moveTo(0,0);
    context3.lineTo(-55,0);
    context3.stroke();
}
var drawing4=document.getElementById('drawing4');
if(drawing4.getContext){
    var context4=drawing4.getContext('2d');

    context4.strokeStyle='blue';
    context4.lineWidth='10';
    context4.save();
    context4.lineWidth='6';
    context4.strokeStyle='red';
    context4.save();
    context4.lineWidth='2';
    context4.strokeStyle='yellow';
    context4.beginPath();
    context4.moveTo(100,5);
    context4.arcTo(100,100,150,150,30);
    context4.stroke();
    context4.restore();
    context4.beginPath();
    context4.moveTo(5,5);
    context4.lineTo(190,190);
    context4.stroke();
    //context4.moveTo(5,100);
    //context4.bezierCurveTo(50,150,150,50,195,100);
    context4.restore();
    context4.beginPath();
    context4.moveTo(190,5);
    context4.quadraticCurveTo(100,100,190,190);
    //context4.moveTo(100,10);
    //context4.arc(100,100,90,0,2*Math.PI,false);
    context4.stroke();
}

var drawing5=document.getElementById('drawing5');
if(drawing5.getContext) {
    var context5 = drawing5.getContext('2d');
    context5.shadowColor='rgba(0,0,0,0.5)';
    context5.shadowOffsetX=10;
    context5.shadowOffsetY=10;
    context5.shadowBlur=4;
    var image=document.images[0];
    //context5.drawImage(image,10,10);//起点坐标 图像大小与原图像相同
    //context5.drawImage(image,10,10,150,150);//加上目标宽度和高度，图像大小与原图像不同
    context5.drawImage(image,50,50,100,100,10,10,150,150);//再加四个参数，原图像的起点坐标和宽度高度，放在前面，选取了部分图像
    context5.drawImage(drawing4,50,50,100,100,10,10,150,150);//也可以是canvas元素
}
var drawing6=document.getElementById('drawing6');
if(drawing6.getContext) {
    var context6 = drawing6.getContext('2d');

    var gradient1=context6.createLinearGradient(10,10,190,190);
    gradient1.addColorStop(0,'blue');
    gradient1.addColorStop(1,'red');
    var gradient2=context6.createLinearGradient(190,10,10,190);
    gradient2.addColorStop(0,'yellow');
    gradient2.addColorStop(1,'green');

    context6.fillStyle=gradient1;
    context6.fillRect(10,10,180,180);
    context6.fillStyle=gradient2;
    context6.textBaseline='top';
    context6.textAlign='start';
    var fontSize=20;
    context6.font=fontSize+'px Arial';
    while(context6.measureText('Hello World!').width<179){
        fontSize++;
        context6.font=fontSize+'px Arial';
    }
    context6.fillText('Hello World!',10,80);
}
var a=true;
//drawing6.onmouseover=
//drawing6.onmouseout=
function setImageHd(){
    var imageData=context6.getImageData(0,0,200,200);
    var data=imageData.data;
    for(var i=0;i<data.length;i+=4){
        var red=data[i];
        var green=data[i+1];
        var blue=data[i+2];
        var average=Math.floor((red+green+blue)/3);
        data[i]=data[i+1]=data[i+2]=average;
    }
    imageData.data=data;
    context6.putImageData(imageData,0,0);
}

function createRectLineGradient(context,x,y,width,height){
    return context.createLinearGradient(x,y,x+width,y+height);
}
var drawing7=document.getElementById('drawing7');
if(drawing7.getContext) {
    var context7 = drawing7.getContext('2d');
    var gradient1=context7.createRadialGradient(100,100,10,150,150,10);
    gradient1.addColorStop(0,'blue');
    gradient1.addColorStop(1,'black');
    context7.fillStyle=gradient1;
    context7.fillRect(100,100,50,50);

    var gradient2=context7.createRadialGradient(100,100,10,100,100,90);
    gradient2.addColorStop(0,'red');
    gradient2.addColorStop(1,'yellow');
    context7.fillStyle=gradient2;
    context7.beginPath();
    context7.moveTo(150,100);
    context7.arc(100,100,50,0,0.5*Math.PI,true);
    context7.lineTo(100,120);
    context7.arcTo(120,100,120,100,20);

    //context7.moveTo(120,100);
    //context7.arc(100,100,20,0,0.5*Math.PI,true);
    //context7.moveTo(150,100);
    //context7.lineTo(120,100);
    //context7.moveTo(100,150);

    context7.closePath();
    context7.fill();
}

//var drawing8=document.getElementById('drawing8');
//if(drawing8.getContext){
//    var image2=document.images[1];
//    var context8=drawing8.getContext('2d');
//    var pattern=context8.createPattern(drawing7,'repeat');
//    context8.fillStyle=pattern;
//    context8.fillRect(10,10,480,480);
//}
var drawing9=document.getElementById('drawing9');
if(drawing9.getContext) {
    var context9 = drawing9.getContext('2d');
    context9.fillStyle='red';
    context9.fillRect(0,0,150,150);
    //context9.globalAlpha=0.5;//透明度
    context9.globalCompositeOperation='xor';
    context9.fillStyle='blue';
    context9.fillRect(50,50,150,150);
}
//var buffer=new ArrayBuffer(20);
//console.log(buffer.byteLength);
//var view=new DataView(buffer,9,10);
//console.log(view.byteLength);
//console.log(view.byteOffset);


window.onmessage=function(e){
    if(e.origin=='professional javascript6.html'){
        alert(e.data)
        e.source.postMessage('Received!','pj6.html')
    }
};
var EventUtil={
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;
        }
    },
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }else{
            element['on'+type]=null;
        }
    },
    stopPropatation:function(e){
        if(e.stopPropatation){
            e.stopPropatation();
        }else if(e.cancelBubble){
            e.cancelBubble=true;
        }
    },
    getTarget:function(e){
        return e.target? e.target: e.srcElement;
    },
    preventDefault:function(e){
        if(e.preventDefault){
            e.preventDefault()
        }else{
            e.returnValue=false;
        }
    },
    getEvent:function(e){
        return e?e:window.event;
    },
    getRelatedTarget:function(e){
        try{
            return e.relatedTarget;
        }catch(e){};
        try{
            return e.fromElement;
        }catch(e){};
        try{
            return e.toElement;
        }catch(e){
            return null;
        };
    },
    getButton:function(e){
        if(document.implementation.hasFeature('MouseEvents','2.0')){
            return e.button;
        }else{
            switch(e.button){
                case 0:
                case 1:
                    return 0;
                case 2:
                    return 2;
                case 3:
                    return 0;
                case 4:
                    return 1;
                case 5:
                    return 0;
                case 6:
                    return 2;
                case 7:
                    return 0;
            }
        }
    },
    getWheelDelta:function(e){
        if(e.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5) ? -e.wheelDelta : e.wheelDelta;
        }else{
            return -e.detail*40;
        }
    },
    getCharCode:function(e){
        try{
            return e.charCode;
        }catch(e){
            return e.keyCode;
        }
    },
    getClipboardText:function(e){
        var clipboardData= e.clipboardData||window.clipboardData;
        return clipboardData.getData('text');
    },
    setClipboardText:function(e,value){
        if(e.clipboardData){
            e.clipboardData.setData('text/plain',value);
        }else if(window.clipboardData){
            window.clipboardData.setData('text',value);
        }
    }
};
var drag=document.getElementById('drag');
var drop=document.getElementById('drop');
EventUtil.addHandler(drop,'dragover',function(e){
    e=EventUtil.getEvent(e);
    EventUtil.preventDefault(e);
});
EventUtil.addHandler(drop,'dragenter',function(e){
    e=EventUtil.getEvent(e);
    EventUtil.preventDefault(e);
    e.dataTransfer.dropEffect='move';
});
EventUtil.addHandler(drop,'drop',function(e){
    e=EventUtil.getEvent(e);
    var target=EventUtil.getTarget(e);
    EventUtil.preventDefault(e);
    var data=e.dataTransfer.getData('text');
    target.appendChild(document.getElementById(data));
});
EventUtil.addHandler(drag,'dragstart',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    e.dataTransfer.setData('text', target.id);
    e.dataTransfer.effectAllowed='move';
});
