//TASK 3
function isEven(num){
    if(num%2 === 0){
        return true
    }
    else{
        return false
    }
}

//TASK 4
function findLargest(num1,num2,num3){
    if(num1>=num2 && num1>=num3 ){
        return num1
    }
    else if(num2>=num1 && num2>=num3 ){
        return num2
    }
    else if(num3>=num2 && num3>=num1 ){
        return num3
    }
}

//TASK 5
function countVowels(str){
    let count=0
    let vowels = ["a", "e", "u","o", "i","A","E","U","O","I"]
    for(i of str){
        for(j of vowels){
            if(i === j){
                count++
            }
        }
    }
    return count
}


//TASK 6
function reverseString(str){
    let arrStr = str.split('')
    let newArr=[]
    let j = 0;
    for(let i = str.length-1; i >= 0;i--){
        newArr[j] = arrStr[i]
        j++
}
return newArr.join('')
}





//TASK 7
function multiTable(num){
    for(let i=0; i<=10;i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}




//TASK 8 
function factorial(num){
    if(num === 0 ){
        return 0
    }
    else if(num === 1){
        return 1
    }
    else{
        for(let i = num; i>0; i--){
            return i*factorial(i-1)
        }
    }
    
}


