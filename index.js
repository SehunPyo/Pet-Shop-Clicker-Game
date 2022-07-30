var coin = 0;

function add(){
    coin = coin + 1;
    update();
}

function update(){
    document.querySelector('#countNum').value = coin;
}