var car = {
  make: "BMW",
  model: "8",
  year: 2000,
  fuel: 0,
  started: false,
    
  start: function() {
    this.started = true; 
    alert ("Zoom Zoom Zooooom. Engine is working");
  },

  stop: function() {
    this.started = false;
    alert ("You've stoped the car");
  },

  drive: function() {
    if (this.started && this.fuel != 0) {
      this.fuel = this.fuel - 1;
      alert ("Car is driving!");
    }
    else if (this.fuel == 0) {
      alert ("Fuel leve is low")
    }
    else {
      alert ("You need start engine first");
    }
  },
  
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
    if (this.fuel > 5) {
      alert ("So muche fuel");
      this.fuel = this.fuel - amount;
    }
    return this.fuel;
  }
};

car.drive ();
car.start ();
car.drive ();
car.addFuel (7);
car.addFuel (2);
car.drive ();
car.drive ();
car.drive ();
car.addFuel (4);
car.drive ();
car.stop ();

console.log (car.fuel);