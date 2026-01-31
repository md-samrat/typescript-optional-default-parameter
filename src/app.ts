// optional parameter

function Info(name:string,hobby?:string) : string{
    return `My Name Is ${name} & My Hobby is ${hobby ? hobby :"Coding"}`;
}

console.log(Info("Mr Robot","Hacking"))
console.log(Info("Anonymous"))


// Default parameter

function wishBrithday(name:string,msg:string="Hope all your wishes come true!"):string{
    return `Happy Brithday ${name} . ${msg}`;
}
console.log(wishBrithday("Mr Robot"))
console.log(wishBrithday("Anonymous","Enjoy your special day."))