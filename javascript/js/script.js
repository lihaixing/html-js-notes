/**
 * Created by 344 on 2016/6/12.
 */
if(!Modernizr.inputtypes.date){
    alert('a')
}
if(!Modernizr.input.placeholder){
    alert('a')
}
addLoadFun(nineNine);
function nineNine(){
    var table=document.createElement('table');
    var script=document.getElementsByTagName('script')[0];
    var body=document.getElementsByTagName('body')[0];
    body.appendChild(table);
    //script.parentNode.insertBefore(table,script);
    for(var i=1;i<=9;i++){
        var tr=document.createElement('tr');
        for(var j=1;j<=i;j++){
            var td=document.createElement('td');
            td.innerHTML=i+'&times'+j+'='+i*j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.setAttribute('class','table');
}
function addInputPlaceholder(inputNode){
    inputNode.onfocus=function(){
        var text=this.placeholder||this.getAttribute('placeholder');
        if(this.value==text){
            this.value='';
        }
    }
    inputNode.onblur=function(){
        var text=this.placeholder||this.getAttribute('placeholder');
        if(this.value==''){
            this.value=text;
        }
    }
    inputNode.onblur();
}
addLoadFun(addVideoControl)
function addVideoControl(){

    var videoWrapper=document.getElementsByClassName('videoWrapper')[0];
    var video=videoWrapper.getElementsByTagName('video')[0];
    var control=document.createElement('button');
    control.setAttribute('title','play');
    control.innerHTML='&#x25BA';
    video.removeAttribute('controls');
    div=document.createElement('div');
    div.appendChild(control)
    videoWrapper.parentNode.insertBefore(div,videoWrapper);

    control.onclick=function(){
        if(video.ended){
            video.currentTime=0;
        }
        if(video.paused){
            video.play();
        }
        else{
            video.pause();
        }
    }
    video.addEventListener('play',function(){
        control.innerHTML='&#x2590;&#x2590;';
        control.setAttribute('title','pause');
    },false);
    video.addEventListener('pause',function(){
        control.innerHTML='&#x25BA;';
        control.setAttribute('title','play');
    },false);
    video.addEventListener('ended',function(){
        video.pause();
    },false);

}
addLoadFun(function(){
    convertToGS(document.getElementById('avatar'));
})
function convertToGS(img){
    if(!Modernizr.canvas){
        return
    }
    //创建原始彩色版
    img.color=img.src;
    //创建灰度版
    img.grayscale=createGSCanvas(img);

    img.onmouseover=function(){
        this.src=this.color;
    }
    img.onmouseout=function(){
        this.src=this.grayscale;
    }
    img.onmouseout();
}
function createGSCanvas(img){
    var canvas=document.createElement('canvas');
    canvas.width=img.width;
    canvas.height=img.height;
    var cfx=canvas.getContext('2d');
    cfx.drawImage(img,0,0);
    var imageData=cfx.getImageData(0,0,img.width,img.height);
    var data=imageData.data;
    for(var i=0;i<data.length;i+=4){
        r=data[i];
        g=data[i+1];
        b=data[i+2];
        average=Math.floor((r+g+b)/3);
        data[i]=data[i+1]=data[i+2]=average;
    }
    imageData.data=data;
    cfx.putImageData(imageData,0,0);
    return canvas.toDataURL();
}
function draw(){
    var canvas=document.getElementById('canvas');
    if(canvas.getContext){
        var cfx=canvas.getContext('2d');
        cfx.beginPath();
        cfx.moveTo(120,32);
        cfx.bezierCurveTo(120,36.4,116.4,40,112,40);
        cfx.lineTo(8,40);
        cfx.bezierCurveTo(3.6,40,0,36.4,0,32);
        cfx.lineTo(0,8);
        cfx.bezierCurveTo(0,3.6,3.6,0,8,0);
        cfx.lineTo(112,0);
        cfx.bezierCurveTo(116.4,0,120,3.6,120,8);
        cfx.lineTo(120,32);
        cfx.closePath();
        cfx.fill();
        cfx.lineWidth=2;
        cfx.strokeStyle="rgb(255,255,255)";
        cfx.stroke();
    }
}
function drawImage(id){
    var canvas=document.getElementById(id);
    canvas.width=400;canvas.height=400;
    if(canvas.getContext){
        var tfx=canvas.getContext('2d');
        tfx.fillStyle='#f1f1f1';
        tfx.fillRect(0,0,400,400);
        tfx.lineWidth=8;
        tfx.fillStyle='blue';
        tfx.strokeStyle='red';
        tfx.strokeRect(10,10,30,30);
        tfx.fillRect(10,10,30,30);
        tfx.clearRect(20,20,10,10)
        tfx.beginPath();
        tfx.arc(100,100,50,0,0.5*Math.PI,false)
        tfx.arcTo(80,125,40,60,60)
        tfx.moveTo(200,200);
        tfx.bezierCurveTo(300,200,300,300,200,300);
        tfx.lineTo(50,50);
        tfx.moveTo(150,150);
        tfx.quadraticCurveTo(250,225,150,300)
        tfx.rect(200,200,100,100)

        tfx.closePath()
        tfx.clip()

        tfx.stroke()
        tfx.fill()

    }
}


//slide=document.getElementById('slideshow');
//console.log(canvas)
//console.log(slide)
//console.log(Math.ceil(3.1))
//console.log(Math.floor(3.9))
//console.log(Math.round(3.5))

addLoadFun(prepareSlideshow)
function prepareSlideshow(){
    var slide=document.getElementById('slideshow');
    slide.style.width='192px';
    slide.style.height='168px';
    slide.style.overflow='hidden';
    slide.style.position='relative';
    var preview=document.getElementById('preview');
    preview.style.position='absolute';
    preview.style.top='0px';
    preview.style.left='0px';
    var ul2=document.getElementById('ul2');
    var a=ul2.getElementsByTagName('a');
    a[0].onmouseover=function(){
        return !moveMessage('preview',0,0,10);
    };
    a[1].onmouseover=function(){
        return !moveMessage('preview',-192,0,10);
    };
    a[2].onmouseover=function(){
        return !moveMessage('preview',-384,0,10);
    }
}

addLoadFun(function(){
    moveMessage('list',300,300,20)
});
function moveMessage(id,final_x,final_y,interval){
    var list=document.getElementById(id);
    var left=parseInt(list.style.left);
    var top=parseInt(list.style.top);
    if(list.movement){
        clearTimeout(list.movement)
    }
    var dist=0;
    if(left==final_x&&top==final_y){
        return true;
    }
    if(left<final_x){
        dist=Math.ceil((final_x-left)/10);
        left+=dist
    }
    if(left>final_x){
        dist=Math.ceil((left-final_x)/10);
        left-=dist;
    }
    if(top<final_y){
        dist=Math.ceil((final_y-top)/10);
        top+=dist
    }
    if(top>final_y){
        dist=Math.ceil((top-final_y)/10);
        top+=dist
    }
    list.style.left=left+'px';
    list.style.top=top+'px';
    var repeat="moveMessage('"+id+"',"+final_x+","+final_y+","+interval+")";
    list.movement=setTimeout(repeat,interval);
}
function addAbbrFun(){
    var abbr=document.getElementsByTagName('abbr');
    var arr=[];
    for(var i=0;i<abbr.length;i++){
        var text=abbr[i].firstChild.nodeValue;
        arr[text]=abbr[i].getAttribute('title')
    }
    var body=document.getElementsByTagName('body')[0];
    var dl=document.createElement('dl');
    for(var prop in arr){
        var dt=document.createElement('dt');
        var dd=document.createElement('dd');
        var title=document.createTextNode(prop);
        var content=document.createTextNode(arr[prop]);
        dl.appendChild(dt);
        dl.appendChild(dd);
        dt.appendChild(title);
        dd.appendChild(content);
    }
    body.appendChild(dl);
}
function addClass(node,classname){
    if(node.className){
        node.className+=''+classname;
    }else{
        node.className=classname;
    }
}
function styleHeaderSiblings(node){
    var headers=node.getElementsByTagName('h1');
    for(var i=0;i<headers.length;i++){
        var ele=getNextElement(headers[i]);
        //ele.style.fontWeight='bold';
        //ele.style.fontSize='1.2em';
        addClass(ele,'intro')
    }
}
function highlightRows(node){
    var tr=node.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++){
        tr[i].onmouseover=function(){
            this.style.fontWeight='bold';
        };
        tr[i].onmouseout=function(){
            this.style.fontWeight='normal';
        }
    }
}
addLoadFun(stripeTable);
function stripeTable(){
    var table=document.getElementsByTagName('table');
    for(var i=0;i<table.length;i++){
        var tr=table[i].getElementsByTagName('tr');
        var odd=false;
        for(var j=0;j<tr.length;j++){
            if(odd==true){
//                    tr[j].style.backgroundColor='red';
                tr[j].className+='tr';
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

var nodeBody=document.getElementById('test');
console.log(getNextElement(nodeBody))
console.log(getAllElement(nodeBody))
//得到节点的下一个元素
function getNextElement(node){
    if(node.nextSibling){
        if(node.nextSibling.nodeType==1){
            return node.nextSibling;
        }else{
            return arguments.callee(node.nextSibling)
        }
    }else{
        return null;
    }

}
//console.log(document.getElementsByTagName('body')[0].getElementsByTagName('*'))

//得到元素节点的全部直接子元素
function getAllElement(node){
    var elementNodes=[];
    for(var i=0;i<node.childNodes.length;i++){
        if(node.childNodes[i].nodeType==1){
            elementNodes.push(node.childNodes[i])
        }
    }
    return elementNodes;
}




//    new ActiveXObject('Msxml2.XMLHTTP.6.0')
//    new ActiveXObject('Msxml2.XMLHTTP.3.0')
//    new ActiveXObject('Msxml2.XMLHTTP')
//    new XMLHttpRequest();
//    onreadystatechange status responseText readyState==4

//    getContent();
//异步得到内容
function getContent(){
    var request=getHttpObject();
    if(request){
        request.open('GET','example.txt',true);
        request.onreadystatechange=function(){
            if(request.readyState==4&&request.status==200){
//                document.getElementsByTagName('body')[0].appendChild(document.createTextNode(request.responseText));
                var div=document.createElement('div');
                div.setAttribute('id','exm');
                document.getElementsByTagName('body')[0].appendChild(div);
                var exm=document.getElementById('exm');
                exm.innerHTML=request.responseText;
            }
        };
        request.send(null);
    }else{
        alert('您的浏览器不支持ajax...')
    }
}


function getHttpObject(){
    if(typeof XMLHttpRequest=='undefined'){
        try{
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
        }catch(e){
            try{
                return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            }catch(e){
                try{
                    return new ActiveXObject('Msxml2.XMLHTTP');
                }catch(e){
                    return false;
                }
            }
        }
    }else{
        return new XMLHttpRequest();
    }
}
addLoadFun(Gallery);
function addLoadFun(func){
    var oldFunc=window.onload;
    window.onload=function(){
        if((typeof oldFunc)!=='function'){
            func();
        }else{
            oldFunc();
            func();
        }
    }

}
function insertAfter(newElement,targetElement){
    var parentElement=targetElement.parentNode;
    if(parentElement.lastChild==targetElement){
        parentElement.appendChild(newElement)
    }else{
        parentElement.insertBefore(newElement,targetElement.nextSibling)
    }
}
function Gallery(){
    var img=document.createElement('img');
    var description=document.createElement('p')
    var body=document.getElementsByTagName('body');
//        body[0].appendChild(img);
//        body[0].appendChild(description);
    var ul2=document.getElementById('ul2');
    insertAfter(img,ul2);
    insertAfter(description,img);
    img.setAttribute('id','pic')
    img.setAttribute('src','')
    img.setAttribute('alt','my image gallery')
    description.setAttribute('id','text')
    var pic=document.getElementById('pic')
    var text=document.getElementById('text')
    var textNode=document.createTextNode('choose an image.');
    text.appendChild(textNode);

    var a=ul2.getElementsByTagName('a')
    for(var i=0;i<a.length;i++){
        a[i].onclick=function(){
            showPic(this);
            return false;
        }
    }
}

function showPic(node){
    var href=node.getAttribute('href');
    pic.setAttribute('src',href);
    var source=node.getAttribute('title');

//        text.childNodes[0].nodeValue=source;

//        var source2=document.createTextNode(source);
//        text.appendChild(source2);
//
//        p=document.createElement('p')
//        text.insertBefore(p,source2)
    text.innerHTML=source
}
function winOpen(url){
    window.open(url,'百度','width=400,height=400');
}