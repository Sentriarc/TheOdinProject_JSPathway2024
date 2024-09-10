[+] Object Constructors [+]
- when you have a specific type of object that you need to duplicate, using an object constructor is recommended
- the "this" keyword applies to whatever the function calls (this is so that you don't have to find the exact variable name and console log it, or use it in general)
    Ex.
        function Player(name, marker) {
            this.name = name;
            this.marker = marker;
            this.sayName = function() {
                console.log(this.name)
            };
        }

        const player1 = new Player('steve', 'X');
        const player2 = new Player ('also steve', 'O');
        player1.sayName(); // logs 'steve'
        player2.sayName(); // logs 'also steve'

[+] The Prototype [+]
- "Before we go much further, there’s something important you need to understand about JavaScript objects. All objects in JavaScript have a /prototype/. The /prototype/ is another object that the original object inherits from, which is to say, the original object has access to all of its /prototype’s/ methods and properties."
    - All objects in JS have a prototype
    - The prototype is another object
    - ...that the original object inherits from, and has access to all of its prototype's methods and properties
- Syntax:
    Object.getPrototypeOf()
        Ex.
            Object.getPrototypeOf(player1);


[+] Object.getPrototypeOf() vs .__proto__ vs. [[Prototype]] [+]
- .__proto__ is a deprecated version of the getPrototypeOf() function, and is not recommended for use
- [[Prototype]] is also legacy code


[+] Prototypal Inheritance [+]
- what is the purpose of using /prototype/?
    - we can define properties and functions common among all objects on the /prototype/ to save memory
    - prototypal inheritance: prototypes can inherit from one another in order to use each other's local functions and variables (i think that's what it means)