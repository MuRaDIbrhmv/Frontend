//TASK 1
let num1= +prompt("Enter first number")
let num2= +prompt("Enter second number")
let num3= +prompt("Enter third number")

if(num1>=num2 && num1>=num3){
    console.log("num1 is maximum --->",num1)
}
else if(num2>=num1 && num2>=num3){
    console.log("num2 is maximum --->",num2)
}
else if(num3>=num2 && num3>=num1){
    console.log("num3 is maximum --->",num3)
}
else{
    console.log("Check your input again,")
}


//TASK 2
let year = +prompt("Enter a year")
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Artıq il -->",year);
}
else{
    console.log("Artiq il DEYIL")
}



// TASK 3
let grade = +prompt("Enter grade")
if(grade>=90 && grade<=100){
    console.log("Your grade is A")
}
else if(grade>=80 && grade<=100){
    console.log("Your grade is B")
}
else if(grade>=70 && grade<=100){
    console.log("Your grade is C")
}
else if(grade>=60 && grade<=100){
    console.log("Your grade is D")
}
else if(grade>=0 && grade<=100){
    console.log("Your grade is F")
}
else{
    console.log("Enter correct grade")
}



//TASK 4
let number = +prompt("Enter number")
if(number%2===0){
    console.log("EVEN")
}
else{
    console.log("ODD")
}



//TASK 5
for(let i=1 ; i<=50 ; i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if(i%3 ===0){
        console.log("Fizz")
    }
    else if(i%5 ===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
} 



//TASK 6

let num = +prompt("Enter a number")
for(let j=1 ; j<=10 ; j++ ){
    console.log(`${num} * ${j} = ${num*j}`)
}



//TASK 7
let eded = +prompt("Eded daxil edin")
let sum = 0
for(let k=1 ; k<=eded ; k++){
    sum+=k
}
console.log(`Result: ${sum}`)



//TASK 8

let eded1 = +prompt("1ci eded")
let eded2 = +prompt("2ci eded")
let emel = prompt("Emeliyyat secin(toplama, cixma, vurma, bolme): ")
switch(emel){
    case "toplama":
        console.log(`${eded1} + ${eded2} = ${eded1+eded2}`)
        break
    case "cixma":
        console.log(`${eded1} - ${eded2} = ${eded1-eded2}`)
        break
    case "vurma":
        console.log(`${eded1} * ${eded2} = ${eded1*eded2}`)
        break
    case "bolme":
        console.log(`${eded1} / ${eded2} = ${eded1/eded2}`)
        break
    default:
        console.log("Emeliyyat adi yanlisdir")
        break
}