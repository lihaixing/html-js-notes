/**
 * Created by 344 on 2016/6/30.
 */

var range1=document.createRange();
var range2=document.createRange();
var p1=document.querySelector('#p1');
var div1=document.querySelector('#div1');
range1.selectNode(p1);
range2.selectNodeContents(p1);
console.log(range1);
console.log(range2);
range1.setStartBefore(p1);
range1.setEndAfter(p1);
console.log(range1);
range1.setStart(p1.parentNode,1);
range1.setEnd(p1.parentNode,3);
console.log(range1);
console.log(p1.parentNode.childNodes);
var helloNode=p1.firstChild.firstChild;
var worldNode=p1.lastChild;
var range3=document.createRange();
range3.setStart(helloNode,2);
range3.setEnd(worldNode,3);
console.log(range3);
//range3.deleteContents();
//var fragment=range3.extractContents();
var fragment=range3.cloneContents();
p1.parentNode.appendChild(fragment);
var span=document.createElement('span');
span.innerHTML='Inserted text';
span.style.cssText='color:red;background-color:green;';
range3.insertNode(span);

range3.selectNode(helloNode);
var span2=document.createElement('span');
span2.style.cssText='color:red;background-color:orange;';
range3.surroundContents(span);
range2.collapse(true);
console.log(range2.collapsed);
console.log(range1.compareBoundaryPoints(Range.START_TO_START,range2));
console.log(range1.compareBoundaryPoints(2,range2));
var newRange=range2.cloneRange();
range1.detach();
range1=null;
console.log(range1);
//range1=document.body.createTextRange();//ie
////range1.selectNode(p1);
//console.log(range1.findText('hello'));
//console.log(range1.text);
//console.log(range1.findText('world',1));
//console.log(range1.text);
//range1.moveToElementText(p1);
//console.log(range1.text);
//console.log(range1.htmlText);
//console.log(range1.parentElement());
//range1.moveStart('word',2);
//range1.moveEnd('character',-1);
//console.log(range1.parentElement());
var input=document.querySelector('input');
//input.onclick=function(){
//    alert(this.value+'\n'+ event.type);
//
//};
//input.onclick=null;
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
    }
};
EventUtil.addHandler(input,'click',function(e){
    alert(this.tagName);//INPUT
    alert(e.bubbles)
    alert(e.detail)
});
//input.attachEvent("onclick",function(){
//    alert(this.tagName);
//});
//switch(e.type){
//    case 'click':
//        alert('clicked');
//    case 'mouseover':
//        e.target.style.backgroundColor='red';
//}
console.log(document.implementation.hasFeature('HTMLEvents','2.0'));
console.log(document.implementation.hasFeature('UIEvent','3.0'));

EventUtil.addHandler(window,'load',function(){
    var img=document.querySelector('img')
    EventUtil.addHandler(img,'load',function(e){
        e=EventUtil.getEvent(e);
        target=EventUtil.getTarget(e);
        //alert(target.src)
    });
    document.body.appendChild(img);
    img.src='images/mingxing.jpg';
});
console.log(new Image());
//EventUtil.addHandler(window,'unload',function(){
//    alert('unloaded');
//});
EventUtil.addHandler(window,'resize',function(e){
    //alert('Resized');
});
EventUtil.addHandler(window,'scroll',function(e){
    if(document.compatMode=='CSS!Compat'){
        //alert(document.documentElement.scrollTop)
    }else{
        //alert(document.body.scrollTop)
    }
});
console.log(document.body.clientLeft);
console.log(document.body.clientX);
//document.body.onclick=function(e){
//    alert(e.clientX+'\n'+ e.clientY);
//    alert(e.pageX+'\n'+ e.pageY);
//    console.log((document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY);
//    console.log(e.pageY);
//    alert(e.screenX+'\n'+ e.screenY);
//};
EventUtil.addHandler(p1,'click',function(e){
    e=EventUtil.getEvent(e);
    keys=[];
    if(e.shiftKey){
        keys.push('shift');
    }
    if(e.ctrlKey){
        keys.push('ctrl');
    }
    if(e.altKey){
        keys.push('alt');
    }
    if(e.metaKey){
        keys.push('meta');
    }
    alert(keys);
});
EventUtil.addHandler(p1,'mouseover',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    console.log(EventUtil.getRelatedTarget(e));
});
EventUtil.addHandler(div1,'mousedown',function(e){
    e=EventUtil.getEvent(e);
    console.log(EventUtil.getButton(e));
});
EventUtil.addHandler(div1,'click',function(e){
    console.log('detail:'+ e.detail);
});
EventUtil.addHandler(document,'mousewheel',function(e){
    e=EventUtil.getEvent(e);
    //var delta=(client.engine.opera&&client.engine.opera<9.5)?-e.wheelDelta: e.wheelDelta;
    //console.log(delta);
});
var input2=document.querySelectorAll('input')[1];
//EventUtil.addHandler(input2,'keydown',function(e){
//    console.log(e.keyCode);
//});
EventUtil.addHandler(input2,'keypress',function(e){
    console.log(e.keyCode);
    console.log(e.charCode);
    e=EventUtil.getEvent(e);
    console.log(EventUtil.getCharCode(e));
    console.log(String.fromCharCode(EventUtil.getCharCode(e)));
});
//EventUtil.addHandler(input2,'textInput',function(e){
//    e=EventUtil.getEvent(e);
//    console.log(e.data);
//    console.log(e.inputMethod);
//});
console.log(document.implementation.hasFeature('CompositionEvent','3.0'));
console.log(document.implementation.hasFeature('MutationEvent','2.0'));
//EventUtil.addHandler(window,'load',function(){
//    var ul=document.getElementById('ul');
//    EventUtil.addHandler(document,'DOMNodeRemoved',function(e){
//        console.log(e.type);
//        console.log(e.target);
//        console.log(e.relatedNode);
//    });
//    EventUtil.addHandler(ul.firstElementChild,'DOMNodeRemovedFromDocument',function(e){
//        console.log(e.type);
//        console.log(e.target);
//    });
//    EventUtil.addHandler(document,'DOMSubtreeModified',function(e){
//        console.log(e.type);
//        console.log(e.target);
//    });
//    ul.parentNode.removeChild(ul);
//});
EventUtil.addHandler(window,'load',function(){
    var ul=document.getElementById('ul');
    var li=document.createElement('li');
    li.innerHTML='inserted text';
    EventUtil.addHandler(document,'DOMNodeInserted',function(e){
        console.log(e.type);
        console.log(e.target);
        console.log(e.relatedNode);
    });
    EventUtil.addHandler(li.firstChild,'DOMNodeInsertedIntoDocument',function(e){
        console.log(e.type);
        console.log(e.target);
        console.log(e.relatedNode);
    });
    EventUtil.addHandler(document,'DOMSubtreeModified',function(e){
        console.log(e.type);
        console.log(e.target);
        console.log(e.relatedNode);
    });
    ul.appendChild(li);
});
EventUtil.addHandler(window,'load',function(){
    var myDiv=document.querySelector('#myDiv');
    var myMenu=document.querySelector('#myMenu');
    EventUtil.addHandler(myDiv,'contextmenu',function(e){
        e=EventUtil.getEvent(e);
        EventUtil.preventDefault(e);
        myMenu.style.top= e.pageY+'px';
        myMenu.style.left= e.pageX+'px';
        myMenu.style.visibility='visible';
    });
    EventUtil.addHandler(myDiv,'click',function(e){
        myMenu.style.visibility='hidden';
    });
});
EventUtil.addHandler(window,'beforeunload',function(e){
    e=EventUtil.getEvent(e);
    var message="I'm really going to miss you if you go.";
    e.returnValue=message;
    return message;
});
EventUtil.addHandler(document,'DOMContentLoaded',function(e){
    alert('content loaded');
});
EventUtil.addHandler(document,'readystatechange',function(e){
    if(document.readyState=='interactive'||document.readyState=='complete'){
        EventUtil.removeHandler(document,'readystatechange',arguments.callee);
        alert('Content loaded2');
    }
});
//EventUtil.addHandler(window,'load',function(){
//    var script=document.createElement('script');
//    EventUtil.addHandler(script,'readystatechange',function(e){
//        e=EventUtil.getEvent(e);
//        target=EventUtil.getTarget(e);
//        if(target.readyState=='loaded'||target.readyState=='completed'){
//            EventUtil.removeHandler(target,'readystatechange',arguments.callee);
//            alert('script loaded');
//        }
//    });
//    document.body.appendChild(script);
//    script.src='js/professional js4.js';
//});
(function(){
    var showCount=0;
    EventUtil.addHandler(window,'load',function(){
        alert('load fired')
    });
    //EventUtil.addHandler(window,'pageshow',function(e){
    //    showCount++;
    //    alert('show has been fired '+showCount+' times. Persisted? '+ e.persisted)
    //});
    EventUtil.addHandler(window,'pagehide',function(e){
        showCount++;
        alert('show has been fired '+showCount+' times. Persisted? '+ e.persisted)
    })
})();
EventUtil.addHandler(window,'hashchange',function(e){
    alert(e.oldURL+';'+ e.newURL);
    alert(location.hash);
});
var isSupported=('onhashchange' in window)&&(document.documentMode===undefined||document.documentMode>7);
console.log(isSupported);
EventUtil.addHandler(window,'load',function(e){
    var myDiv=document.getElementById('myDiv');
    myDiv.innerHTML='Current orientation is '+window.orientation;
    EventUtil.addHandler(window,'orientationchange',function(e){
        myDiv.innerHTML='Current orientation is '+window.orientation;
    })
});
EventUtil.addHandler(window,'MozOrientation',function(e){
    console.log(e.x+';'+ e.y+';'+ e.z);
});
EventUtil.addHandler(window,'deviceorientation',function(e){
    var myDiv=document.getElementById('myDiv');
    myDiv.style.webkitTransform='rotate('+Math.round(e.alpha)+'deg';
    console.log(e.alpha+ e.beta+ e.gamma+ e.absolute+ e.compassCalibrated);
});
EventUtil.addHandler(window,'devicemotion',function(e){
    console.log(e.acceleration.x+ e.accelerationIncludingGravity.y+ e.interval+ e.rotationRate.alpha);
});
function handleTouchEvent(e){
    if(e.touches.length===1){
        var myDiv=document.getElementById('myDiv');
        switch (e.type){
            case 'touchstart':
                myDiv.innerHTML='Touch started ('+ e.touches[0].clientX;
                break;
            case 'touchend':
                myDiv.innerHTML='<br>Touch ended ('+ e.changedTouches[0].pageX;
                break;
            case 'touchmove':
                e.preventDefault();//×èÖ¹¹ö¶¯
                myDiv.innerHTML='<br>Touch moved ('+ e.changedTouches[0].screenX;
                break;
        }
    }
}
EventUtil.addHandler(document,'touchstart',handleTouchEvent);
EventUtil.addHandler(document,'touchend',handleTouchEvent);
EventUtil.addHandler(document,'touchmove',handleTouchEvent);
function handleGestureEvent(e){
    var myDiv=document.getElementById('myDIv');
    switch(e.type){
        case 'getsturestart':
            myDiv.innerHTML='Gesture started ('+ e.rotation+ e.scale;
            break;
        case 'getstureend':
            myDiv.innerHTML='Getsture ended ('+e.rotation+ e.scale;
            break;
        case 'getsturechange':
            myDiv.innerHTML='Getsture changed ('+e.rotation+ e.scale;
            break;
    }
}
var myLinks=document.getElementById('myLinks');
EventUtil.addHandler(myLinks,'click',function(e){
    e=EventUtil.getEvent(e);
    target= EventUtil.getTarget(e);
    //console.log(target);//×ÓÔªËØ
    //console.log(e.currentTarget);//myLinks
    //console.log(this);//myLinks
    switch(target.id){
        case 'goSomewhere':
            location.href='http://www.wrox.com';
            break;
        case 'doSomething':
            document.title="I changed the document's title";
            break;
        case 'sayHi':
            alert('hi');
            break;
    }
});
var btn=document.querySelector('#myBtn');
var myDiv2=document.querySelector('#myDiv2')
btn.onclick=function(){
    btn.onclick=null;
    myDiv2.innerHTML='Processing...';
};
function creatEvent(element){
    var e=document.createEvent('MouseEvents');
    e.initMouseEvent('click',true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
    element.dispatchEvent(e);
}
//creatEvent(btn);
function createEvent2(element){
    //if(document.implementation.hasFeature('KeyboardEvents','3.0')){
    //    var e=document.createEvent('KeyboardEvent');
    //    e.initKeyboardEvent('keydown',true,true,document.defaultView,'a',0,'Shift',0);
    //}else{}
    //    e=document.createEvent('KeyEvents');
    //    e.initKeyEvent('keypress',true,true,document.defaultView,false,false,false,false,65,65);

    try{
        var e=document.createEvent('KeyboardEvent');
        e.initKeyboardEvent('keydown',true,true,document.defaultView,'a',0,'Shift',0);
        element.dispatchEvent(e);
        return
    }catch(e){};
    try{
        e=document.createEvent('KeyEvents');
        e.initKeyEvent('keypress',true,true,document.defaultView,false,false,false,false,65,65);
        element.dispatchEvent(e);
        return
    }catch(e){};
    try{
        var e=document.createEvent('Events');
        e.initEvent('keydown',true,true);
        e.view=document.defaultView;
        e.altKey=false;
        e.ctrlKey=false;
        e.shiftKey=false;
        e.metaKey=false;
        e.keyCode=65;
        //e.charCode=65;
        element.dispatchEvent(e);
        return
    }catch(e){};
    element.dispatchEvent(e);
}
createEvent2(input);
function createEvent3(element){
    e=document.createEvent('MutationEvents');
    e.initMutationEvent('DOMNodeInserted',true,false,someNode,'','','',0);
    element.dispatchEvent(e)
}
function createEvent4(element){
    EventUtil.addHandler(element,'myevent',function(e){
        alert(e.detail);
    });
    EventUtil.addHandler(document,'myevent',function(e){
        alert(e.detail)
    });
    if(document.implementation.hasFeature('CustomEvents','3.0')){
        e=document.createEvent('CustomEvent');
        e.initCustomEvent('myevent',true,false,'hello world!');
        element.dispatchEvent(e)
    }
}
//createEvent4(myDiv2)
function createEventIe(element){
    e=document.createEventObject();
    e.screenX=100;
    e.clientX=0;
    e.altKey=false;
    element.fireEvent('onclick',e);
}








