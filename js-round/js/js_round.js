var pathStr = "str";
var pathArr = [];
var csvArr = [];
var cnt = 0;
var i= 0;

/*
38 上
40 下
37 左
38 右

78 n
66 b
*/

window.document.onkeydown = function(){
    k = event.keyCode;
    

    if(pathArr.length > 0){
      if(k == 78){  
      i++;
      console.log("n押された",i);
      }
      if(k == 66){ 
      i--; 
            console.log("b押された",i);
      }
    srcHdl(pathArr,i);
    a = i + 1 ;
    document.getElementById("log").innerHTML = a + ":<br>" + pathArr[i];

  }
}

function init(){

}

function btnHdl(){

  //クリックされるごとに配列クリア
  pathArr.length=0;
  i = 0;

  //CSV(str) => tArea
  var pathStr = document.getElementById("tArea").value;
  var csvArr = parseSV(pathStr);
  $.each(csvArr, function(i,val){
    $.each(val, function(n,_val){ 
      pathArr.push(_val) 
      //console.log(_val,":",pathArr[pathArr.length-1]);
    }) 
  })
  srcHdl(pathArr,0);
  document.getElementById("log").innerHTML = 1 + ":<br>" + pathArr[i];
}

function srcHdl(_pathArr,n){
    var path = _pathArr[n];
    var frame =document.getElementById("frame");
    frame.src=path;
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

