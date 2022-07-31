var coin = 0;
var clickup = 0;

function add(){
    coin = coin + 1 + clickup;
    update();
}

function update(){
    document.querySelector('#countNum').value = coin;
    document.querySelector('#scoretext').innerHTML = "클릭 당 획득 코인 : "+(1+clickup);
    document.querySelector('#필요코인01').innerHTML = "업그레이드 비용 "+ (30+(0+clickup)) + " 코인";
}

function clickup01(){
    if(coin >= (30+(0+clickup))){
        zoin01 = parseInt('#필요코인01');
        coin = coin-(coin+clickup);
        clickup = clickup + 1;
        update();
    } else {
        alert("코인이 부족해요!");
    }
}

function save(){
    localStorage.setItem("coin",coin);
    localStorage.setItem("clickup",clickup);
    alert("보유한 코인을 은행에 입금했습니다.")
}

function load(){
    alert("마지막 입금한 금액이 출금되었습니다.")
    coin = localStorage.getItem("coin");
    coin = parseInt(coin);
    clickup = localStorage.getItem("clickup");
    clickup = parseInt(clickup);
    update();
}

// ---------------------------------

