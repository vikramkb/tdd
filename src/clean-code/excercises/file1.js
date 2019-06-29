function getTotalEmployees() {
  let totalCount = 0;
  const northCount = globalNorthCount();
  const southCount = globalSouthCount();
  totalCount = northCount + southCount;
  return totalCount;
}

function globalNorthCount() {
  return 100;
}

function globalSouthCount() {
  return 200;
}

console.log(getTotalEmployees());