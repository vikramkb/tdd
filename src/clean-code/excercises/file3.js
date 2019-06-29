function parkingFee(vehicleType, hours) {
  const chargePerHourForTwoWheeler = 5;
  const chargePerHourForFourWheeler = 10;

  let totalCharge = 0;
  let hourlyCharge = 0;
  const dayPassForTwoWheeler = 25;
  const dayPassForFourWheeler = 40;

  switch (vehicleType) {
    case 1: {
      hourlyCharge += hours * chargePerHourForTwoWheeler;
      totalCharge = hourlyCharge > dayPassForTwoWheeler ? dayPassForTwoWheeler : hourlyCharge;
      break;
    }
    case 2: {
      hourlyCharge += hours * chargePerHourForFourWheeler;
      totalCharge = hourlyCharge > dayPassForFourWheeler ? dayPassForFourWheeler : hourlyCharge;
    }
  }

  return totalCharge;
}

console.log(parkingFee(1, 2));
console.log(parkingFee(1, 10));
console.log(parkingFee(2, 2));
console.log(parkingFee(2, 10));