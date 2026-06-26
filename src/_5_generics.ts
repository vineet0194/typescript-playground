// generics
// a language independent concept
// generics - enable you to create components that work without any data type while still providing compile-time type safety

/*
// the problem
type Input = number | string;

function firstElem(arr: Input[]){
    return arr[0];
}

const value = firstElem(["vineet","singh"]);
console.log(value);
// console.log(value.toUpperCase());   // u cant do number.toUpperCase();
*/

// introdue generics , eg:

function identity<T>(arg: T): T{
    return arg;
}

const output1 = identity<string>("myString");
const output2 = identity<number>(100);

console.log(output1.toUpperCase());

function getFirstElem<T>(arg: T[]): T{
    return arg[0];
}

const output3 = getFirstElem(["Vineet", "Singh", "Virat"]);     // by default TS can infer the type of input, so mix arg is possible
const output4 = getFirstElem<number>([1, 2, 3]);            // here it is not as we explicity give a generic

console.log(output3.toLowerCase());
console.log(output4);