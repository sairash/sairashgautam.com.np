---
title: Writing a .bf interpreter
date: 2024-11-10
---

# Writing a .bf interpreter

[<- Back to blogs](/blog)

Curious about what “.bf” is? Don’t worry—you’re not alone! The “.bf” extension belongs to `Brainfuck`, an "esoteric language" or esolang. Unlike conventional programming languages, esolangs are designed to push the boundaries of how we think about programming. Brainfuck, invented by Urban Müller in `1993`, is a classic in this genre. Müller created it with the ambitious goal of making a language for which he could write the smallest possible compiler—a feat he achieved with a compiler just 240 bytes in size 🤯.

I’ve always been fascinated by the quirks of esoteric languages, so I decided to dive into Brainfuck by creating my own interpreter for it. And, just to add a personal twist, I built the interpreter in a language I developed myself, called Danfe! Brainfuck, despite its intimidating name, only uses eight characters: `>`, `<`, `+`, `-`, `.`, `,`, `[`, and `]`. Each character has a unique function, and together, they create a surprisingly powerful (and challenging!) language. Let’s break down what each symbol does and explore how they fit together in this mind-bending language.

## Explaining Characters
|  Keyword | Info | C equivalent |
| -- | -- | -- |
| `>` | Increment the pointer. | ++p |
| `<` | Decrement the pointer. | --p |
| `+` | Increment the byte at the pointer. | ++*p |
| `-` | Decrement the byte at the pointer. | --*p |
| `.` | Output the byte at the pointer. | putchar(*p) |
| `,` | Input a byte and store it in the byte at the pointer. | *p = getchar() |
| `[` | Jump forward past the matching \] if the byte at the pointer is zero.|  while (*p) {|
| `]` | Jump backward to the matching \[ unless the byte at the pointer is zero.| } |

::: info
`p` has been previously defined as a `char*` in c equivalent.
:::


## Making Interpreter
Now let's make the actual interpreter in `danfe`:


```danfe :line-numbers=1
if len(__args__) < 2 {
   panic("Path to the bf code file is needed!")
}

key = __args__ >>
key = key[0]
```
**Breakdown:**
1. `__args__` provides the arguments passed by user while running the program.
2. We check the length of the `__args__` and if it is less than 2 meaning we don't have an input `.bf` file we `panic` and stop the program.
3. `__agrs__ >>` pops the last value from `__args__` and puts the value in key
4. `key[0]` takes the key value from the table and puts it again in key


Now let's read contents of the file defined in the identifier `key`:
```danfe :line-numbers=8
code = v {
       import os
       return(os.read_file("%i{key}")!)
} endv
```
**Breakdown:**
1. The `v {` initiates a vblock. Everything written inside it is executed through v binary.
2. The output of the v code is stored in the variable `code`.


Now let's make the memory block of our interpreter.

```danfe :line-numbers=13
memory = []
pointer = 0
code_ptr = 0
loop_stack = []

x = 0

# create memory block
for x < 3000 {
   memory << 0
   x = x + 1
}
```
**Breakdown:**
1. Initialize all the arrays needed, and fill in the memory array with `3000` `zeros`.


Now the block which does the actual interpretation.

``` danfe :line-numbers=26
for code_ptr < len(code) {
   command = code[code_ptr]
  
   if command == ">" {
       pointer = pointer + 1
   }else if command == "<" {
       pointer = pointer - 1
   }else if command == "+" {
       memory[pointer] = (memory[pointer] + 1) % 256
   }else if command == "-" {
       memory[pointer] = (memory[pointer] - 1) % 256
   }else if command == "." {
       print(chr(memory[pointer]))
   }else if command == ","{
       got_input = input("")
       memory[pointer] = chr(got_input[0])
   }else if command == '[' {
       if memory[pointer] == 0 {
           open_brackets = 1
           for open_brackets {
               code_ptr = code_ptr + 1

               if code[code_ptr] == '[' {
                   open_brackets = open_brackets + 1
               } else if code[code_ptr] == ']' {
                   open_brackets = open_brackets - 1
               }
           }
       } else {
           loop_stack << code_ptr
       }
   } else if command == ']' {
       if memory[pointer] != 0 {
           code_ptr = loop_stack[len(loop_stack) - 1]
       } else {
           loop_stack >>
       }
   }

   code_ptr = code_ptr + 1
}
```
**Breakdown:**
1. The current code in pointer is stored in the variable `command`.
2. All of the other operations done in the if else sections are done as it is defined in the [Explaining Characters](./index.md#explaining-characters)

Let's test the interpreter, by writing a "simple" brainfuck program:
``` md
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
```
The code above is to print `Hello World!`

If we run the interpreter by saving the bf program in helloworld.bf.

``` sh
danfe run main.df ./helloworld.bf
```
``` md
# Output
Hello World!
```

The full code is provided in this github repo: [Link](https://github.com/danfe-df/danfe-v-brainfuk)

## Main Takeaway
Writing an interpreter for brainfuck is `easier` than writing an actual brainfuck hello world program. Even tho, I created the whole interpreter I still can't write a bf program properly. It just shows how incredibly and masterfully the brainfuck esolang was created.


[Reply via Email](https://letterbird.co/sai)


<span style="color: gray; font-size: 14px;">Date: 2024-11-10</span>
<img src="/mascot/woe-is-me.png" style="height: 170px; position: absolute; right: 0;" />


<style scoped>
th {
 border-color: var(--border) !important;
}

td {
 border-color: var(--border) !important;
 text-align: left !important;
}

.adders {
   height: 150px;
}
.pacman {
   height: 350px;
}
</style>

