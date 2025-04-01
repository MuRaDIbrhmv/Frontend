let students = [
    { name: 'Alice', age: 20, score: 85 },
    { name: 'Bob', age: 22, score: 92 },
    { name: 'Charlie', age: 21, score: 78 },
    { name: 'Dave', age: 24, score: 90 },
    { name: 'Eve', age: 23, score: 88 },
    { name: 'Frank', age: 20, score: 80 }
  ];


let avgScore = function(arr){
    let scores = 0
    for(let i = 0 ; i < arr.length ; i++){
        scores+=arr[i].score
    }
    return scores/arr.length
}

console.log(avgScore(students));



let highestScore = function(arr){
    let hs = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].score>hs.score){
            hs = arr[i]
        }
    }
    return hs
}

console.log(highestScore(students));



let sortStudentsByScore = function(arr){
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].score < arr[minIndex].score) {
          minIndex = j;
        }
      }
      
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr
}
console.log(sortStudentsByScore(students));


let passedStudents = function(arr){
    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].score>=85){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(passedStudents(students));


let oldestStudent = function(arr){
    let os = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].age>os.age){
            os = arr[i]
        }
    }
    return os
}
console.log(oldestStudent(students));


let hasHighScore = function(arr){
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].score>=95){
            count++
        }
    }
    if(count){
        return true
    }
    else{
        return false
    }
}
console.log(hasHighScore(students));


let listStudentNames = function(arr){
    let names = []
    for(let i = 0 ; i < arr.length ; i++){
        names.push(arr[i].name)
    }
    return names
}
console.log(listStudentNames(students));


