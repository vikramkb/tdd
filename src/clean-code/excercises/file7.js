// Up to 2.5 lakhs – No tax
// Rs.2.5 lakhs to 5 lakhs – 5 per cent
// Rs.5 lakhs to 10 lakhs – 20 per cent
// Above Rs.10 lakhs – 30 per cent
function findTax(salary, insuranceAmount, isHomeLoanAvailed, isLossOfProperty, rentPerMonth, rentPaidMonths, principalAmount, interestPaid, donation) {
    const eightyCException = insuranceAmount + principalAmount;
    let homeLoanExemption = 0;
    if(isHomeLoanAvailed){
      if(isLossOfProperty){
        const totalRentPaid = rentPerMonth *  rentPaidMonths;
        homeLoanExemption = totalRentPaid;
      }else{
        if(interestPaid > 200000){
          homeLoanExemption = 200000;
        }else{
          homeLoanExemption = interestPaid;
        }
      }
    }
    const totalExemption = eightyCException + homeLoanExemption + donation;

    let taxableSalary = salary > totalExemption ? salary - totalExemption : 0;

    let slabs = {
      "slabOne" : 250000,
      "slabTwo" : 500000,
      "slabThree" : 1000000
    };
    //find slab1 tax
    if(taxableSalary < slabs["slabOne"]){
      taxableSalary = 0;
    }else {
      taxableSalary -= slabs["slabOne"];
    }
    let tax = 0;

    //find slab2 taxable income
    let secondSlabMaxTaxableAmount = slabs["slabTwo"] - slabs["slabOne"];
    if(taxableSalary >= secondSlabMaxTaxableAmount){
      taxableSalary -= secondSlabMaxTaxableAmount;
      tax += secondSlabMaxTaxableAmount * 0.05;
    } else {
      tax += taxableSalary * 0.05;
      taxableSalary = 0;
      //exit here
    }

    //find slab3 taxable income
    let thirdSlabMaxTaxableAmount = slabs["slabThree"] - slabs["slabTwo"];
    if(taxableSalary >= thirdSlabMaxTaxableAmount){
      taxableSalary -= thirdSlabMaxTaxableAmount;
      tax += thirdSlabMaxTaxableAmount * 0.20;
    } else {
      tax += taxableSalary * 0.20;
      taxableSalary = 0;
      //exit here
    }

    if(taxableSalary > 0) {
      tax += taxableSalary * 0.30;
    }
    return tax;
}

console.log(findTax(200000, 0, false, false, 0, 0, 0, 0, 0));
console.log(findTax(300000, 0, false, false, 0, 0, 0, 0, 0));