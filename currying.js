// using bind
let multiply = function(x, y) {
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)
let multiplyByThree = multiply.bind(this, 3)

multiplyByTwo(5)
multiplyByThree(5)

// using closure

let multiply2 = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyby2 = multiply2(2)
multiplyby2(3)