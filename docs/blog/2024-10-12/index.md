---
title: Testing VLANG
date: 2024-10-12
---

# Testing VLANG

[<- Back to blogs](/blog)


While searching, I discovered a programming language called [VLANG](https://vlang.io) (or simply "V"). It’s intriguing because its syntax feels very `similar` to [Go](https://go.dev/), but with a few design choices that make it look even `cleaner`. For instance, V includes `enums` and `option` types, and its error handling is like Go’s—but arguably better. V uses the `or` keyword for error handling, which makes the code more readable and streamlined.


Here's a quick example of error handling in V:
``` v
x := 10

fn evaluate_x() !string {
    if x == 10 {
        return error("How could x be 10?!!!!")
    }
    return "Thankgod! x in not 10!!"
}

output_string := evaluate_x() or {  // or keyword executes if the function returns with error
    print("The function returned with error")
    return
}

println(output_string)

```
V uses a similar approach for handling `null` returns, making it even easier to work with optional values. I’m excited to dig deeper into this language and build something `cool` with it!

<span style="color: gray; font-size: 14px;">Date: 2024-10-12</span>
