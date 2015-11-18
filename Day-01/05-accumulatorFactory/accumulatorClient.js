var factory = require('./accumulatorFactory');
var ac1 = factory();
console.log('acc1');
console.log(ac1.getResult());
ac1.add(100);
console.log(ac1.getResult());
console.log('acc2');
var ac2 = factory();
console.log(ac2.getResult());
