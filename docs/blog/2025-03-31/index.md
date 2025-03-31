---
title: How to Color Your Terminal - Understanding ANSI Escape Codes
description: Learn how to host SSH applications like pomossh
head:
    - ['link', {rel: 'preload', as: 'image', href: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa'}]
    - ['meta', { name: 'keywords', content: 'Learn how to host SSH applications like pomossh' }]
    - ['meta', { property: 'og:description', content: 'Learn how to host SSH applications like pomossh' }]
    - ['meta', { property: 'og:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa' }]
    - ['meta', { name: 'twitter:description', content: 'Learn how to host SSH applications like pomossh' }]
    - ['meta', { name: 'twitter:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa' }]
date: 2025-03-30
---


# How to Color Your Terminal: Understanding ANSI Escape Codes

[<- Back to blogs](/blog)

![Cover Image](https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tYe2IhjLr5NPLfyHCAXTI0wcDOVaRt3j1qU7e)
*Hmm, what are ANSI Escape codes, and how did they all begin? In this blog, we will explore almost everything there is to know about them, including their history, purpose, and usage*. ***(Yes ANSI works on browser consoles as well)***

### **The Day My Terminal Came to Life**

Let me take you back to 2021. I was trying to debug a javascript program, and my terminal was just a dull sea of white text on a black background. Then, I found a GitHub repository where someone's terminal output had bold red errors, green success messages, and even blinking warnings. *“How is this possible?!”* I wondered. That's when I discovered **ANSI Escape Codes**, the secret ingredient behind terminal magic.

### **The Origins of ANSI Escape Codes**

ANSI Escape Codes date back to the 1970s, born from the need to control text terminals. Before GUIs (Graphical User Interfaces), terminals were the primary way to interact with computers. The **American National Standards Institute (ANSI)** created a standard to unify how terminals displayed text. These codes allowed early developers to:

* Move the cursor
    
* Clear lines
    
* Change text colors
    
* Add bold/italic formatting
    

> Fun fact: The first popular terminal to adopt these codes was the **VT100**, a legendary machine from Digital Equipment Corporation. Its legacy lives on in modern terminal emulators like iTerm2 and GNOME Terminal!

### **What Exactly *Are* ANSI Escape Codes?**

ANSI Escape Codes are sequences of bytes starting with **ESC** (ASCII 27) and **\[\[**, followed by commands. For example:

* `\033[31m` turns text red.
    
* `\033[1m` makes text bold.
    

Here’s the breakdown:

* `\033` is the escape character (you can also use `\x1b` or `\e`).
    
* `[` marks the start of a "Control Sequence Introducer."
    
* `31m` is the command: "set text color to red."
    

<details data-node-type="hn-details-summary"><summary>Why do some codes start with \x1b instead of \033?</summary><div data-type="detailsContent">They’re the same! <code>\033</code> is octal, <code>\x1b</code> is hexadecimal.</div></details>

### **Let’s Paint the Terminal: Basic Usage**

Ready to add color to your scripts? Let’s start with a simple "Hello World" in bash:

```bash
echo -e "\033[31mHello World\033[0m"
```

This prints "Hello World" in red. The `\033[0m` resets the styling.

**Here’s a cheat sheet for common codes:**

| **Code** | **Effect** |
| --- | --- |
| `\033[31m` | Red text |
| `\033[42m` | Green background |
| `\033[1m` | Bold text |
| `\033[4m` | Underline |
| `\033[0m` | Reset all styles |

Try combining them! For example, bold blue text on a yellow background:

```bash
echo -e "\033[34;1;43mLook at me!\033[0m"
```

### **Going Pro: 256 Colors and RGB**

Modern terminals support **256 colors** and even **true color (16 million colors)**!

* **256-color mode**: Use `\033[38;5;⟨color⟩m` for text. Replace `⟨color⟩` with a number from 0–255.
    

```bash
echo -e "\033[38;5;202mOrange text!\033[0m"
```

* **True color (RGB)**: Use `\033[38;2;⟨r⟩;⟨g⟩;⟨b⟩m`.
    

```bash
echo -e "\033[38;2;255;0;127mHot pink!\033[0m"
```

### **First Colorful Project: A weather app**

When I first learned ANSI codes, I built a CLI weather tool that displayed temperatures in **blue** for cold days and **red** for hot ones. Snippet:

```javascript
const temp = 28; // Imagine fetching this from an API
const colorCode = temp > 25 ? "\x1b[31m" : "\x1b[34m"; // Red for >25°C, Blue otherwise
console.log(`${colorCode}Current temperature: ${temp}°C\x1b[0m`);
```

**Output on browser console:**

![](/screenshots/6771cbe7-5943-4cdc-b2b2-dacf210bd15e.png)

![](/screenshots/534714c2-22f5-4158-a046-e0a113962590.png)

🎉 You just made your terminal 10x interesting.

### **Pitfalls to Avoid**

1. **Forgetting to reset styles**: Always end with `\033[0m`, or your terminal might stay red forever!
    
2. **Terminal compatibility**: Not all terminals support RGB. Test with `echo $TERM` first.
    
3. **Readability**: Don't overdo it! Colors should enhance clarity, not create a rainbow explosion.
    

### **Your Turn: Experiment!**

Here’s a challenge:

1. Write a script that prints your name in **bold cyan**.
    
2. Add an underlined message in purple.
    
3. Bonus: Use 24-bit RGB to create a custom color!
    

### **Final Thoughts**

ANSI Escape Codes are a bridge between the sterile world of text and the expressive power of design. They’ve been around for decades, yet they still make developers smile when a burst of color lights up their workflow.

So now let’s color the terminal with red errors, green success messages, and maybe even add a cheeky blinking warning for fun. Your terminal is your canvas.

---

Thanks for reading! If you enjoyed this, drop a comment below with your favorite ANSI code combo. 🎨


<span style="color: gray; font-size: 14px;">Date: 2025-03-30</span>
<img src="/mascot/gorgeous.png" style="height: 170px; position: absolute; right: 0;" />