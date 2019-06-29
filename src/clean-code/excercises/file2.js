function getSalary(gross) {
  const salary = {};
  const basic = gross * 30 / 100;
  salary["basic"] = basic;
  const hra = gross * 20 / 100;
  salary["hra"] = hra;
  const cityCompensatoryAll = gross * 30 / 100;
  salary["cityCompensatoryAll"] = cityCompensatoryAll;
  const conveyance = 800;
  salary["conveyance"] = conveyance;
  const specialBalance = gross - basic - hra - cityCompensatoryAll - conveyance;
  salary["specialBalance"] = specialBalance;
  return salary;
}

console.log(getSalary(100000));