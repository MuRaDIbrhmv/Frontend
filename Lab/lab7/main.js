let num = +prompt("Enter number: ")
let tempt;
for(let i = 0; i < num**0.5 + 1;i++){
    if(num > i*i  && (i+1)*(i+1)>num){
        tempt = i
    }
}
console.log(num,":",tempt);


let number = +prompt("Enter number: ")
function fact(number){
    let fac = 1
    if(number === 0){
        return 0
    
    }
    else if ( number === 1){
        return 1
    }
    else{
        
        for(let i = 1;i<=number; i++){
            fac*=i
        }
        return fac
    }
}

console.log(fact(number));




function findMax(array){
    let max = array[0];
    for(let i = 0; i<array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
let arr=[12,44,3,233,11,999,3,23]
console.log(findMax(arr));









let str = prompt("Enter string: ")
let arrStr = str.split('')
let newArr=[]
let j = 0;
for(let i = str.length-1; i >= 0;i--){
    newArr[j] = arrStr[i]
    j++
}
console.log(newArr.join(''));



function removeDub(array){
    let exist = []
    let j = 0
    for(let i = 0 ; i<array.length; i++){
        if(exist.some(element => element === array[i])){
            continue
        }
        else{
            exist[j] = array[i]
            j++
        }
    }
    return exist
}

console.log((removeDub([3,435,5,4,435,1,2])));


function toCelc(farengeyt){
   return (farengeyt-32)*5/9
}





function evenOrOdd(num){
    if(num%2 === 0){
        return "EVEN"
    }
    else{
        return "ODD"
    }
}



function sumDigits(num){
    let sum = 0
    while(num>0){
        sum+=(num%10)
        num=num/10
    }
}