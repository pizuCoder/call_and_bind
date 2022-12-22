// Write a program using apply

var obj2 = {
    str: "hello"
}

var addStr = function(str1, str2,str3){
    return (this.str + str1 +str2 +str3)
}

var arrStr = [" how ", "are ", "you"]

console.log(addStr.apply(obj2, arrStr))