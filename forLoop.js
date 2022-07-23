// return the name of all the students name for the given array

let students = [
    {
        name: 'max',
        here: true
    },
    {
        name:'pam',
        here:'true'
    }
]

function getStudentsNames(arr) {
    let names = []

    for (let i = 0; i < arr.length; i++){
        names.push(arr[i].name)
    
    }
    return names

}
console.log(getStudentsNames(students))
