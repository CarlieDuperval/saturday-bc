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
