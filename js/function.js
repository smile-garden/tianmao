function insertBefore(obj1,obj2){
    var parent=obj2.parentNode;
    parent.insertBefore(obj1,obj2)
}

function insertAfter(obj,endobj){
	var parent=endobj.parentNode;
	var next=getNext(endobj);
	if (next) {
		return parent.insertBefore(obj,next);
	}else{
		return parent.appendChild(obj);
	}

}

//节点属性 获得子节点的处理问题    (换行   注释)
function getChilds(obj){
	var childs=obj.childNodes;
    var arr=[];
	for (var i = 0; i < childs.length; i++) {
		//判断   不是注释  不是换行
		if (!((childs[i].nodeType==8)||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))) {
       arr.push(childs[i])
	};
  }
  return arr;
}

//用空字符串替换空格  正则
function trim(str){
     return str.replace(/^\s+|\s+$/g,"")
}


//第一个子节点
function getFirst(obj){
	return getChilds(obj)[0];
}

//获得最后一个子节点
function getLast(obj){
	var childs=getChilds(obj);
	return childs[childs.length-1];
}


//i是具体子节点的下标    任意一个
function getIndex(obj,i){
    return getChilds(obj)[i];
}


//获得下一个兄弟节点的引用
function getNext(obj){
	var next=obj.nextSibling;
	if (!next) {
    	return false;
    };
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
          next=next.nextSibling;
          if (!next) {
    	return false;
      }
	}
    return next;
    }


//获得上一个兄弟节点的引用
function getPre(obj){
	var next=obj.previousSibling;
	if (!next) {
    	return false;
    };
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
          next=next.previousSibling;
          if (!next) {
    	return false;
      }
	}
    return next;
    }



function $(selector,range){
   var range=range||document;
   if (typeof selector=="string") {
       if (selector.charAt(0)=="#") {
         return document.getElementById(selector.substr(1))
       }
       if (selector.charAt(0)==".") {
         return getClass(selector.substr(1),range)
       }
       if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)) {
         return range.getElementsByTagName(selector)
       }
   }else if (typeof selector=="function") {
      return window.onload=selector;
   }
   //创建元素节点
   if (/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)) {
         return document.createElement(selector.slice(1,-1))
       }
}




function getClass(classname,range){
   if (document.getElementsByClassName) {
   	return range.getElementsByClassName(classname)
   }else{
   	var all=range.getElementsByTagName('*');
   	var arr=[];
   	for (var i = 0; i < all.length; i++) {
   		// if(all[i].className==classname){
   			if (checkclass(all[i].className,classname)) {
   			arr.push(all[i]);
   		}
   	}
   	return arr;
   }
}


function checkclass(tagclass,aclass){
	var tg=tagclass.split(' ');
	for(var i=0;i<tg.length;i++){
		if (tg[i]==aclaaa) {
			return true;
		};
	}
	return false;
}


function getStyle(obj,arrt){
     if (obj.currentStyle) {
         return obj.currentStyle[arrt];
     }else{
      return getComputedStyle(obj,null)[arrt];
     }
}