export default class Account {
  constructor(name, balance){
    this.name = name;
    this.balance = balance;
  }

  deposit(money){
    this.balance += money;
  }

  getBalance(){
    return this.balance;
  }

  withdraw(money) {
    if(money > this.balance){
      throw 'In sufficient balance';
    }
    this.balance -= money;
  }
}