function dayPassCharge(vehicleType) {
  const dayPassCharge = {
    "FOUR_WHEELER": 40,
    "TWO_WHEELER": 25
  };
  return dayPassCharge[vehicleType];
}

function hourlyCharge(vehicleType, hours) {
  const hourlyCharge = {
    "FOUR_WHEELER": 5,
    "TWO_WHEELER": 10
  };
  return hourlyCharge[vehicleType] * hours;
}

function min(first, second) {
  return first < second ? first : second;
}

function parkingFee(vehicleType, hours) {
  return min(hourlyCharge(vehicleType, hours), dayPassCharge(vehicleType));
}

console.log(parkingFee("TWO_WHEELER", 2));
console.log(parkingFee("TWO_WHEELER", 10));
console.log(parkingFee("FOUR_WHEELER", 2));
console.log(parkingFee("FOUR_WHEELER", 10));