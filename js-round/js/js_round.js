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

    if(type == "windowMove"){
      if(k == 38){  ++i;}
      if(k == 40){  --i;}
      if(k == 37){  }
      if(k == 39){  }
      else kNum = null
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
  
  return pathArr;
}

function srcHdl(_pathArr){
    var n = arrow(0,"windowMove");
    var path = _pathArr[n]
    draw(path);
}

function draw(_path){
  var frame = document.getElementById('frame');
  frame.src = _path;
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

