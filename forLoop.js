// return the name of all the students  for a given array

let students = [
    {
        name: 'max',
        here: true
    },
    {
        name:'pam',
        here:true
    }
]

function getStudentsNames(arr) {
    let names = []

    for (let i = 0; i < arr.length; i++){
        names.push(arr[i].here)
    
    }
    return names

}
console.log(getStudentsNames(students))


// arrow function 


let teachers = [
    {
        name:'Damian',
        age: 45,
        here:true
    },
    {
        name:'Darie',
        age:35,
        here: false
    }
]

const getTeachersNames = (arr1) => {
    let teachersNames = []

    for (let i = 0; i < arr1.length; i++){
        teachersNames.push(arr1[i].age)
    
    }
    return teachersNames

}
console.log(getTeachersNames(teachers))