// Write a program using bind

var obj2 = {
    str: "hello"
}

var addStr = function(str1, str2,str3){
    return (this.str + str1 +str2 +str3)
}

var bound = addStr.bind(obj2)

console.log(bound(" how ", "are ", "you"))