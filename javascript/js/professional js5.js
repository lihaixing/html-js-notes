/**
 * Created by 344 on 2016/7/2.
 */
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
//取得表单的方法
//var form=document.getElementById('form');
var firstForm=document.forms[0];
//var myForm=document.forms['form2'];//根据name属性
console.log(firstForm.length);//2
//EventUtil.addHandler(firstForm,'submit',function(e){
//    e=EventUtil.getEvent(e);
//    EventUtil.preventDefault(e);
//    //console.log(EventUtil.getTarget(e));//form
//});
//firstForm.submit();
//EventUtil.addHandler(firstForm,'reset',function(e){
//    e=EventUtil.getEvent(e);
//    EventUtil.preventDefault(e);
//});
//firstForm.reset();

//表单中的元素访问
//var field1=firstForm.elements[2];
var field1=firstForm.elements['textInput1'];//如果几个元素name一样,就是一个nodeList
console.log(field1.form);
//field1.disabled=true;
//field1.readOnly=true;
console.log(field1.type);
console.log(field1.tabIndex);
//field1.focus();
//field1.type='checkbox';
EventUtil.addHandler(firstForm,'submit',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    var btn=target.elements['submit-btn'];
    btn.disabled=true;
});
var button=document.querySelector('button');
console.log(button.type);//submit
var select=document.querySelector('select');
console.log(select.type);//select-one
EventUtil.addHandler(window,'load',function(){
    console.log(field1.autofocus);
    if(!field1.autofocus){
        field1.focus();
    }
});
EventUtil.addHandler(field1,'focus',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    if(target.style.backgroundColor!='red'){
        target.style.backgroundColor='yellow';
    }
    target.select();
});
EventUtil.addHandler(field1,'blur',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    if(/[^\d]/.test(target.value)){
        target.style.backgroundColor='red';
    }else{
        target.style.backgroundColor='';
    }
});
EventUtil.addHandler(field1,'change',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    if(/[^\d]/.test(target.value)){
        target.style.backgroundColor='red';
    }else{
        target.style.backgroundColor='';
    }
});
EventUtil.addHandler(field1,'select',function(e){
    console.log(getSelectedText(field1));
    //alert('Text is selected!');
});
function getSelectedText(element){
    if(typeof element.selectionStart=='number'){
        return element.value.substring(element.selectionStart,element.selectionEnd)
    }else if(document.selection){
        return document.selection.createRange().text;
    }
}
var textarea=document.querySelector('textarea');
function selectSomeText(element,start,end){
    if(element.setSelectionRange){
        textarea.setSelectionRange(start,end);
    }else{
        var range=element.createTextRange();
        range.collapse(true);
        range.moveStart('character',start);
        range.moveEnd('character',end);
        range.select();
    }
}
selectSomeText(textarea,1,6);
EventUtil.addHandler(field1,'keypress',function(e){
    e=EventUtil.getEvent(e);
    //EventUtil.preventDefault(e);//屏蔽默认行为
    var charCode=EventUtil.getCharCode(e);
    if(!/\d/.test(String.fromCharCode(charCode))&&charCode>9&&!e.ctrlKey){
        EventUtil.preventDefault(e);
    }
});
EventUtil.addHandler(field1,'paste',function(e){
    data=EventUtil.getClipboardText(e);
    if(!/^\d*$/.test(data)){
        EventUtil.preventDefault(e);
    }
});
(function(){
    function tabForward(e){
        e=EventUtil.getEvent(e);
        target=EventUtil.getTarget(e);
        if(target.value.length===target.maxLength){
            elements=target.form.elements;
            for(var i= 0,len=elements.length;i<len;i++){
                if(target===elements[i]){
                    if(elements[i+1]){
                        elements[i+1].focus();
                    }
                }
            }
        }
    }
    var tel1=document.getElementById('textTel1');
    var tel2=document.getElementById('textTel2');
    var tel3=document.getElementById('textTel3');
    EventUtil.addHandler(tel1,'keyup',tabForward);
    EventUtil.addHandler(tel2,'keyup',tabForward);
    EventUtil.addHandler(tel3,'keyup',tabForward);
})();
console.log('required' in document.createElement('input'));
var numInput=document.getElementById('Num');
//EventUtil.addHandler(numInput,'keypress',function(e){
//    e=EventUtil.getEvent(e);
//    target=EventUtil.getTarget(e);
//    target.stepUp(10);
//})
console.log('pattern' in document.createElement('input'));
var patInput=document.getElementById('patInput');
EventUtil.addHandler(patInput,'blur',function(e){
    e=EventUtil.getEvent(e);
    var target=EventUtil.getTarget(e);
    //if(!target.checkValidity()){
    //    alert('valid');
    //}
    //if(target.validity.patternMismatch){
    //    alert('pattern is not matched.')
    //}
    //if(target.validity.rangeOverflow){
    //    alert('number is too large.');
    //}
    //if(target.validity.rangeUnderflow){
    //    alert('number is too small.')
    //}
    //if(target.validity.typeMismatch){
    //    alert('type was error.')
    //}
    //if(target.validity.valueMissing){
    //    alert('value is missing.')
    //}
    if(!target.validity.valid){
        alert('value is invalid.');
    }
});

console.log(document.forms[0].checkValidity());
var select=document.querySelector('select');
console.log(select.value);//3
console.log(select.options);
console.log(select.options.selectedIndex);
console.log(select.selectedIndex);
console.log(select.size);
//select.remove(2)
console.log(select.options[0].value);
console.log(select.options[0].text);
function getSelectedOptions(select){
    var option=select.options;
    var selectArr=[];
    for(var i= 0,len=option.length;i<len;i++){
        if(option[i].selected){
            selectArr.push(option[i]);
        }
    }
    return selectArr;
}
EventUtil.addHandler(select,'blur',function(e){
    e=EventUtil.getEvent(e);
    target=EventUtil.getTarget(e);
    //alert(target.selectedIndex);
    //alert(target.value);
    //alert(getSelectedOptions(select));
});
var newOption=new Option('Option text','optionValue');
//select.add(newOption,undefined);
//select.appendChild(newOption);
select.insertBefore(newOption,select.options[2]);
//select.options[1]=null
console.log(document.forms[0].elements.length)
console.log(select.type);
checkbox=document.querySelector('#checkbox');
console.log(checkbox.value);
EventUtil.addHandler(document.forms[0],'submit',function(e){
    e=EventUtil.getEvent(e);
    var target=EventUtil.getTarget(e);
    var element=target.elements;
    var searchArr=[];
    for(var i=0;i<element.length;i++){
        var value=element[i].value||element[i].text
        searchArr.push(encodeURIComponent(element[i].name)+'='+encodeURIComponent(value));
    }
    alert(searchArr.join('&'));
});
EventUtil.addHandler(window,'load',function(){
    frames['richedit'].document.designMode='on';
    frames['richedit'].document.execCommand('createlink',false,"http://www.wrox.com");
});
document.execCommand('bold',false,null);
console.log(frames['richedit'].document.queryCommandEnabled('backcolor'));//false
console.log(document.queryCommandEnabled('fontsize'));//false
var selection=frames['richedit'].getSelection();
console.log(selection);
var selectRange=selection.getRangeAt(1);
console.log(selectRange);










