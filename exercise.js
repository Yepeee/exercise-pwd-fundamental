//MEMBUAT SHOOTING GAME 


class Player {
    constructor(_name) {
        this.name = _name
        this.health = 100;
        this.power = 10;
    }

    showStatus = () => {
        return `Player ${this.name} ▶Health = ${this.health}  Power = ${this.power}◀`
    }

    hit = (power) => {
      this.health -= power;
    }

    useItem = (item) => {
        if (item == 0) {
            return this.health += Math.round(Math.random()) * 10;
        } else {
            return this.power += Math.round(Math.random()) * 10;
        }
    }

};


class ShootingGame {
    constructor(_player1, _player2) {
        this.player1 = _player1;
        this.player2 = _player2;
    }

    getRandomItem = () => {
        return Math.round(Math.random())
    }

    start = () => {
        let shooting = "";
        while (true) {
            // show status
            shooting += `BEFORE ====> \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
            // random item
            this.player1.useItem(this.getRandomItem());
            this.player2.useItem(this.getRandomItem());
            shooting += `AFTER ====> \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());
            // hit
            this.player1.hit(this.player2.power);
            this.player2.hit(this.player1.power);
            shooting += `HIT ====> \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
            if (this.player1.health <= 0) {
                return shooting += `${this.player2.name} MENANG`
            } else if (this.player2.health <= 0) {
                return shooting += `${this.player1.name} MENANG`
            }
        }
    }
};


let player1 = new Player("Sapi Gibas");
let player2 = new Player("Kambing Metal");
let shooting = new ShootingGame(player1, player2);
console.log(shooting.start());

