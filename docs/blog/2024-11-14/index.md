---
title: Is javascript actually compiled?
date: 2024-11-15
---

# Is javascript actually compiled?
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

## Lexical scope, hoisting and closures
Well the first question that I asked was is Javascript actually compiled? Actually the simple answer is no, it falls under the category of 'dynamic' or 'interpreted' languages. But in a way it works like a compiler too.