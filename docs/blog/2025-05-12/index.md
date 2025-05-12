---
title: Boost Golang Efficiency at No Cost
description: Get 3–5% faster just by organizing your structs better.
head:
    - ['link', {rel: 'prefetch', as: 'image', href: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tZh9r0lLgjRlfiMK6r04kEQNc59egnYLduJA3'}]
    - ['meta', { name: 'keywords', content: 'Get 3–5% faster just by organizing your structs better' }]
    - ['meta', { property: 'og:description', content: 'Get 3–5% faster just by organizing your structs better' }]
    - ['meta', { property: 'og:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tZh9r0lLgjRlfiMK6r04kEQNc59egnYLduJA3' }]
    - ['meta', { name: 'twitter:description', content: 'Get 3–5% faster just by organizing your structs better' }]
    - ['meta', { name: 'twitter:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tZh9r0lLgjRlfiMK6r04kEQNc59egnYLduJA3' }]
date: 2025-05-12
---


# Boost Golang Efficiency at No Cost

[<- Back to blogs](/blog)

!["Truth can be stated in a thousand different ways, yet each one can be true” - Swami Vivekananda](https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tZh9r0lLgjRlfiMK6r04kEQNc59egnYLduJA3)

Ever pack a suitcase and realize halfway through that things don’t quite fit, even though they should? So, you take everything out, reorganize it more efficiently, and suddenly, there’s space to spare. Believe it or not, your computer does something very similar when it stores data in memory.

**A Surprising Bonus: Faster Programs with a Simple Tweak**

Would you believe me if I told you that you can make your program 3–5% faster just by organizing your structs better? It might sound unbelievable, but changing the order of your struct fields can cut down on memory waste and speed up data access. It's like finding extra space in your suitcase without needing to buy a new one!

When you're working with structs in a language like Go (or C, Rust, etc.), the way you arrange your fields can have a big impact on how efficiently your program runs. This concept is called **Struct Field Alignment**, and it’s one of those behind-the-scenes things that developers often overlook, until performance becomes a problem.

In this post, we’ll break down what struct field alignment is, why it matters, and how a few simple tweaks can make your programs faster and more memory-efficient. No heavy computer science jargon. We will just look at clear examples, practical tips, and a few “aha!” moments along the way.

Let’s dive in and discover how a bit of rearranging can lead to a boost in performance.

**Memory Alignment Basics**

![row-of-mail-boxes-on-wooden-table](https://freerangestock.com/sample/69292/row-of-mail-boxes-on-wooden-table.jpg )

* **What is it?**  
    Imagine your computer’s memory as a long row of mailboxes, each with a specific number. Memory alignment means putting information into these mailboxes so that they start at the right spot based on the computer’s rules. When data is “aligned,” it means it’s neatly organized along these boundaries.
    
* **Why does it matter?**  
    When the data isn’t aligned correctly, the CPU has to work harder. It might need to check more mailboxes (or parts of them) to get the data it needs. This extra work slows things down.
    
* **What does the Go compiler do?**  
    In the Go programming language, the system automatically adds a few extra empty spots (padding bytes) between pieces of data if needed. This is like adding empty mailboxes to make sure everything lines up just right for the CPU.
    

**Cache Efficiency**

* **How does the CPU see memory?**  
    The CPU doesn’t look at one single byte (or piece of data) at a time. It grabs a chunk of memory all at once, called a cache line. Think of a cache line as a bundle of 64 mailboxes that the CPU checks together.
    
* **Why is alignment linked to cache?**  
    If your data is well arranged (aligned), then when the CPU grabs a cache line, it gets a bunch of related information that is stored close together. This means the CPU can work faster because it doesn’t have to pick and choose from messily spread out data.
    
* **In simple terms:**  
    Better memory alignment helps your computer fetch and process data more quickly, leading to faster program performance.
    

### Example: Poorly Aligned vs. Well Aligned Structs

Consider two struct definitions that represent the same data logically, but differ in field ordering:

```go
// PoorlyAligned: Fields arranged with smaller data types first.
type PoorlyAligned struct {
    flag  bool   // 1 byte (but real usage may be padded to 8 bytes on a 64-bit system)
    count int64  // 8 bytes
    id    byte   // 1 byte (again, may be padded)
}

// WellAligned: Larger fields are placed first.
type WellAligned struct {
    count int64  // 8 bytes
    flag  bool   // 1 byte, likely followed by less padding when grouped after the int64
    id    byte   // 1 byte
}
```

**What’s the difference?**  
On a 64-bit system, the **PoorlyAligned** struct might require up to 24 bytes of memory due to extra padding inserted between fields. Meanwhile, the **WellAligned** struct might only require 16 bytes because arranging from largest to smallest minimizes wasted space.

### False Sharing in Concurrent Workloads

#### 1. What Is False Sharing?

* **The Core Issue:**  
    False sharing happens when two (or more) variables that are used by different parts of your program (for example, different threads or goroutines) end up stored close together within the same cache line.
    
* **Why It's a Problem:**  
    Even though these variables are separate, because they share the same cache line, if one thread changes its variable, the entire cache line is marked as changed. This forces other threads that also use data from that same cache line to reload the data, even if they don't care about the variable that was changed.  
    This unnecessary reloading causes delays and reduces performance, especially in code where many threads are updating their own variables frequently.
    

#### 2. How Does False Sharing Occur in Structs?

Consider a struct with two separate counter variables:

```go
// Vulnerable struct (no padding)
type SharedCounterBad struct {
    a int64
    b int64
}
```

* **Without Padding:**  
    Both `a` and `b` are placed next to each other in memory. If two goroutines update `a` and `b` concurrently, they are likely to be in the same cache line.
    
* **Result:**  
    When one goroutine updates its counter, it may inadvertently force the cache line to be reloaded in another CPU core—even though the other goroutine is not touching that exact variable. This extra reloading slows things down.
    

#### 3. Solving False Sharing with Padding

Padding is a way of inserting extra, unused bytes between fields in a struct to ensure that critical fields are not stored in the same cache line.

Here's an improved version of the struct with padding:

```go
// Improved struct (with padding to separate cache lines)
type SharedCounterGood struct {
    a int64
    _ [56]byte // Padding: 8 (a) + 56 = 64 bytes, forcing b onto a new cache line
    b int64
}
```

* **How Padding Works:**  
    The padding (`_ [56]byte`) is deliberately inserted between `a` and `b`. This extra space pushes `b` to the beginning of a new cache line or at least far enough from `a` so that the two do not share the same 64-byte block.
    
* **Impact:**  
    Now, when one goroutine updates `a` and another updates `b`, they do not affect each other's cache line. This separation prevents the unnecessary reloading of the cache line, improving performance in concurrent execution.
    

## Measuring the Impact with Benchmarks

Benchmarking helps us quantify how struct alignment affects performance. Below is a sample benchmarking file that allocates 10 million instances of each struct type and updates their fields.

### Benchmarking Code

```go
package main

import (
    "sync"
    "testing"
)

// Define our structs
type PoorlyAligned struct {
    flag  bool
    count int64
    id    byte
}

type WellAligned struct {
    count int64
    flag  bool
    id    byte
}

// Benchmark for the poorly aligned struct
func BenchmarkPoorlyAligned(b *testing.B) {
    for i := 0; i < b.N; i++ {
        items := make([]PoorlyAligned, 10_000_000)
        for j := range items {
            items[j].count = int64(j)
        }
    }
}

// Benchmark for the well aligned struct
func BenchmarkWellAligned(b *testing.B) {
    for i := 0; i < b.N; i++ {
        items := make([]WellAligned, 10_000_000)
        for j := range items {
            items[j].count = int64(j)
        }
    }
}

// ----------------------------------------------------------------------------
// False Sharing Examples: When Concurrency Meets Memory Layout
// ----------------------------------------------------------------------------

// False sharing occurs when independent data fields reside on the same cache line.
// Two goroutines updating different fields in the same cache line will force each
// other to reload the entire cache line, reducing performance.

// Vulnerable struct (no padding)
type SharedCounterBad struct {
    a int64
    b int64
}

// Improved struct (with padding to separate cache lines)
type SharedCounterGood struct {
    a int64
    _ [56]byte // Padding: 8 (a) + 56 = 64 bytes, forcing b onto a new cache line
    b int64
}

// Benchmark for false sharing scenario
func BenchmarkFalseSharingBad(b *testing.B) {
    for i := 0; i < b.N; i++ {
        var c SharedCounterBad
        var wg sync.WaitGroup
        wg.Add(2)
        go func() {
            for j := 0; j < 1_000_000; j++ {
                c.a++
            }
            wg.Done()
        }()
        go func() {
            for j := 0; j < 1_000_000; j++ {
                c.b++
            }
            wg.Done()
        }()
        wg.Wait()
    }
}

func BenchmarkFalseSharingGood(b *testing.B) {
    for i := 0; i < b.N; i++ {
        var c SharedCounterGood
        var wg sync.WaitGroup
        wg.Add(2)
        go func() {
            for j := 0; j < 1_000_000; j++ {
                c.a++
            }
            wg.Done()
        }()
        go func() {
            for j := 0; j < 1_000_000; j++ {
                c.b++
            }
            wg.Done()
        }()
        wg.Wait()
    }
}
```

---

### Benchmark Result

**goos**: linux  
**goarch**: amd64  
**pkg**: benc  
**cpu**: AMD Ryzen 7 4800H with Radeon Graphics

| **Benchmark** | **Iterations** | **Time per op (ns)** | **Bytes per op** | **Allocs per op** |
| --- | --- | --- | --- | --- |
| BenchmarkPoorlyAligned-16 | 19 | 82236180 ns/op | 240001029 B/op | 1 allocs/op |
| BenchmarkWellAligned-16 | 20 | 57170136 ns/op | 160006158 B/op | 1 allocs/op |
| BenchmarkFalseSharingBad-16 | 73 | 57170136 ns/op | 271 B/op | 4 allocs/op |
| BenchmarkFalseSharingGood-16 | 548 | 3855612 ns/op | 173 B/op | 4 allocs/op |

## 7. Conclusion

Optimizing struct field alignment in Go is a low-effort, high-impact improvement. By simply adjusting the order of fields:

* **Memory footprint is reduced.**
    
* **Cache performance is enhanced.**
    
* **Concurrency issues like false sharing can be minimized.**
    

These simple changes become especially critical in high-performance or memory-intensive applications. Developers are encouraged to use available tools and follow the outlined guidelines to ensure that their data structures are as efficient as possible.


[Reply via Email](https://letterbird.co/sai)

<span style="color: gray; font-size: 14px;">Date: 2025-05-12</span>
<img src="/mascot/money-fan.png" style="height: 170px; position: absolute; right: 0;" />

<style scoped>
th {
 border-color: var(--border) !important;
}

td {
 border-color: var(--border) !important;
 text-align: left !important;
}

</style>