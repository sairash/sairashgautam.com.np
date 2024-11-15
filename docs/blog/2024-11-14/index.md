---
title: Is javascript actually compiled?
date: 2024-11-15
---

# Is javascript actually compiled?

[<- Back to blogs](/blog)


::: details Refrence {open}
 Kyle Simpson’s Book on Scope & Closures - [PDF](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)
:::

### Hoisting
While making my own programming language `Danfe` I got to a situation where if I call a function before creating it I get an `error`.

``` danfe
function_to_print()

function function_to_print() {
    println("Hello from sairash!")
}
```

``` md
# Output
cli execution error: src.errors_df.DfError: 

                                       
Error Encountered when eval -> call_exp: 
hello.df:1:1: undefined: function_to_print
```

If you think about it, It is the way it should work right? As all programs are executed line by line and if you don't have function defined first it doesn't know about the function. So in return it gives an error. But I have been spoiled by javascript and if you write the same program in javascript.
``` js
function_to_print()

function function_to_print() {
    console.log("Hello from sairash!")
}
```
We get:
``` md
# Output
Hello from sairash!
```
Now why is that let's take a closer look.

## Lexical scope and closures
Well the first question that I asked was is Javascript actually compiled? Actually the simple answer is no, it falls under the category of 'dynamic' or 'interpreted' languages. But in a way it works like a compiler too.

### Scoping while lexical analysis:
When you start a js execution, the source code is sent by the engine through to a "compiler", in which while the code is being lexed or tokenized the scopes are defined accourdingly.

for example:
``` js
var b;
var a = "hello";
```

As the lexical analyser encounters the variable declaration for _a(var a)_ it askes scope engine to see if the variable _a_ is already defined for that scope. If yes, it just ignores it, otherwise it asks scope to create a new variable named _a_ fo that scope.

### JS engine working with scope:
When the engine starts to execute the lexed code, the above code is changed to:
``` js
a = "hello";
```

If you see the defference, it is missing a var keyword, as it was already declared by the scoping engine. Kyle suggests in his book that the conversation between engine and scope could sound like:


> Compiler: Hey, Scope Manager, I found a formal declaration for an identifier called `b`, ever heard of it?

> Scope Manager: Nope, never heard of it, so I just created it for you.

> Compiler: Hey, Scope Manager, I found a formal declaration for an identifier called `a`, ever heard of it?

> Scope Manager: Nope, never heard of it, so I just created it for you.

> Compiler: Thankyou, now can you assign the string 'hello' to `a` .

> ...

So now, we understand what scope is. But what happen in the case of nested scopes? Where will the engine go look at? Engine looks at it's current scope than goes to the previous scope and it continues until it is not foud or returns the value when the variable is found.

### Function and Block level scope
You got to know what a scope is, but what creates a scope? A block creates it for example everything that is inside the `{}` punctuation in js creates a seperate scope for it self.

``` js
{
    let data_number = 10;
    console.log( data_number ); // 10
}
console.log( data_number ); // ReferenceError
```

### Describe about Hoisting
The thing that happend [here](./index.md#hoisting) is called hoisting. Where you can invoke a function even before it is declared and the code runs even just as if the opposite happend.


### Closures
In the book Kyle gives a very straightforward defination for what a closure is:

> Clouser is when a function is able to remember and access it's lexical scope even when that function is executing outside it's lexical scope.

This means that a function _bar_ defined inside a function _foo_ will have full access to the outer scope of _foo_, also if being returned within it and invoked outside of _foo_. It sounds very complex but this example will make it very clear.

``` js
function foo() {  // 'scope of foo' aka lexical scope for bar
   var memory = 'hello closure';
   return function bar() {
      console.log(memory);
   }
}var memory = null,
    baz = foo();
    
baz(); // 'hello closure'
```
This was a very good find, I knew the concept of it beofre but looking at it raw and going through everything was good. I will be implementing the same thing in my language soon too.

<span style="color: gray; font-size: 14px;">Date: 2024-11-10</span>
<img src="/mascot/bye-hippo.png" style="height: 170px; position: absolute; right: 0;" />
