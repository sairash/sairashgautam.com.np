---
title: Architecting for One Million Concurrent Connections
description: Discover the Method ChitoSocket Used to Handle Millions of Connections.
head:
    - ['link', {rel: 'prefetch', as: 'image', href: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6toJrKcuyciU06w7xkslLhGM2DZ3vBazQFypuT'}]
    - ['meta', { name: 'keywords', content: 'Discover the Method ChitoSocket Used to Handle Millions of Connections' }]
    - ['meta', { property: 'og:description', content: 'Discover the Method ChitoSocket Used to Handle Millions of Connections' }]
    - ['meta', { property: 'og:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6toJrKcuyciU06w7xkslLhGM2DZ3vBazQFypuT' }]
    - ['meta', { name: 'twitter:description', content: 'Discover the Method ChitoSocket Used to Handle Millions of Connections' }]
    - ['meta', { name: 'twitter:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6toJrKcuyciU06w7xkslLhGM2DZ3vBazQFypuT' }]
date: 2025-12-25
---


# Architecting for One Million Concurrent Connections

[<- Back to blogs](/blog)

!["Discover the Method ChitoSocket Used to Handle Millions of Connections"](https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6toJrKcuyciU06w7xkslLhGM2DZ3vBazQFypuT)


I’ve been working with Golang for about three years now, but my roots are actually in dynamic languages like JavaScript, Python, and PHP. Go was my first real introduction to static typing even before I ever touched TypeScript and I was immediately hooked.

One of my very first projects was **ChitoSocket**, a library that went on to push **200,000+ active connections** on a **single CPU core** while sipping just **1.6 GB of RAM**. The idea came from a problem I was facing at my job; I was working at a ride-sharing company where we needed to manage tons of simultaneous connections. We were using [`socket.io`](http://socket.io), but it wasn't performing the way we needed it to and was causing a lot of headaches.

In a moment of ‘crazy’ ambition, I wondered if I could just build something better myself. I had recently stumbled across a famous article about [a million websockets and go](https://www.freecodecamp.org/news/million-websockets-and-go-cc58418460bb/), and I was so inspired that I wanted to see if I could recreate it. That’s how **ChitoSocket** came to life. I chose the name because *Chito* means "fast" in my mother tongue, Nepali.

This article serves the lesson learned in the pursuit of **zero-allocations and** how I achieved the "Chito" (Fast) spirit as I fundamentally had to rethink how memory and concurrency were handled.

---

## 1\. The Core Engine: `epoll` and `gobwas/ws`

Instead of using standard HTTP-based WebSocket libraries like Gorilla, ChitoSocket is built on **gobwas/ws**. I thought of going in low-level which would allow me to manage packet handling and buffer reuse directly.

### The Epoll Loop

The secret to ChitoSocket's scalability lies in `epoll`. Instead of having a goroutine waiting on every socket, ChitoSocket uses a single **epoll instance** to monitor all file descriptors (FDs). When a connection is upgraded, its FD is added to the epoll set. The `epollLoop` calls `syscall.EpollWait`, which blocks I/O until one or more sockets have ready-to-read data. The server "wakes up" to handle that specific connection only when the data arrives.

---

## 2\. The Quest for Zero-Allocations

Garbage Collection (GC) is a challenge for low-latency systems because every time you allocate a new object on the heap, the GC eventually has to clean it up, causing "Stop the World" pauses. To address this, ChitoSocket is designed with a **zero-allocation** (or near-zero) approach. I used `sync.Pool` extensively in `utilities` to reuse objects instead of constantly creating and destroying them. For example, when a message comes in, I don't allocate a new struct; I pull one from the **SubscriberMessage Pool**, fill it with data, and return it when processed. I also use pools for byte buffers used in JSON marshaling and for slices used in room operations. Even the `Subscriber` objects representing users are recycled to maintain heap stability. Additionally, as `utilities`, I implemented `unsafeStringToBytes` and `unsafeBytesToString`. These functions use Go’s `unsafe` package to cast memory between strings and byte slices without copying the underlying data, saving both CPU cycles and memory.

---

## 3\. High-Concurrency Safety with `atomic` and [`sync.Map`](http://sync.Map)

Managing millions of connections across multiple CPU cores require thread safety without the bottleneck of heavy locks. I used `atomic` operations, such as `atomic.Bool` and `atomic.Uint64`, for state management. For example, to check whether a subscriber is closed or generating a unique ID, atomic instructions are used which are much faster than Mutexes. In the `Epoll` struct, I used a `sync.Map` to store the mapping between file descriptors and `Subscriber` objects. This is optimized for scenarios where keys are stable and reads are much more frequent than writes, making it ideal for a socket server.

---

## 4\. Scaling the Room System: Hub Sharding

A common bottleneck in socket servers is the "Room Map"; if you have one large map protected by a single Mutex, every message sent to any room competes for that one lock. To address this, I implemented **Hub Sharding** where the server divides rooms across multiple "shards" (hubs) using an **FNV-1a hash** of the room name. This spreads lock contention across multiple CPU cores, enabling messages to be sent to "Room A" and "Room B" at the same time without blocking each other.

---

## 5\. Architecture Overview

ChitoSocket follows a clear, pipelined path for every message:

1. **Upgrade:** An HTTP request is upgraded to a WebSocket using `ws.UpgradeHTTP`.
    
2. **Registration:** The connection's FD is added to the Epoller.
    
3. **The Wait:** The `epollLoop` waits for data.
    
4. **Worker Pool:** Once data arrives, it is parsed using **gjson** (for high-speed JSON access) and dispatched to a **Worker Pool**.
    
5. **Handlers:** User-defined `HandlerFunc` callbacks are executed by the workers, keeping the I/O loop free.
    

---

## The Result: Real-World Performance

The result of these optimizations is a server capable of handling extreme concurrency on modest hardware. **Concurrency**: It is built to handle millions of connections. **Performance**: It supports approximately 200,000 active connections while using only 11.5% of a single CPU core. **Memory**: It uses about 1.6 GB RSS for 200,000 connections, including room management overhead. ChitoSocket demonstrates that by delving into the Go runtime and effectively using the Linux kernel, you can create systems that are both incredibly fast and highly efficient.

---

## Hence,

ChitoSocket began as a problem I couldn't ignore and turned into a project that completely changed how I approach building systems. By focusing on low-level details, managing memory carefully, and prioritizing performance, I learned that scalability isn't about tricks, it's about the basics. Beyond the numbers or benchmarks, ChitoSocket shows that curiosity, a bit of persistence, and the willingness to rethink everything can create something truly powerful. This project transformed Go from "a new language I was curious about" into the tool that reshaped how I design systems today. ChitoSocket is the result of curiosity meeting necessity and a reminder that sometimes the best way to solve a problem is to build the thing you wish already existed.


[Github Repo: ChitoSocket](https://github.com/sairash/chitosocket)

[Reply via Email](https://letterbird.co/sai)

<span style="color: gray; font-size: 14px;">Date: 2025-05-12</span>
<img src="/mascot/fly.png" style="height: 170px; position: absolute; right: 0;" />

<style scoped>
th {
 border-color: var(--border) !important;
}

td {
 border-color: var(--border) !important;
 text-align: left !important;
}

</style>