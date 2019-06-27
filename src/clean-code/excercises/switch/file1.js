class Transport {
  cost(type, weight, distance, travelTime) {
    switch (type) {
      case 'AUTO': {
         //weight in kg
         let total = weight * 10;
         if(travelTime > 360){
           total += ((travelTime - 360)/60)*50;
         }
         return total;
      }
      case 'LORRY': {
         //loading and unloading charges
        let total = distance * 20 + 1000 + 2000;
        if(travelTime > 1440){
          total += 5000;
        }
         return  total;
      }
    }
  }
}

let transport = new Transport();
console.log(transport.cost('LORRY', 1000, 500, 500));
console.log(transport.cost('AUTO', 200, 500, 100));