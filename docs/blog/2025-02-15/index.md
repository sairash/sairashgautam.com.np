---
title: Beginners Guide- How to Procedurally Generate Monsters
description: Procemon - How to make Procedural Monstor.
head:
    - ['link', {rel: 'preload', as: 'image', href: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tYhuuCPLr5NPLfyHCAXTI0wcDOVaRt3j1qU7e'}]
    - ['meta', { name: 'keywords', content: 'Procemon: Procedural Generated Monstor.' }]
    - ['meta', { property: 'og:description', content: 'Procemon: Make Procedural Monstor.' }]
    - ['meta', { property: 'og:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tYhuuCPLr5NPLfyHCAXTI0wcDOVaRt3j1qU7e' }]
    - ['meta', { name: 'twitter:description', content: 'Procemon: Make Procedural Monstor.' }]
    - ['meta', { name: 'twitter:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tYhuuCPLr5NPLfyHCAXTI0wcDOVaRt3j1qU7e' }]
date: 2025-02-15
---

# Beginners Guide: How to Procedurally Generate Monsters

[<- Back to blogs](/blog)

![Cover](https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tYhuuCPLr5NPLfyHCAXTI0wcDOVaRt3j1qU7e)
Let’s turn random noise into cool monster sprites! This guide breaks down each step in simple terms. The complete TypeScript implementation creates organic-looking creatures while maintaining full control over their general shape!

### The Core Concept: Masks and Cellular Automata

![Example Image](https://procemon.sairashgautam.com.np/?size=32&color=lime&background=black)

*(Example Image) (Refresh And See It change)*

Our solution combines two key techniques:

1. **Shape masks** - Template patterns that guide initial generation
    
2. **Cellular automata** - Smoothing algorithm that creates organic shapes
    

Let's break down the implementation piece by piece.

---

## 🌱 Step 1: Planting Seeds with Random Noise

We start by generating a chaotic pattern of pixels. Imagine throwing confetti at a grid and some spots get filled, others stay empty.

**Key Code**:

```typescript
// Creates initial random pattern
_generate_random() {
  for (let y = 0; y < size; y++) {
    const row: boolean[] = [];
    for (let x = 0; x < size; x++) {
      // Check mask value at this position
      const maskValue = this.mask[y][x];
      
      // Apply rules:
      if (Math.random() < maskValue / 2 && Math.random() > 0.2) {
        row.push(true); // Place a pixel
      } else {
        row.push(false); // Leave empty
      }
    }
    this.map.push([...row, ...row.reverse()]); // Mirror for symmetry
  }
}
```

---

## 🎭 Step 2: Controlling Shape with Masks

A **mask** acts like a stencil to guide where pixels can appear. Think of it as a probability map:

| **Mask Value** | **Meaning** |
| --- | --- |
| **0** | Never place a pixel (0% chance) |
| **1** | 50% chance to place a pixel |
| **2** | 80% chance to place a pixel\* |

*\*Even at 2, we add* `Math.random() > 0.2` for natural variation

**Example Mask (Island Shape)**:

```typescript
[
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 2, 2], // Center has highest density
  // ... more rows ...
]
```

This **8x8** mask stretches to your desired sprite size (e.g., **32x32**).

---

## 🧪 Step 3: Smoothing with Cellular Automata

Raw noise looks jagged. **Cellular automata** apply nature-inspired rules to create organic shapes.

### The `walk()` Function

```typescript
// Runs smoothing process
walk(steps = 4, birthLimit = 5, deathLimit = 4) {
  for (let i = 0; i < steps; i++) {
    this.map = this.getNextGeneration(birthLimit, deathLimit);
  }
}
```

**Rules for Each Cell**:

1. Count living neighbors (8 surrounding cells) *(Described Bellow)*
    
2. Apply survival rules:
    
    * **Steps**: How many times to repeat smoothing
        
    * **Alive cell**: Dies if neighbors ≤ `deathLimit` (default 4)
        
    * **Dead cell**: Born if neighbors == `birthLimit` (default 5)
        

---

## 🔍 Step 4: How Neighbor Checking Works

We check all 8 surrounding cells (Moore neighborhood):

```typescript
const NEIGHBOR_OFFSETS = [
  [-1, -1], [-1, 0], [-1, 1], // Top row
  [ 0, -1],          [0, 1],  // Sides 
  [ 1, -1], [1, 0], [1, 1]   // Bottom row
];
```

*Visualization*:

```typescript
X X X  
X █ X  // Checks all "X" positions  
X X X  
```

---

### The `getNextGeneration()` Function

This applies the "*life*" rules to every pixel:

```typescript
getNextGeneration(birthLimit: number, deathLimit: number) {
  const newGrid: boolean[][] = [];
  for (let y = 0; y < this.size; y++) {
    newGrid[y] = [];
    for (let x = 0; x < this.size; x++) {
      // Count living neighbors
      let liveNeighbors = 0;
      for (const [dx, dy] of NEIGHBOR_OFFSETS) {
        const ny = y + dy;
        const nx = x + dx;
        if (this.map[ny]?.[nx]) liveNeighbors++;
      }

      // Apply survival rules
      const isAlive = this.map[y][x];
      newGrid[y][x] = isAlive 
        ? liveNeighbors > deathLimit // Survive if enough neighbors
        : liveNeighbors === birthLimit; // Born if perfect neighbor count
    }
  }
  return newGrid;
}
```

---

## 🎨 Step 5: Drawing Your Monster

Convert the grid into visible art!

### Canvas Rendering:

```typescript
plot_canvas(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  
  this.map.forEach((row, y) => {
    row.forEach((alive, x) => {
      if (alive) {
        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
      }
    });
  });
}
```

### SVG Output (Perfect for Web)

```typescript
plot_svg(bgColor: string, pixelColor: string) {
  let svg = `<svg viewBox="0 0 ${this.size} ${this.size}">`;
  svg += `<rect width="100%" height="100%" fill="${bgColor}"/>`;
  
  this.map.forEach((row, y) => {
    row.forEach((alive, x) => {
      if (alive) {
        svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="${pixelColor}"/>`;
      }
    });
  });
  
  svg += "</svg>";
  return svg;
}
```

---

## 🌟 Bringing It All Together

1. **Mask Template** → 2. **Noisy Pattern** → 3. **Smoothed Shape**
    

```typescript
Mask:       Initial:      After Smoothing:
0 0 0       █ █ █         █████  
0 1 0  →   █   █   →     █   █  
0 0 0         █           █████  
```

**Example**:

```typescript
// Create a 32px island-shaped monster
const monster = new Procemon(32, undefined, maskType.island);
monster.walk(4, 5, 4); // Smooth 4 times
const svgCode = monster.plot_svg("black", "#FF00FF"); // Pink monster!
```

---

## Experiment!

* **Try New Masks**: Create spiky, round, or winged shapes
    
* **Adjust Rules**: `monster.walk(3, 4, 3)` creates denser monsters
    
* **Go Colorful**: Use `plot_svg("navy", "gold")` for royal creatures
    

Procedural generation lets you create infinite unique sprites. No two monsters will ever be the same! 🎮👾

*Full code and interactive demo available on* [github.com/sairash/procemon](https://github.com/sairash/procemon) and [procemon.sairashgautam.com.np/?size=32&color=lime&background=black](https://procemon.sairashgautam.com.np/?size=32&color=lime&background=black)