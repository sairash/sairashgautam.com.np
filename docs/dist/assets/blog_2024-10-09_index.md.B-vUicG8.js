import{_ as a,c as e,a1 as d,o as c}from"./chunks/framework.GKu-Ijuu.js";const r="/mascot/math.png",s="/assets/halfadder.DHdn1Y70.webp",n="/assets/fulladder.C-awqk4k.png",i="/assets/pacman.CJWFxlHN.png",l="/assets/zerocheck.DcN33xwZ.png",o="/assets/andorlatch.CLpZKUlF.png",b=JSON.parse(`{"title":"Computer's Brain - Adders to RAM","description":"","frontmatter":{"title":"Computer's Brain - Adders to RAM","date":"2024-10-09T00:00:00.000Z"},"headers":[],"relativePath":"blog/2024-10-09/index.md","filePath":"blog/2024-10-09/index.md"}`),v={name:"blog/2024-10-09/index.md"};function h(g,t,p,u,y,x){return c(),e("div",null,t[0]||(t[0]=[d('<h1 id="computer-s-brain-adders-to-ram" tabindex="-1" data-v-c1560277>Computer&#39;s Brain - Adders to RAM <a class="header-anchor" href="#computer-s-brain-adders-to-ram" aria-label="Permalink to &quot;Computer&#39;s Brain - Adders to RAM&quot;" data-v-c1560277>​</a></h1><p data-v-c1560277><a href="/blog.html" data-v-c1560277>&lt;- Back to blogs</a></p><p data-v-c1560277>It&#39;s been a very long time since I have visited this topic. <br data-v-c1560277></p><img src="'+r+'" style="width:200px;" data-v-c1560277><h2 id="adders" tabindex="-1" data-v-c1560277><strong data-v-c1560277>Adders :</strong> <a class="header-anchor" href="#adders" aria-label="Permalink to &quot;**Adders :**&quot;" data-v-c1560277>​</a></h2><p data-v-c1560277>They are the basic functionality of a computer to add 2 binary. There are two types of adders. <code data-v-c1560277>Half Adders</code>, <code data-v-c1560277>Full Adders</code>. <br data-v-c1560277></p><ul data-v-c1560277><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>Half Adders :</strong> They are just XOR gate and AND gate combined. The AND gate is responsible for getting the Carry of Addition. Look at the examples bellow-</p><table tabindex="0" data-v-c1560277><thead data-v-c1560277><tr data-v-c1560277><th data-v-c1560277>A</th><th data-v-c1560277>B</th><th data-v-c1560277>Output</th></tr></thead><tbody data-v-c1560277><tr data-v-c1560277><td data-v-c1560277>0</td><td data-v-c1560277>0</td><td data-v-c1560277>0</td></tr><tr data-v-c1560277><td data-v-c1560277>1</td><td data-v-c1560277>0</td><td data-v-c1560277>1</td></tr><tr data-v-c1560277><td data-v-c1560277>0</td><td data-v-c1560277>1</td><td data-v-c1560277>1</td></tr><tr data-v-c1560277><td data-v-c1560277>1</td><td data-v-c1560277>1</td><td data-v-c1560277>10</td></tr></tbody></table><p data-v-c1560277><img src="'+s+'" class="adders" data-v-c1560277> <br data-v-c1560277></p></li><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>Full Adder :</strong> On full adder we tend to take 3 inputs instead of 2, <code data-v-c1560277>A</code>, <code data-v-c1560277>B</code> and <code data-v-c1560277>Cin</code> which is carry in</p><table tabindex="0" data-v-c1560277><thead data-v-c1560277><tr data-v-c1560277><th style="text-align:center;" data-v-c1560277>Input</th><th style="text-align:center;" data-v-c1560277></th><th style="text-align:center;" data-v-c1560277></th><th style="text-align:center;" data-v-c1560277>Output</th><th style="text-align:center;" data-v-c1560277></th></tr></thead><tbody data-v-c1560277><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>A</td><td style="text-align:center;" data-v-c1560277>B</td><td style="text-align:center;" data-v-c1560277>Cin</td><td style="text-align:center;" data-v-c1560277>Sum</td><td style="text-align:center;" data-v-c1560277>Carry</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>0</td><td style="text-align:center;" data-v-c1560277>1</td></tr><tr data-v-c1560277><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td><td style="text-align:center;" data-v-c1560277>1</td></tr></tbody></table><p data-v-c1560277>A Full Adder combines two Half Adders: the first takes inputs A and B, and the second takes the output from the first along with the carry-in (Cin) from the previous calculation. Finally, the carries from both Half Adders pass through an OR gate to produce the new carry and sum.</p><p data-v-c1560277><img src="'+n+'" class="adders" data-v-c1560277> <br data-v-c1560277></p></li></ul><h2 id="flags-generated-by-alu" tabindex="-1" data-v-c1560277>Flags Generated by ALU: <a class="header-anchor" href="#flags-generated-by-alu" aria-label="Permalink to &quot;Flags Generated by ALU:&quot;" data-v-c1560277>​</a></h2><p data-v-c1560277>The 3 important flags that an ALU generates are</p><ul data-v-c1560277><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>Bit Overflow :</strong> It is a condition when the output of the last logic full / half adder has a carryover. This is the same case what happens to pacman after <code data-v-c1560277>level 255</code> in which the ALU overflows which cause a bunch of errors and glitches.</p><img src="'+i+'" class="pacman" data-v-c1560277></li><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>Zero :</strong> To check if the output of the ALU is zero the logical unit does a bunch of checks with <code data-v-c1560277>OR</code> gates to get one answer</p><img src="'+l+'" class="adders" data-v-c1560277><p data-v-c1560277>If any of the input is <code data-v-c1560277>1</code> the output is going to be <code data-v-c1560277>0</code> else the output is going to be <code data-v-c1560277>1</code>.</p></li><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>Negative :</strong> There is a special flag given by every ALU to check if the given output is negative or not.</p></li></ul><h2 id="latches" tabindex="-1" data-v-c1560277>Latches <a class="header-anchor" href="#latches" aria-label="Permalink to &quot;Latches&quot;" data-v-c1560277>​</a></h2><ul data-v-c1560277><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>AND OR Latch :</strong> It remembers 1 bit of information, there are two inputs going into an AND OR Latch. <code data-v-c1560277>1</code> is to <code data-v-c1560277>SET</code> and <code data-v-c1560277>2</code> is to <code data-v-c1560277>Reset</code> it. If the set and reset is both tuned off than the output of this latch is whatever the last value was put in.</p><img src="'+o+'" class="adders" data-v-c1560277></li><li data-v-c1560277><p data-v-c1560277><strong data-v-c1560277>Gated Latch :</strong> It has two inputs, <code data-v-c1560277>1 Data</code> and <code data-v-c1560277>2 Write Enable</code>. When the write enable wire is on the latch changes it&#39;s value .</p></li></ul><h2 id="registers" tabindex="-1" data-v-c1560277>Registers <a class="header-anchor" href="#registers" aria-label="Permalink to &quot;Registers&quot;" data-v-c1560277>​</a></h2><p data-v-c1560277>A group of latches operating at a single time (8 latches mean 1 byte of memory) is called a register.</p><p data-v-c1560277>The number of bits a register can hold is called a <code data-v-c1560277>width</code>.</p><h2 id="multiplexer" tabindex="-1" data-v-c1560277>Multiplexer <a class="header-anchor" href="#multiplexer" aria-label="Permalink to &quot;Multiplexer&quot;" data-v-c1560277>​</a></h2><p data-v-c1560277>A multiplexer is a combinational circuit that has many data inputs and a single output, depending on control or select inputs.</p><h2 id="ram" tabindex="-1" data-v-c1560277>RAM <a class="header-anchor" href="#ram" aria-label="Permalink to &quot;RAM&quot;" data-v-c1560277>​</a></h2><p data-v-c1560277>RAM has bunch of latches that are arranged in a grid like structure which is inturn powered by a <code data-v-c1560277>multiplexer</code>.</p><p data-v-c1560277>There are a bunch of wires that <code data-v-c1560277>connect</code> it to the CPU.</p><ul data-v-c1560277><li data-v-c1560277><strong data-v-c1560277>Address Bus :</strong> Address Bus is Uni directional as RAM <code data-v-c1560277>never</code> sends the cup an address.</li><li data-v-c1560277><strong data-v-c1560277>Control Bus :</strong> It either <code data-v-c1560277>writes</code> the data to the RAM or <code data-v-c1560277>read</code> data from RAM.</li><li data-v-c1560277><strong data-v-c1560277>Data Bus :</strong> Data bus is <code data-v-c1560277>bi directional</code>, it is the wires from where data is transferred to and from the <code data-v-c1560277>CPU</code>. If the instruction is to read the data of the address <code data-v-c1560277>1001</code>, the data is going to be sent from the data bus by the ram and vice versa.</li></ul><p data-v-c1560277><span style="color:gray;font-size:14px;" data-v-c1560277>Date: 2024-10-09</span></p>',22)]))}const f=a(v,[["render",h],["__scopeId","data-v-c1560277"]]);export{b as __pageData,f as default};