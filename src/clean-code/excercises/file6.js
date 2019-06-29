class Theatre {

  constructor() {
    this.regularSeats = [false, false, false, false, false, false];
    this.regularSeatPrice = 50;
    this.balconySeats = [false, false, false, false, false, false];
    this.balconySeatPrice = 50;
  }

  occupy(seatType, seats) {
    let totalPrice = 0;
    if(seatType === 1){
      for(let i=0; i < seats.length; i++){
        this.regularSeats[seats[i]] = true;
        totalPrice += this.regularSeatPrice;
      }
    }
    if(seatType === 2){
      for(let i=0; i < seats.length; i++){
        this.balconySeats[seats[i]] = true;
        totalPrice += this.balconySeatPrice;
      }
    }
    console.log(this.regularSeats);
    console.log(this.balconySeats);
    return totalPrice;
  }
}

const theatre = new Theatre();
console.log(theatre.occupy(1, [2,3]));