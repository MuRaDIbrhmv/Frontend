let a = prompt("1ci regem");
let b = prompt("2ci regem");
let c = prompt("3ci regem");
console.log("Ededi orta:",(a+b+c)/3);

let team;
let pilot = "Max";
if(pilot == "Charles"){
    team = "Ferrari";
}
else if(pilot == "Max"){
    team = "Red Bull";
}
else if(pilot == "Lando"){
    team = "Mclaren";
}
console.log("Pilot-->",pilot);
console.log("Team-->",team)





let number = 70;
if(0<=number && number<=9){
    console.log("BIRregemlidir");
}
else if(10<=number  && number<=99){
    console.log("IKIregemlidir");
}
else if(100<=number && number<=999){
    console.log("UCregemlidir");
}
else{
    console.log("Regem sayi 3den coxdur");
}


let username = prompt("Usename daxil edin:");
let parol = prompt("Parol daxil edin:");
if(username == "admin" && parol == "12345"){
    console.log("Xos geldiniz,admin");
}
else if(username == "" || parol == ""){
    console.log("Username ve parol daxil edilmelidir");
}
else{
    console.log("Yanlis parol veya username");
}