export let option = {
    add: function(){
        var count = 0;
        var timer = null;
        var autoPlay = function(){
            count ++;
            if(count > 100){
                clearInterval(timer);
                return;
            }
            document.querySelector("#number").innerHTML = count;
        }
        document.querySelector(".btn-start").onclick = function(){
            clearInterval(timer);
            timer = setInterval(autoPlay,30);
            document.querySelector(".btn-pause").className = "btn-pause";
            this.className = "btn-start active";
        }
        document.querySelector(".btn-pause").onclick = function(){
            clearInterval(timer);
            document.querySelector(".btn-start").className="btn-start";
            this.className = "btn-pause active";
        }
    }
}