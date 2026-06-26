// ugly way to do stuff

// function isLegal(user: {
//     firstname: string;
//     lastname: string;
//     age: number;
// }): boolean {
//     if (user.age > 18)
//         return true;
//     else
//         return false;
// }

// const user = {
//     firstname: "vineet",
//     lastname: "singh",
//     age: 21
// }



// better way - introduce interfaces
// Interface = reusable object type
// interface User{
//     firstname: string;
//     lastname: string;
//     age: number;
//     email?: string;         // optional parameter using "?:"
// };

// function isLegal(user: User): boolean {
//     if (user.age > 18)
//         return true;
//     else
//         return false;
// }

// const user1: User = {
//     firstname: "Vineet",
//     lastname: "Singh",
//     age: 21
// }

// if (isLegal(user1))
//     console.log("legal");
// else
//     console.log("not legal");

/* ------------------------------------------------------------- */

// Implementing interfaces
// This says
        // Any Person-like object must contain these properties => BLUEPRINT for classes / SHAPE for objects
        // It doesn't create anything.
interface Person{
    name: string;
    age: number;
    greet(phrase: string): void;
};

/*
    ! doubt - why not just use classes instead of interface to define type of data?
        - A class creates real objects with constructors, methods, and runtime behavior, which is unnecessary when
        you only want to describe the shape of data.
        - An interface exists only at compile time and adds zero runtime code, making it the preferred choice for
        defining types of objects like API responses, props, or state.
*/

/*  class Employee implements Person
        does NOT mean
            Employee inherits Person
        It means
            Employee promises to satisfy that blueprint.

    Think of interfaces as contracts
*/
class Employee implements Person{
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
};

const emp1 = new Employee("vineet", 21);
emp1.greet('hi');