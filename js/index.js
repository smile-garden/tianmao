$(function(){
//banner轮播
   var ban=$('.bannert')[0];
   var as=$('a',ban);
   var list=$('.list')[0];
   var lis=$('li',list) 
   var index=0;
   as[0].style.opacity=1;
   lis[0].style.backgroundColor="#ededed";
   var t=setInterval(move,2000)
   function move(){
    index++;
    if (index==as.length) {index=0};
    for (var i = 0; i < as.length; i++) {
      as[i].style.opacity=0;
      lis[i].style.backgroundColor="";
    };
      as[index].style.opacity=1;
      lis[index].style.backgroundColor="#ededed";
   }
   ban.onmouseover=function(){
     clearInterval(t)
   }
   ban.onmouseout=function(){
      t=setInterval(move,2000)
   }
   for (var i = 0; i < lis.length; i++) {
     lis[i].index=i;
     lis[i].onmousemove=function(){
      for (var j = 0; j < as.length; j++) {
        as[j].style.opacity=0;
        lis[j].style.backgroundColor="";
      };
      as[this.index].style.opacity=1;
      lis[this.index].style.backgroundColor="#ededed";
     }
   };




//潮流五块
  var wu2=$('.wu2'); 

for (var i = 0; i < wu2.length; i++) {
       wu(wu2[i])
};

function wu(wu2){
    var out=$("a",wu2);
  for (var i = 0; i < out.length; i++) {
       out[i].onmouseover=function(){
              var img=$('img',this)[0];
              animate(img,{width:150,bottom:5},1000)
       }
       out[i].onmouseout=function(){
              var img=$('img',this)[0];
              animate(img,{width:140,bottom:10},1000)
       }
  }   
}    


//亲子时光左  左右移动
  var qins=$('.qinm');

  for (var i = 0; i < qins.length; i++) {
    qinzi(qins[i]);
  };

  function qinzi(qins){
    var as=$('a',qins);
    for (var i = 0; i < as.length; i++) {
      as[i].onmouseover=function(){
        var img=$('img',this)[0];
        animate(img,{marginLeft:-5})
      }
      as[i].onmouseout=function(){
        var img=$('img',this)[0];
        animate(img,{marginLeft:0})
      }
  }
}


//亲子右左右移动  
  var qiny=$('.qiny');

  for (var i = 0; i < qiny.length; i++) {
    shuqi(qiny[i]);
  };

  function shuqi(qiny){
    var as=$('a',qiny);
    for (var i = 0; i < as.length; i++) {
      as[i].onmouseover=function(){
        var img=$('img',this)[0];
        animate(img,{marginLeft:-5})
      }
      as[i].onmouseout=function(){
        var img=$('img',this)[0];
        animate(img,{marginLeft:0})
      }
  }
}
//热门品牌遮罩
var repinm=$('.repinm')[0];
var hotzs=$('.hotz',repinm);
var spass=$('span',repinm);
var zxins=$('.zxin',repinm)
var zzs=$('.zz1',repinm);
var dzz=$('.zz',repinm)

for (var i = 0; i < dzz.length; i++) {
  dzz[i].index=i;
  dzz[i].onmouseover=function(){
    hotzs[this.index].style.opacity=1;
    spass[this.index].style.opacity=1;
    zxins[this.index].style.opacity=1;
    zzs[this.index].style.opacity=0.7;
  }
  dzz[i].onmouseout=function(){
    hotzs[this.index].style.opacity=0;
    spass[this.index].style.opacity=0;
    zxins[this.index].style.opacity=0;
    zzs[this.index].style.opacity=0;
  }
};


//亲子左大图
var qinz=$('.qinz');
   
   for (var i = 0; i < qinz.length; i++) {
     zilunbo(qinz[i])
   };

function zilunbo(qinz){
  var slides=$('.slide',qinz);
var tuzz=$('.tuzz',qinz)[0];
var m=0
slides[0].style.display="block";
slides[0].style.marginTop=0;
 setInterval(function(){
    m++;
    if (m==slides.length) {m=0};
       for (var j = 0; j < slides.length; j++) {
         slides[j].style.display="none";
       animate(slides[j],{marginTop:30},1000);

       };
       slides[m].style.display="block";
       animate(slides[m],{marginTop:0},1000);
 },2000)
 qinz.onmouseover=function(){
     tuzz.style.opacity=0.3;
     for (var i = 0; i < slides.length; i++) {
       slides[i].style.color="red";
     };
 }
  qinz.onmouseout=function(){
     tuzz.style.opacity=0;
     for (var i = 0; i < slides.length; i++) {
       slides[i].style.color="#000";
     };
 }
}


//优化加载  懒加载
var youhuas=$('.youhua');
var yharr=[];
var flagss=[];
var ch=document.documentElement.clientHeight;
for (var i = 0; i < youhuas.length; i++) {
  yharr.push(youhuas[i].offsetTop);
  flagss.push(true);
};
// alert(youhuas.length)

//滚动条出现
var search=$('.search')[0];
var kg2=true;
//左菜单楼层导航
var zcd=$('.zcd')[0];
var divs=$('div',zcd);
var daohs=$('.daohang');
var floors=$('.floor');
var arr=[];

for (var i = 0; i < divs.length; i++) {
  divs[i].index=i;
  divs[i].onmouseover=function(){
    divs[this.index].style.backgroundColor="";
  };
  divs[i].onmouseout=function(){
    divs[this.index].style.backgroundColor="#626262";
  };
};


for (var i = 0; i < floors.length; i++) {
  arr.push(floors[i].offsetTop);
};
var kg=true;
window.onscroll=function(){
  stop=document.body.scrollTop||document.documentElement.scrollTop;
  // document.title=stop;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]<stop+300){
      for(var j=0;j<arr.length;j++){
        daohs[j].style.backgroundColor="";
        divs[j].style.backgroundColor="#626262";
      }
      daohs[i].style.backgroundColor="#f7a945";
      divs[i].style.backgroundColor="";
    }else{
        daohs[i].style.backgroundColor="";
        divs[i].style.backgroundColor="#626262";
    }
  };
  //导航隐藏出现
  if (stop>600) {
    if (kg) {
      kg=false;
      animate(zcd,{marginLeft:-658,bottom:50},500);
    }
  }else{
    if (!kg) {
      kg=true;
      animate(zcd,{marginLeft:-728,bottom:-320},500);
    };
  }
//滚动条出现
  if (stop>800) {
    if (kg2) {
      kg2=false;
      animate(search,{top:0},500)
    }; 
  }else{
    if (!kg2) {
      kg2=true;
      animate(search,{top:-50},500)
    };
  }
  //优化加载
  for (var i = 0; i < yharr.length; i++) {
    if(stop+ch-200>=yharr[i]&&flagss[i]){
      flagss[i]=false;
      var yhtus=$('img',youhuas[i]);
      for(var j=0;j<yhtus.length;j++){
        yhtus[j].src=yhtus[j].getAttribute('asrc')
      }
    }
  };

}
// window.onscroll();
  //楼层跳转
  for (var i = 0; i < daohs.length; i++) {
    daohs[i].index=i;
    daohs[i].onclick=function(){
      animate(document.body,{scrollTop:arr[this.index]});
      animate(document.documentElement,{scrollTop:arr[this.index]})
    }
  };
  //导航结束
//商品分类文字部分
var cfenlei=$('.cfenlei')[0];
var fenleis=$('.fenlei');
var bandz=$('.ban-dz')[0];
var banlis=$('li',bandz);
for (var i = 0; i < banlis.length; i++) {
  banlis[i].index=i;
  hover(banlis[i],function(){
    banlis[this.index].style.backgroundColor="#fff";
  fenleis[this.index].style.display="block";  
  },function(){
    banlis[this.index].style.backgroundColor="";
  fenleis[this.index].style.display="none";  
  })
};
for (var i = 0; i < fenleis.length; i++) {
  fenleis[i].index=i;
  hover(fenleis[i],function(){
    banlis[this.index].style.backgroundColor="#fff";
  fenleis[this.index].style.display="block";  
  },function(){
    banlis[this.index].style.backgroundColor="";
  fenleis[this.index].style.display="none";  
  })
};
  
//右菜单滑块
var menuboxs=$('.menubox');
var mappsjx1s=$('.mappsjx1');
var maohks=$('.maohk');
var menubox1=$('.menubox1')[0];
var mappsjx=$('.mappsjx')[0];
var mapp=$('.mapp')[0];
var cdas=$('.cda');
var cda1=$('.cda1')[0];
  for (var i = 0; i < menuboxs.length; i++) {
    menuboxs[i].index=i;
    menuboxs[i].onmouseover=function(){
      for(var j=0;j<menuboxs.length;j++){
        cdas[j].style.backgroundColor="";
        mappsjx1s[j].style.display='none';
        maohks[j].style.display='none';
        mappsjx1s[j].style.opacity=0.5;
        maohks[j].style.opacity=0.5;
        animate(mappsjx1s[j],{right:75},500);
        animate(maohks[j],{right:85},500);
      }
        cdas[this.index].style.backgroundColor="#c40000";
      animate(mappsjx1s[this.index],{right:25},1000);
      animate(maohks[this.index],{right:35},1000);
       mappsjx1s[this.index].style.display='block';
        maohks[this.index].style.display='block';
        mappsjx1s[this.index].style.opacity=1;
        maohks[this.index].style.opacity=1;
    }
    menuboxs[i].onmouseout=function(){
        cdas[this.index].style.backgroundColor="";
      animate(mappsjx1s[this.index],{right:75},1000);
      animate(maohks[this.index],{right:85},1000);
      mappsjx1s[this.index].style.display='none';
      maohks[this.index].style.display='none';
      mappsjx1s[this.index].style.opacity=0.5;
        maohks[this.index].style.opacity=0.5;
    }
  };


  menubox1.onmouseover=function(){
    mappsjx.style.display='block';
    mapp.style.display='block';
    cda1.style.backgroundColor="#c40000";
  }
  menubox1.onmouseout=function(){
    mappsjx.style.display='none';
    mapp.style.display='none';
    cda1.style.backgroundColor="";
  }

//top  我的淘宝
var topbox=$('.topbox')[0];
var taobox=$('.taobox',topbox)[0];
var tao1=$('.tao1',topbox)[0];
var taob=$('.taob',topbox)[0];
hover(taobox,function(){
   tao1.style.backgroundColor="#fff";
   taob.style.display="block";
   tao1.style.color="#c40000";
   tao1.style.borderColor="#eee";
},function(){
   tao1.style.backgroundColor="#f2f2f2";
   taob.style.display="none";
   tao1.style.color="#999";
   tao1.style.borderColor="#f2f2f2";
})


var scjbox=$('.scjbox',topbox)[0];
var shouc=$('.shouc',topbox)[0];
var shouc1=$('.shouc1',topbox)[0];
hover(scjbox,function(){
   shouc1.style.backgroundColor="#fff";
   shouc.style.display="block";
   shouc1.style.color="#c40000";
   shouc1.style.borderColor="#eee";
},function(){
   shouc1.style.backgroundColor="#f2f2f2";
   shouc.style.display="none";
   shouc1.style.color="#999";
   shouc1.style.borderColor="#f2f2f2";
})

var sjzcbox=$('.sjzcbox',topbox)[0];
var shangj=$('.shangj',topbox)[0];
var shangj1=$('.shangj1',topbox)[0];
hover(sjzcbox,function(){
   shangj1.style.backgroundColor="#fff";
   shangj.style.display="block";
   shangj1.style.color="#c40000";
   shangj1.style.borderColor="#eee";
},function(){
   shangj1.style.backgroundColor="#f2f2f2";
   shangj.style.display="none";
   shangj1.style.color="#999";
   shangj1.style.borderColor="#f2f2f2";
})

//手机版
var shouji=$('.shouji',topbox)[0];
var sjbox=$('.sjbox',topbox)[0];
var ewm=$('.erweima',topbox)[0];
var ersjx=$('.ersjx',topbox)[0];
hover(sjbox,function(){
  ewm.style.display="block";
  ersjx.style.display="block";
},function(){
  ewm.style.display="none";
  ersjx.style.display="none";
})

//网站导航
var daohang=$('.daohang',topbox)[0];
var dhdbox=$('.dhdbox',topbox)[0];
var daohangbox=$('.daohangbox',topbox)[0];
hover(dhdbox,function(){
  daohang.style.backgroundColor="#fff";
  daohangbox.style.display="block";
  daohang.style.borderColor="#eee";
},function(){
  daohang.style.backgroundColor="";
  daohangbox.style.display="none";
  daohang.style.borderColor="#f2f2f2";
})

//banner  猫头
var bany=$('.ban-y')[0];
var banas=$('a',bany);
var maots=$('.maot',bany);
for (var i = 0; i < banas.length; i++) {
  banas[i].index=i;
  hover(banas[i],function(){
    animate(maots[this.index],{top:-10},1000);
    maots[this.index].style.opacity=1;
  },function(){
    animate(maots[this.index],{top:-3},1000);
    maots[this.index].style.opacity=0;
  })
};


})