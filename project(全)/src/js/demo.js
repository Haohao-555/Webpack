// 改变 li 标签的宽度
var items = document.querySelectorAll("ul li");

for(var i = 0; i <items.length; i++) {
    items[i].style.height = "30px";
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            var data = xhr.responseText;
            console.log(data)
        }
    }
}
/*
  前提：本地服务已经启动
*/
// xhr.open("get", "/api/list", true);
// xhr.send();