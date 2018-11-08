function Car(_km, _lp) {
    this.km = _km
    this.lp = _lp
}

car1 = new Car(100, "lp1")
car2 = new Car(100, "lp2")
car3 = new Car(100, "lp3")

let cars = [car1, car2, car3];



function drive(_km) {
    this.km += _km
}

let mapper = {
    "lp1": 20,
    "lp2": 200,
    "lp3": 500
}

cars.forEach((car) => {

    drive.bind(car)(mapper[car.lp])


})



class Animal {
    constructor(_name, _area) {
        this.name = _name;
        this.area = _area;

    }
}

class Dog extends Animal {
    constructor(_name, _area, _type, _subtype) {
        super(_name, _area)
        this.type = _type;
        this.subtype = _subtype;
    }
}


let doggy = new Dog("laky", "land", "aski", "aski-ashdodi")

Dog.prototype.talk = function () { return this.name }

Animal.prototype.print = function () { return this.subtype }

doggy.print()

let controller = { path: "https://mail.google.com/mail/u/0/#search/uploadfiles/FMfcgxvxBjfPfVkLqrzmDCZSdBXfZLrS", name: "userController" }
for (var item in controller) {


    console.log(controller[item])


}




let element = {};
Object.defineProperty(element, "title", { writable: false, value: "e1" })


var user = { name: "gal", age: 20 }

Object.defineProperty(user, "getName", {
    get() {
        return this.name
    },
    set(newValue) {
        this.name = newValue + " lastname"
    }

})


var currency = { value: 20, type: "ILS" }

Object.defineProperty(currency, "convertToDollar", {
    get() {
        return this.value * 3.5
    }


})

Object.defineProperty(currency, "newProp", {
    writable: false,
    value: 2

})

Object.defineProperty(currency, "setProp", {
   set(newVal){ //newVal right
        this.newProp = newVal //this.newProp left
   }
//ex currency.setProp = 90
})


