var coin = 0;
var clickup = 0;
var plz01 = 0;
var up = 20;
var z = 0;

function add(){
    coin = coin + 1 + clickup;
    update();
}

function update(){
    plz01 = 30+(up*z*z*z);
    document.querySelector('#countNum').value = coin;
    document.querySelector('#scoretext').innerHTML = "클릭 당 획득 코인 : "+(1+clickup);
    document.querySelector('#plz01').innerHTML = "업그레이드 비용 "+ plz01 + " 코인";
}

function clickup01(){
    if(coin >= (30+(up*z*z*z))){
        coin = coin-(30+(up*z*z*z));
        clickup = clickup + 1;
        z++;
        update();
    } else {
        alert("코인이 부족해요!");
    }
}

function save(){
    localStorage.setItem("coin",coin);
    localStorage.setItem("clickup",clickup);
    localStorage.setItem("plz01",plz01);
    alert("보유한 코인을 은행에 입금했습니다.")
}

function load(){
    alert("마지막 입금한 금액이 출금되었습니다.")
    coin = localStorage.getItem("coin");
    coin = parseInt(coin);
    clickup = localStorage.getItem("clickup");
    clickup = parseInt(clickup);
    plz01 = localStorage.getItem("plz01");
    plz01 = parseInt(plz01);
    update();
}

// ---------------------------------

