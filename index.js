var coin = 0;

function add(){
    coin = coin + 1;
    update();
}

function update(){
    document.querySelector('#countNum').value = coin;
}

function save(){
    localStorage.setItem("coin",coin);
}

function load(){
    localStorage.getItem("coin",coin);
    coin = parseInt(coin);
    
    update();
}
