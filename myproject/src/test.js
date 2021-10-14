// XMLHttpRequest 
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            var str = xhr.responseText;
            console.log("响应报文: ");
            var res = JSON.parse(str);
            console.log(res);
            var items = document.querySelectorAll(".box");
            var arrColor = res.arr;
            for(var i = 0 ; i < items.length ; i ++){
                items[i].style["background"]=arrColor[i];
            }
        }
    }
}
var url = "http://127.0.0.1:9000/api/list";
// var url = "/api/list";
xhr.open("get",url,true);
xhr.send(null);