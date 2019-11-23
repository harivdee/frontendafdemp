"use strict";

// const accountOne = {
//     name: "Lee Scott",
//     balance: 616,
//     showBalance: function () {
//         document.write(
//             "<p>Balance: &euro; " + this.balance + "</p>"
//         )
//     },
//     withdraw: function (amount) {
//         this.balance = this.balance - amount;
//     },
//     deposit: function (amount) {
//         this.balance = this.balance + amount;
//     }
// };


// const accountTwo = {
//     name: "Amy True",
//     balance: 777,
//     showBalance: function () {
//         document.write(
//             "<p>Balance: &euro; " + this.balance + "</p>"
//         )
//     },
//     withdraw: function (amount) {
//         this.balance = this.balance - amount;
//     },
//     deposit: function (amount) {
//         this.balance = this.balance + amount;
//     }
// };


// Using Function Constructors:
function Account(name, balance) {
    this.name = name,
    this.balance = balance
};

const accountThree = new Account("Lee Scott", 616);
const accountFour = new Account("Amy True", 777);
console.log(accountThree);
console.log(accountFour);

Account.prototype.showBalance = function () {
    document.write(
        "<p>Balance: &euro; " + this.balance + "</p>"
    )
};

Account.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount;    
};

Account.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
};


accountThree.deposit(500);
accountFour.withdraw(1);

console.log(accountFour.showBalance());
console.log(accountThree.showBalance());
