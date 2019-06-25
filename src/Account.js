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
}