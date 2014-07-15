var events = require("events");
function Account() {
    this.balance = 0;
    events.EventEmitter.call(this);
    this.deposit = function(amount) {
        this.balance += amount;
        this.emit("balancedChanged");
    };
    this.withdraw = function(amount) {
        this.balance -= amount;
        this.emit("balancedChanged");
    };
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function displayBalance() {
    console.log("Account balance: $%d", this.balance);
}

function checkOverdraw() {
    if(this.balance < 0)
        console.log("Account overdrwan!!");
}

function checkGoal(account, goal) {
    if(account.balance > goal)
        console.log("Goal achieved!");
}

var account = new Account();
account.on("balancedChanged", displayBalance);
account.on("balancedChanged", checkOverdraw);
account.on("balancedChanged", function() { checkGoal(this, 1000); });

account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);
