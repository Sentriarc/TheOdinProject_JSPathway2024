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