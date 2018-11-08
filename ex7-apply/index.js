function calc() {

    return 10

}

calc()
10
calc.apply(null, null)
10





function getNameglobal() {
    return this.name
}



Function.prototype.customApply = function (context, args) {

    //tun this inside context context = { user:"gal" }
    context["function1234"] = this;
    let result = context["function1234"](args)
    delete context["function1234"];
    return result;

}
ƒ(context, args){

    //tun this inside context context = { user:"gal" }
    context["function1234"] = this;
    let result = context["function1234"](args)
    delete context["function1234"];
    return result;

}
function getType() {
    return this.type;
}

var car = { type: "mazda" }

getType.customApply(car, 1);
"mazda"
car
{ type: "mazda" }


var car = { type: "mazda", color: "red" }
function getColor(args) {
    //do somthing with args
    return this.color;
}

getColor.customApply(car, ...args);


