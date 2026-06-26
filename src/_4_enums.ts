// Enums => Enumerations
// feature that allows you to define a set of named constants

/*

! Difference between interface, type and enum
-----------------------------------------------------------------------------------------------------------------------------------
Feature	       +           Purpose	                                              +                 Example
-----------------------------------------------------------------------------------------------------------------------------------
Interface	        Describes the shape of an object or class	                             Person, Todo, Props

Type	            Creates a type alias for any type                                    User, string | number, Employee & Manager
                    (objects, primitives, unions, intersections, tuples, etc.)

Enum	            Defines a fixed set of named constant values	                        Status.Pending, Role.Admin
-----------------------------------------------------------------------------------------------------------------------------------

*/

type KeyInput = "up" | "down" | "left" | "right";

enum Direction {
    Up,                 // internally, js doesnt know enum so this is tagged as = 0
    Down,               // = 1
    Left,               // = 2
    Right               // = 3          unless you manually assign a value for each (eg: Up = "up")
}

function doSomething(keyPressed: Direction){
    // do something
    if (keyPressed == Direction.Up){
        //
    }
}

// doSomething("up");
// doSomething("down");
// doSomething("left");
// doSomething("right");
// doSomething("rightrandom");      // will give error

doSomething(Direction.Up);
doSomething(Direction.Down);


// example usecase in express
// const express = require('express');
// const app = express();

// enum ResponseStatus{
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get('/', (req, res)=>{
//     if (!req.query.user)
//         return res.status(ResponseStatus.Error).json({});
    
//     return res.status(ResponseStatus.Success).json({});
// });