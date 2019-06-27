export default class Loan {
  constructor(account) {
    this.account = account;
  }


  eligiblePersonalLoanAmount() {
    if(this.account.getBalance() > 100000){
      return 100000;
    }
  }

  transferSanctionAmount(number) {
    this.account.deposit(number);
  }
}