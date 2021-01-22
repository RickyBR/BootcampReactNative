 console.log('=== Release 0 ===')
 class Animal {
  constructor(name,legs,cold_blooded) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
  get anam() {
    return this.name;
  }

  get anam(){
      return this.legs 
  }
 
  get anam(){
     return this.cold_blooded = false
  }
 
}

var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded)

console.log('=== Release 1 ===')

class Ape extends Animal{
    constructor(name,yell){
    super(name);
    this.yell = function yell(){
        return console.log("Auooo")
    }

    }
  
}

class Frog extends Animal{
    constructor(name,jump){
        super(name);
        this.jump = function jump(){
            return console.log("Hop Hop")
        }
    }
}
var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
sungokong.yell()
console.log("")
var kodok = new Frog("buduk")
console.log(kodok.name)
kodok.jump() // "hop hop" 

console.log("no 2")

  class clock{
      constructor(template,render){
          
    this.render = function render() {
        var date = new Date();
    
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
      this.stop = function() {
        clearInterval(timer);
      };
    
      this.start = function() {
        render();
        timer = setInterval(render, 1000);
      };

      }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();
