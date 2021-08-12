class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
        this.gameActive = (this.status != "Dead") ? true : false;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        if (this.status == "Powered Up") {
            this.status = "Big";
        } else if (this.status == "Big") {
            this.status = "Small";
        } else if (this.status == "Small") {
            this.status = "Dead";
        }
        this.gameActive = (this.status != "Dead") ? true : false;
    }
    gotPowerUp() {
        console.log(this.status);
        if (this.status == "Powered Up") {
            this.hasStar = true;
        } else if (this.status == "Big") {
            this.status = "Powered Up";
        } else if (this.status == "Small") {
            this.status = "Big";
        }
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
    }
}

function randomNum() {
    return Math.floor(Math.random() * 3);
}

var mario = new Player();
mario.setName("Mario");


var timerId = setInterval(function(){
    switch (randomNum()) {
        case 0:
            mario.gotHit();

            break;
        case 1:
            mario.gotPowerUp();

            break;
        case 2:
            mario.addCoin();
            break;
    }
    mario.print();
    console.log("\n");
    if(mario.status=="Dead"){
        clearInterval(timerId);
    }
 },3000);
