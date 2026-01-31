"use strict";
// optional parameter
function Info(name, hobby) {
    return `My Name Is ${name} & My Hobby is ${hobby ? hobby : "Coding"}`;
}
console.log(Info("Mr Robot", "Hacking"));
console.log(Info("Anonymous"));
// Default parameter
function wishBrithday(name, msg = "Hope all your wishes come true!") {
    return `Happy Brithday ${name} . ${msg}`;
}
console.log(wishBrithday("Mr Robot"));
console.log(wishBrithday("Anonymous", "Enjoy your special day."));
