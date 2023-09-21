class Uber {
    constructor (distance,rate,waitingtime) {
        this.distance = distance;
        this.rate = rate;
        this.waitingtime = waitingtime;
    }
    getRideDetails(){
        return(`the distance of the ride is ${this.distance} km with the rate of ${this.rate}
       rs with a waiting period of ${this.waitingtime}ms`)
    }
    getPrice(){
  
        let price = (this.distance * this.rate) + (5 * this.waitingtime)
        return price;
    }
    setDistance(dist){
        this.distance=dist;
    }
    
    
}
    const uber = new Uber(40,20,10)
    const uber1 = new Uber(100,50,30)
    uber.setDistance(40);
    
    console.log(uber.getRideDetails());
    console.log(uber.getPrice());
    
    console.log(uber1.getRideDetails());
    console.log(uber1.getPrice());