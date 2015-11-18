/*
create an object
    - add(n)
    - subtract(n)
    - multiply(n)
    - divide(n)
    - getResult()

Usage:

accumulator.add(100);
accumulator.subtract(50);
accumulator.divide(2);
accumulator.multiply(10);
console.log(accumulator.getResult()) //=> 250
*/
console.log('loading accumulator');
var result = 0;
var accumulator = {
    add : function(n){
        result += n;
    },
    subtract : function(n){
        result -= n;
    },
    multiply : function(n){
        result *= n;
    },
    divide : function(n){
        result /= n;
    },
    getResult : function(){
        return result;
    }
};
module.exports = accumulator;
