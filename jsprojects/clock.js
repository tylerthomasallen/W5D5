class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    console.log("hello");
    // debugger;
    // setInterval(() => this._tick, 1000);
    setInterval(this._tick.bind(this), 1000)
    // time();
  }
  
  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  
  _tick() {
    // debugger;
    this.seconds += 1;
    
    if (this.seconds === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    
    if (this.minutes === 60) {
      this.hours += 1;
      this.minutes = 0;
    }
    
    if (this.hours === 24) {
      this.hours = 0;
    }
    // debugger;
    this.printTime();
    // return 2;
  }
  
  
}

