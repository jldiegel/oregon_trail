(function(){

  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  function Traveler(name, amount, isHealthy){
    this.name = name
    this.amount = amount
    this.isHealthy = isHealthy
  }

  function Wagon(passengers, capacity){
    this.passengers = passengers
    this.capacity = capacity
  }

  function makeTraveler(name){
    return new Traveler(name, getRandomIntInclusive(1,100), true)
  }

  function makeWagon(capacity){
    return new Wagon([], capacity)
  }

  function hunt(traveler){
    let chance = getRandomIntInclusive(0,100)

    if(chance > 50){
      traveler.amount = (traveler.amount + 100)
    }

    return traveler.amount
  }

  function eat(traveler){
    traveler.amount = (traveler.amount - 20)

    if(traveler.amount < 20){
      traveler.isHealthy = false
    }

    return traveler.amount
  }

  function join(wagon, traveler){
    if(wagon.passengers.length < wagon.capacity){
    wagon.passengers.push(traveler)
    }
  }

  function quarantine(wagon){
    for(let i=0; i < wagon.passengers.length; i++){
      if(wagon.passengers[i].isHealthy === false){
        return true
        break
      }
    }
    return false
  }

  function food(wagon){

    let fuel = 0
    for(let i=0; i < wagon.passengers.length; i++){
      fuel = fuel + wagon.passengers[i].amount
    }
    return fuel
  }

  let wagon = makeWagon(5);
  let traveler = makeTraveler('Henrietta');
  let traveler2 = makeTraveler('Juan');
  hunt(traveler);
  eat(traveler2);
  eat(traveler2);
  join(wagon, traveler);
  join(wagon, traveler2);
  //console.log(wagon.passengers)
  console.log(quarantine(wagon));
  console.log(food(wagon));

})();
