// TASK 1
function modifyText(text,callback){
    return callback(text)

}

function lowerCase(text){
    return text.toLowerCase()
}
function removeSpace(text){
    return text.replaceAll(" ","")

}
function capitalLetter(text){
    let arr = text.split(" ")
    for(let i=0; i < arr.length;i++ ){
        let word = arr[i]
        arr[i]=word[0].toUpperCase() + word.slice(1)
    }
    return arr.join(" ")
}
function addExclamation(text){
    text = text.concat("!") 
    return text
}


// TASK 2
function modifyNumber(num,callback) {
    return callback(num)
}

function double(number){
    return number*2
}

function half(number){
    return number/2
}

function sqrt(number){
    return number**0.5
}

function abs(number){
    if(number<0){
        return -number
    }
    else{
        return number
    }
}

// TASK 3

function transformArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        arr[i] = callback(arr[i])
    }
    return arr
}

function addOne(num){
    return num+1
}

function negative(num){
    if(num>0){
        return -num
    }
    else{
        return num
    }
}

function div3remain(num){
    return num % 3
}


//TASK 4
function findInArray(arr, callback) {
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            return arr[i]
        }
    }
}

function firstEven(num){
    if(num % 2 === 0){
        return true
    }
    else{
        return false
    }
}

function greaterThan10(num){
    if(num > 10){
        return true
    }
    else{
        return false
    }
}

function startA(str){
    if(str[0] === 'A' || str[0] === 'a'){
        return true
    }
    else{
        return false
    }
}


//TASK 5
function processUserData(user, callback) {
    return callback(user)
}

function fullName(user){
    return user.firstName + ' ' + user.lastName
}

function isAdult(user){
    if(user.age >= 18){
        return true
    }
    else{
        return false
    }
}

function emailBlur(user){
    let parts = user.email.split("@")
    parts[0] = "*****"
    user.email = parts.join("")
    return user.email

}



let murad = {
    firstName: "Murad",
    lastName: "Ibrahimov",
    age:17,
    id:1400978,
    email: "muraddi675@gmail.com"
}


