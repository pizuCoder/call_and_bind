// Write a function and use 'call' to call the function

var obj1 = {
    str:"priya"
}
var addStr = function(str1){
    return (this.str+str1);
}

console.log(addStr.call(obj1, "moghe"))