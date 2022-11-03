# TypeScript


## What is TypeScript?
    - TypeScript is a JavaScript superset, is a language building up on javascript, adds new Feature and advantages to javascript. TS can't be execute in browser or nodejs, the envirement.

    - TS is a programing language but it's also a tool it's a powerful compiled that run over the code to compile to JS, the result of TS is JS.

## Why TypeScript?

    * Is strictly typed


### Error in JS

    * Type error, it can be seen in \example-1, the first function where the input is a string, and at the moment of add two values, JS will concatenate them because of the string type. In the second function JS will add them correctly, this will be acomplish with Number(), changing the type of the input into number.

    ``` [javascript]
    function add(num1, num2) {
    return num1 + num2;
    }
    ```

    ``` [javascript]
    function add(num1, num2) {
    return Number(num1) + Number(num2);
    }
    ```