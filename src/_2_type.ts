// type

// very similar to interfaces, lets you aggregate data together + a few extra things
type User = {                       // need to use '=' here
    name: string,
    age: number
}

interface User2 {
    name: string,
    age: number
}

/* ----------------------------------------------------------------------------------------------- */

// UNION of data types
type GreetArg = number | string;        // ! data type is either number OR string, you CANNOT do this with interfaces

// function greet(id: number | string){}     // this works too
function greet(id: GreetArg){}

greet(1);
greet('1'); // wont cause an error


// INTERSECTION of data types
type Employee = {
    name: string,
    startDate: Date
};

type Manager = {
    name: string,
    department: string
};

type TeamLead = Employee & Manager;     // ! data has property of both Employee AND Manager, you CANNOT do this with interfaces

// you can also declare Employee and Manager as interfaces, but for union/intersection using | nd & => must be 'type'
// you can even declare one of them as interface and other as type => but to use union/intersection in this way,
//                                  must use type in your third variable (here, TeamLead)
/*
    ? interfaces can achieve a similar result but using a different syntax :
        interface TeamLead extends Employee, Manager {}
*/

const tl: TeamLead = {
    name: "Vineet",
    startDate: new Date(),
    department: "SD"
};

/*
    ! doubt - what is the difference between interfaces and types if they do the same thing?
    - Interfaces are primarily used to define the structure of objects and classes, making them ideal for object-oriented design.
    - Types are more flexible—they can describe objects too, but also support primitives, unions, intersections, tuples
        and other complex type compositions that interfaces cannot.
*/