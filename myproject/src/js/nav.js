// console.log("test")
// 导出
export let obj = {
    tab: function(){
        var navItems = document.querySelectorAll(".nav li");
        for(var i = 0 ; i < navItems.length ; i ++){
            navItems[i].onclick = function(){
                // 排他思想
                for(var j = 0 ; j < navItems.length ; j ++){
                    navItems[j].className = "";
                }
                this.className = "active";
            }
        }
    }
}