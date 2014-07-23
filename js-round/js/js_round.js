var pathStr = "str";
var pathArr = [];
var csvArr = [];
var cnt = 0;

/*
38 上
40 下
37 左
38 右
*/

window.document.onkeydown = function(){
    k = event.keyCode;
    var i=0;

    if(pathArr.length > 0){
      if(k == 38){  --i;}
      if(k == 40){  ++i;}
      if(k == 37){  }
      if(k == 39){  }
      else kNum = null

    srcHdl(pathArr,i);

  }
}

//init
function init(){

  
}

function btnHdl(){

  //クリックされるごとに配列クリア
  pathArr.length=0;

  //CSV(str) => tArea
  var pathStr = document.getElementById("tArea").value;
  var csvArr = parseSV(pathStr);
  $.each(csvArr, function(i,val){
    $.each(val, function(n,_val){ pathArr.push(_val) }) 
  })
}

function srcHdl(_pathArr,n){
    var path = _pathArr[n];
    var frame =document.getElementById("frame");
    frame.src=path;

}



function arrow(i,type){
  window.document.onkeydown = function(){
    k = event.keyCode;

    if(type == "windowMove"){
      if(k == 38){  ++i;}
      if(k == 40){  --i;}
      if(k == 37){  }
      if(k == 39){  }
      else kNum = null
    }
  return i;
  }
}




function parseSV(str, delimiter){
  if(!delimiter) delimiter = ","
    return str.split('\n').reduce(function(table,row){
      if(!table) return;
      table.push(
      row.split(delimiter).map(function(d){ return d.trim() }) //余白削除
      );
      return table;
    }, []);
}

