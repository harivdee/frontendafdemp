class Account {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    showBalance() {
        document.write(
            "<p>Balance: &euro; " + this.balance + "</p>"
        )
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }

    transfer(amount , accountNum) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Sending to...."+ accountNum);
        } else {
            document.write("Insufficient fundz!");
        }
    }
};


const accOne = new Account("Lee Scott", 616);
console.log(accOne);
const accTwo = new Account("Jam Baxter", 818);

accOne.withdraw(17);
console.log(accOne.showBalance());
accTwo.deposit(82);
console.log(accTwo.showBalance());

class Yolo {
    constructor( years , lifetimes) {
        this.years = years;
        this.lifetime = lifetimes;
    }

    howmanylifetimes( wish ) {
        document.write('How many lives do you wish you had? <br>');
        if (wish != 1) {
            document.write("Denied BITCH!<br>");
        } else {
            document.write("You are the one, orgasmatron!<br>");
        }
    }
}

const liveOnce = new Yolo(50,1);
liveOnce.howmanylifetimes(2);
const highlander = new Yolo(49,1);
highlander.howmanylifetimes(1);

class GoldAccount extends Account {
    constructor(name,balance,premium){
        super(name,balance);
        this.type = premium;
    }

}

const goldmember = new GoldAccount("Dirty Dike",911);
console.log(goldmember);
goldmember.showBalance();

