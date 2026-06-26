// Introduction
// let x: number = 1;
// x = "vineet";
// console.log(x);


// const greet=(firstname: string, lastname: string, age: number)=>{
//     console.log(`Hello ${firstname} ${lastname}`);
// }
// greet("Vineet", "Singh", 21);


// Type Inference (TS can automatically infer your return type even if you explicitly dont give it)
// however, good practice to always explicitly decalare your return type in the function
// function sum(a: number, b: number): number {
//     return a+b;
// }
// const value = sum(1,2);
// console.log(value);


// const isLegal=(age: number): boolean => {
//     if (age >= 18)
//         return true;
//     else
//         return false;
// }
// if (isLegal(18))
//     console.log("legal");
// else
//     console.log("not legal");



const myFunc=(): void => {
    console.log("hi there");
}
const runAfterXSeconds=(fnc: ()=>void, x: number): void => {
    setTimeout(fnc, x*1000);
}

runAfterXSeconds(myFunc, 3);