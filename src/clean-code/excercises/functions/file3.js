class AirconditionCost {

  constructor() {
    this.winterStartMonth = 12;
    this.winterStartDate = 1;

    this.winterEndMonth = 1;
    this.winterEndDate = 31;

    this.summerStartMonth = 4;
    this.summerStartDate = 1;

    this.summerEndMonth = 5;
    this.summerEndDate = 31;

    this.basePrice = 25000;
    this.winterRate = 0.8;
    this.summerRate = 1.3;
    this.summerServiceCharge = 0.2;

    this.installationCharge = 1000;

  }

  cost(buyMonth, buyDate, quantity) {
    let invalidDate = false;
    if (!(buyMonth >= 1 && buyMonth <= 12)) {
      invalidDate = true;
    } else {
      if (!(buyDate >= 1 && buyDate <= 31)) {
        invalidDate = true;
      } else {
        if (buyMonth === 2 && buyDate > 29) {
          invalidDate = true;
        }
      }
    }


    if (invalidDate) {
      throw "invalid date";
    }

    let totalCost = 0;
    if (buyMonth >= this.winterStartMonth && buyMonth <= this.winterEndMonth && buyDate >= this.winterStartDate && buyDate <= this.winterEndDate) {
      totalCost = (this.basePrice + this.basePrice * this.winterRate) * quantity;
      totalCost += this.installationCharge;
    } else if (buyMonth >= this.summerStartMonth && buyMonth <= this.summerEndMonth && buyDate >= this.summerStartDate && buyDate <= this.summerEndDate) {
      totalCost = this.basePrice + this.basePrice * this.summerRate;
      totalCost += (totalCost * this.summerServiceCharge) * quantity;
      totalCost += this.installationCharge;
    } else {
      totalCost = this.basePrice * quantity;
      totalCost += this.installationCharge;
    }

    return totalCost;
  }
}

const airconditionCost = new AirconditionCost();
console.log(airconditionCost.cost(4, 15, 1));