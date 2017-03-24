/**
 * Created by 344 on 2016/6/26.
 */
//    console.log(String.prototype.slice)
//    console.log(Array.prototype.slice)
//    console.log(Node.ELEMENT_NODE)
//    console.log(Node.TEXT_NODE)
function convertArr(node){
    var arr=null;
    try{
        arr=Array.prototype.slice.apply(node.childNodes,0);
    }catch(e){
        arr=[];
        for(var i=0;i<node.childNodes.length;i++){
            arr.push(node.childNodes[i])
        }
    }
    return arr
}
var body=document.getElementsByTagName('body')[0];
var div=document.getElementById('div');
var div2=document.getElementById('div2');
console.log(body.nodeType)
console.log(body.nodeName)
console.log(body.className)
console.log(body.nodeValue);//null
console.log(body.firstChild.nodeValue)
console.log(body.childNodes[0].nodeValue)
console.log(body.childNodes.item(0).nodeValue)
console.log(body.childNodes)
arr=Array.prototype.slice.call(body.childNodes,0);
console.log(arr)

console.log(div.parentNode)
console.log(div.previousSibling)
console.log(div.nextSibling)
console.log(body.firstChild)
console.log(body.lastChild)
console.log(body.hasChildNodes(div))
console.log(body.ownerDocument)
var divNode=body.appendChild(div)
console.log(divNode)
body.insertBefore(div,div2)
text1=document.createTextNode('text1');
body.insertBefore(text1,null)
//console.log(text1.firstChild);//null
//body.replaceChild(text1,body.firstChild)
//body.replaceChild(text1,body.lastChild)
//body.removeChild(body.lastChild)
//text1.removeChild(text1.firstChild);//error

div3=div.cloneNode(true);
//div3.innerHTML='div clone'
body.appendChild(div3)
console.log(div3)
console.log(document.nodeType)
console.log(document.nodeName)
console.log(body.ownerDocument)
console.log(document.childNodes)
console.log(document.doctype.nodeName)
console.log(document)
console.log(typeof document.body)
console.log(document.title)
console.log(document.head)
console.log(document.URL)
console.log(document.domain)
console.log(document.referrer)
console.log(document.location);
var divTag=document.getElementsByTagName('div');
console.log(divTag)
//var name1=divTag.namedItem('name1');
var name1=divTag['name1']
name1=document.getElementsByName('name1')
console.log(name1)

var all=document.getElementsByTagName('*')

console.log(document.anchors)
console.log(document.links)
console.log(document.forms)
console.log(document.images)

console.log(document.implementation.hasFeature('xml','1.0'))
console.log(new Date().toString())
document.writeln(new Date())
document.write(new Date())
console.log(document.body.nodeName)
console.log(document.body.tagName)
console.log(document.body.tagName===document.body.nodeName)
console.log(div.id)
div.id='div1';
console.log(div1.style)
console.log(div1.getAttribute('style'))
console.log(div.className)
console.log(div.attributes)
console.log(div.attributes.getNamedItem('style').nodeValue)
console.log(div.attributes['style'].nodeValue)
console.log(div.attributes[0])
console.log(div.attributes['id'])
console.log(div.attributes[0].nodeName)
console.log(div.attributes[0].nodeValue)
//cosole.log(div.attributes.setNamedItem())
//div.attributes.removeNamedItem('class')

function outputAttibutes(element){
    var arr=[];
    for(var i=0;i<element.attributes.length;i++){
        if(element.attributes[i].specified){
            var name=element.attributes[i].nodeName;
            var value=element.attributes[i].nodeValue;
            arr.push(name+'='+'\''+value+'\'')
        }
    }
    var res=arr.join(' ');
    return res;
}
console.log(outputAttibutes(div));
//text2=document.createTextNode('text2');
//div2.appendChild(text2)

div2.firstChild.appendData('hello');

div2.firstChild.deleteData(0,15)
div2.firstChild.insertData(5,'hello')
div2.firstChild.replaceData(2,8,'world');
div2.firstChild.splitText(17)
//console.log(div2.firstChild.substringData(4,8))
console.log(div2.childNodes)
div2.firstChild.nodeValue='div2,<strong>world</strong>'
console.log(div2.childNodes)
div2.normalize()
console.log(div2.childNodes)

console.log(name1[0].firstChild.nodeValue)
console.log(name1[0].firstChild.data)
comment1=document.createComment('comment1')
name1[0].appendChild(comment1)
name1[0].firstChild.appendData('comment2')

function loadScript(url){
    var script=document.createElement('script');
    try{
        script.text='javascript text'
    }catch(e){
        script.appendChild(document.createTextNode('javascript text'))
    }
    script.type='text/javascript';
    script.src=url;
    document.body.appendChild(script)
}
loadScript('js/modernizr.custom.01336.js')
function loadStyle(url){
    var link=document.createElement('link');
    link.type='text/css';
    link.href=url;
    link.rel='stylesheet';
    var css="body{color:red;}"
    try{
        //link.appendChild(document.createTextNode(css))
    }catch(e){
        //link.text=css
        //style.stylesheet.cssText=css
        console.log(e)
    }
    document.head.appendChild(link);
}
//loadStyle('css/professional javascript3.css')
console.log(4)
function createTable(){
    var table=document.createElement('table');
    var thead=document.createElement('thead');
    var tbody=document.createElement('tbody');
    var tfoot=document.createElement('tfoot');
    table.appendChild(thead)
    thead.insertRow(0);
    for(var i=0;i<3;i++){
        thead.rows[0].insertCell(i);
        thead.rows[0].cells[i].appendChild(document.createTextNode('hello'))
    }
    for(var i=0;i<3;i++){
        tbody.insertRow(i);
        for(var j=0;j<3;j++){
            tbody.rows[i].insertCell(j);
            tbody.rows[i].cells[j].appendChild(document.createTextNode('hello'));
        }
    }
    table.appendChild(tbody);
    tfoot.insertRow(0);
    for(var i=0;i<3;i++){
        tfoot.rows[0].insertCell(i);
        tfoot.rows[0].cells[i].appendChild(document.createTextNode('hello'))
    }
    table.appendChild(tfoot);
    document.body.appendChild(table)
}
createTable();
var a=document.querySelector('body')
var a=document.querySelector('.divClass')
console.log(a)
var tr2=document.querySelector('.tr2')
td=tr2.querySelector('td')
td0=tr2.querySelectorAll('td')[0]
td=document.querySelectorAll('.tr2 td')
console.log(td);
function matchesSelector(element,selector){
    try{
        return element.matchesSelector(selector)
    }catch(e){}
    try{
        return element.mozMatchesSelector(selector)
    }catch(e){}
    try{
        return element.msMatchesSelector(selector)
    }catch(e){}
    try{
        return element.webkitMatchesSelector(selector)
    }catch(e){
        //alert('Not supported')
        throw new Error('Not supported.')
    }
}
console.log(matchesSelector(tr2,'.tr2'))
console.log(tr2.firstElementChild);//td
console.log(tr2.firstChild);//text
console.log(tr2.lastElementChild);
console.log(tr2.lastElementChild.previousElementSibling);
console.log(tr2.lastElementChild.previousSibling);//回车
console.log(tr2.lastElementChild.nextElementSibling);//null
console.log(tr2.childElementCount);//3
function elementTra(){
    //var i,len,child=tr2.firstChild;
    //while(child!=tr2.lastChild){
    //    if(child.nodeType==1){
    //        processChild(child)
    //    }
    //    child=child.nextSibling;
    //}
    var i,len,child=tr2.firstElementChild;
    while(child!=tr2.lastElementChild){
        processChild(child);
        child=child.nextElementSibling;
    }
}
//elementTra()
var classNames=document.querySelector('.class1');
//var classLists=classNames.className.split(' ');
////delete classLists[1]
//classLists.splice(1,1)
//console.log(classLists)
classNames.classList.remove('class2')
classNames.classList.add('class4')
classNames.className=classNames.classList['value']
classNames.classList.toggle('class5')
console.log(classNames.className)
console.log(classNames.classList)
console.log(classNames.classList.contains('class4'))
var btn=document.querySelector('input');
btn.focus()
console.log(document.activeElement===btn)
console.log(document.hasFocus())
window.onload=function(){
    console.log(document.readyState);//complete
    if(document.compatMode=='CSS1Compat'){
        console.log('Standards mode')
    }else if(document.compatMode=='BackCompat'){
        console.log('Quirks mode')
    }
}
//CSS1Compat BackCompat document.compatMode


console.log(document.charset)
console.log(document.defaultCharset)
console.log(btn.getAttribute('data-max'))
console.log(btn.dataset)
console.log(btn.dataset.min)
btn.dataset.good='5'
pre=document.createElement('pre')
classNames.appendChild(pre);
console.log(tr2.innerHTML)
classNames.insertAdjacentHTML('beforebegin','<p>hello beforebegin!</p>');
classNames.insertAdjacentHTML('afterbegin','<p>hello afterbegin!</p>');
classNames.insertAdjacentHTML('beforeend','<p>hello beforeend!</p>');
classNames.insertAdjacentHTML('afterend','<p>hello afterend!</p>')
//div2.scrollIntoView(true)
div2.scrollIntoView(false)
console.log(document.documentMode)
console.log(tr2.childNodes)
console.log(tr2.children)
console.log(tr2.childElementCount===tr2.children.length);
console.log(document.documentElement.contains(tr2));//true
console.log(document.documentElement.compareDocumentPosition(tr2));//20
console.log(tr2.innerText)
console.log(tr2.textContent)
//document.body.innerText=document.body.innerText
//tr2.scrollIntoviewIfNeeded()
//tr2.scrollByLines(5)
//tr2.scrollByPages(3)

//console.log(document.implementation.hasFeature(('Core','2.0')));
console.log(document.defaultView)
console.log(document.parentWindow)
console.log(document.parentWindow===window);//true
console.log(document.implementation)
console.log(tr2.isSameNode(tr2))
console.log(tr2.isEqualNode(tr2))
//console.log(document.body.isSupported('HTML','2.0'))
console.log(document.body.contentDocument);

console.log(div1.style);
console.log(div1.style[0]);
console.log(div1.style.cssText);
div1.style.cssText='background-color:orange;color:red;font-size:35px'
console.log(div1.style.length);
console.log(div1.style);
console.log(div1.style.getPropertyValue('color'))
console.log(div1.style['color'])
//console.log(div1.style.getPropertyCSSValue('color'))
div1.style.removeProperty('color');
div1.style.setProperty('color','red','')
//console.log(div1.style.parentRule);
//console.log(div1.style.getPropertyCSSValue('Color'));

var div1Style=document.defaultView.getComputedStyle(div1,null);
//var div1Style=window.getComputedStyle(div1,null);
//var div1Style=div1.currentStyle;
console.log(div1Style)
console.log(div1Style.length)
console.log(div1Style.width)
console.log(div1Style.lineHeight)
console.log(div1Style.borderBottom)
console.log(div1Style.height);
console.log(div1Style[1])

console.log(document.implementation.hasFeature('StyleSheets','2.0'));
console.log(document.styleSheets.length)
console.log(document.styleSheets)
console.log(document.styleSheets[1].href)
console.log(document.styleSheets[1].parentStyleSheet)
console.log(document.styleSheets[1].cssRules)
console.log(document.styleSheets[1].cssRules[0].cssText)
console.log(document.styleSheets[1].cssRules[0].selectorText)
console.log(document.styleSheets[1].cssRules[0].style)
console.log(document.styleSheets[1].cssRules[0].style.lineHeight)
console.log(document.styleSheets[1].cssRules[0].style.cssText)
//document.styleSheets[1].insertRule("body{font-family:'微软雅黑'}",0)
////document.styleSheets[1].addRule("body","font-family:微软雅黑",0)
//console.log(document.styleSheets[1].cssRules)
//console.log(document.styleSheets[1].deleteRule(0))
////console.log(document.styleSheets[1].removeRule(0))
console.log(div1.offsetHeight)
console.log(div1.offsetWidth)
console.log(div1.offsetLeft)
console.log(div1.offsetTop)
console.log(div1.offsetParent)
console.log(td0.offsetParent)
console.log(td0.parentNode)

function getElementLeft(element){
    var sum=element.offsetLeft;
    var parNode=element.offsetParent;
    while(parNode!=null){
        sum+=parNode.offsetLeft;
        parNode=parNode.offsetParent;
    }
    return sum;
}
console.log(div1.clientHeight)
console.log(div1.clientWidth)
console.log(div1.scrollHeight)
console.log(div1.scrollWidth)
console.log(div1.scrollTop)
console.log(div1.scrollLeft)
div1.scrollTop=40
console.log(div1.scrollLeft)
console.log(div1.offset)
console.log(document.implementation.hasFeature('Traversal','2.0'))
console.log(typeof document.createTreeWalker=='function')
console.log(typeof document.createNodeIterator=='function');
var filter={
    acceptNode:function(node){
        return node.tagName.toLowerCase()=='p'?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
    }
};
console.log(filter)
var iterator=document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT,filter,false);
console.log(iterator.nextNode())
console.log(iterator.nextNode())
console.log(iterator.nextNode())
console.log(iterator.previousNode())
console.log(iterator.previousNode())
console.log(iterator.previousNode())

var treeWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT,null,false);
//console.log(treeWalker.firstChild())
//console.log(treeWalker.nextNode())
//console.log(treeWalker.firstChild())
//console.log(treeWalker.nextSibling())
node=treeWalker.firstChild()
console.log(treeWalker.currentNode);

//while(node!=null){
//    console.log(node)
//    node=treeWalker.firstChild()
//}
console.log(document.implementation.hasFeature('Range','2.0'));
console.log(document.createRange)
var range1=document.createRange();
var range2=document.createRange();
range1.selectNode(div1);
range2.selectNodeContents(div1)
console.log(range1)
console.log(range1.startContainer)
console.log(range1.endContainer)
console.log(range1.startOffset)
console.log(range2)























