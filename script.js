add = (args1) => args1[0] + args1[1];

multiply = (args2) => args2[0] * args2[1];

square = (val) => val * val;


const composeAll = (...func) => (...values) => func.reduce((a,b) => b(a), values)

const task = composeAll(multiply, square);
console.log(task)
console.log(task(3,5))
    