var coin = 0;
var clickup = 0;

function add(){
    coin = coin + 1 + clickup;
    update();
}

function update(){
    document.querySelector('#countNum').value = coin;
}

function save(){
    localStorage.setItem("coin",coin);
    localStorage.setItem("clickup",clickup);
}

function load(){
    coin = localStorage.getItem("coin");
    coin = parseInt(coin);
    clickup = localStorage.getItem("clickup");
    clickup = parseInt(clickup);
    update();
}

// ---------------------------------

function clickup01(){
    if(coin >= 30){
        coin = coin - 30;
        clickup = clickup + 1;
        update();
    } else {
        alert("코인이 부족해요!");
    }
}