export var tab = function(){
    var navItems = document.querySelectorAll(".nav li");
    for(var i = 0 ; i < navItems.length ; i ++){
        (function(index){
            navItems[i].onclick = function(){
                for(var j = 0 ; j < navItems.length ; j ++) {
                    navItems[j].className = "";
                }
                navItems[index].className = "active";
            }
        })(i)
    }
}