import{_ as a,c as e,a1 as c,o as d}from"./chunks/framework.GKu-Ijuu.js";const r="/mascot/math.png",s="/assets/halfadder.DHdn1Y70.webp",n="/assets/fulladder.C-awqk4k.png",i="/assets/pacman.CJWFxlHN.png",o="/assets/zerocheck.DcN33xwZ.png",l="/assets/andorlatch.CLpZKUlF.png",m=JSON.parse(`{"title":"Computer's Brain - Adders to RAM","description":"","frontmatter":{"title":"Computer's Brain - Adders to RAM","date":"2024-10-09T00:00:00.000Z"},"headers":[],"relativePath":"blog/2024-10-09/index.md","filePath":"blog/2024-10-09/index.md"}`),b={name:"blog/2024-10-09/index.md"};function v(h,t,g,p,u,y){return d(),e("div",null,t[0]||(t[0]=[c('<h1 id="computer-s-brain-adders-to-ram" tabindex="-1" data-v-c110b12c>Computer&#39;s Brain - Adders to RAM <a class="header-anchor" href="#computer-s-brain-adders-to-ram" aria-label="Permalink to &quot;Computer&#39;s Brain - Adders to RAM&quot;" data-v-c110b12c>​</a></h1><p data-v-c110b12c><a href="/blog" data-v-c110b12c>&lt;- Back to blogs</a></p><p data-v-c110b12c>It&#39;s been a very long time since I have visited this topic. <br data-v-c110b12c></p><img src="'+r+'" style="width:200px;" data-v-c110b12c><h2 id="adders" tabindex="-1" data-v-c110b12c><strong data-v-c110b12c>Adders :</strong> <a class="header-anchor" href="#adders" aria-label="Permalink to &quot;**Adders :**&quot;" data-v-c110b12c>​</a></h2><p data-v-c110b12c>They are the basic functionality of a computer to add 2 binary. There are two types of adders. <code data-v-c110b12c>Half Adders</code>, <code data-v-c110b12c>Full Adders</code>. <br data-v-c110b12c></p><ul data-v-c110b12c><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>Half Adders :</strong> They are just XOR gate and AND gate combined. The AND gate is responsible for getting the Carry of Addition. Look at the examples bellow-</p><table tabindex="0" data-v-c110b12c><thead data-v-c110b12c><tr data-v-c110b12c><th data-v-c110b12c>A</th><th data-v-c110b12c>B</th><th data-v-c110b12c>Output</th></tr></thead><tbody data-v-c110b12c><tr data-v-c110b12c><td data-v-c110b12c>0</td><td data-v-c110b12c>0</td><td data-v-c110b12c>0</td></tr><tr data-v-c110b12c><td data-v-c110b12c>1</td><td data-v-c110b12c>0</td><td data-v-c110b12c>1</td></tr><tr data-v-c110b12c><td data-v-c110b12c>0</td><td data-v-c110b12c>1</td><td data-v-c110b12c>1</td></tr><tr data-v-c110b12c><td data-v-c110b12c>1</td><td data-v-c110b12c>1</td><td data-v-c110b12c>10</td></tr></tbody></table><p data-v-c110b12c><img src="'+s+'" class="adders" data-v-c110b12c> <br data-v-c110b12c></p></li><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>Full Adder :</strong> On full adder we tend to take 3 inputs instead of 2, <code data-v-c110b12c>A</code>, <code data-v-c110b12c>B</code> and <code data-v-c110b12c>Cin</code> which is carry in</p><table tabindex="0" data-v-c110b12c><thead data-v-c110b12c><tr data-v-c110b12c><th style="text-align:center;" data-v-c110b12c>Input</th><th style="text-align:center;" data-v-c110b12c></th><th style="text-align:center;" data-v-c110b12c></th><th style="text-align:center;" data-v-c110b12c>Output</th><th style="text-align:center;" data-v-c110b12c></th></tr></thead><tbody data-v-c110b12c><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>A</td><td style="text-align:center;" data-v-c110b12c>B</td><td style="text-align:center;" data-v-c110b12c>Cin</td><td style="text-align:center;" data-v-c110b12c>Sum</td><td style="text-align:center;" data-v-c110b12c>Carry</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>0</td><td style="text-align:center;" data-v-c110b12c>1</td></tr><tr data-v-c110b12c><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td><td style="text-align:center;" data-v-c110b12c>1</td></tr></tbody></table><p data-v-c110b12c>A Full Adder combines two Half Adders: the first takes inputs A and B, and the second takes the output from the first along with the carry-in (Cin) from the previous calculation. Finally, the carries from both Half Adders pass through an OR gate to produce the new carry and sum.</p><p data-v-c110b12c><img src="'+n+'" class="adders" data-v-c110b12c> <br data-v-c110b12c></p></li></ul><h2 id="flags-generated-by-alu" tabindex="-1" data-v-c110b12c>Flags Generated by ALU: <a class="header-anchor" href="#flags-generated-by-alu" aria-label="Permalink to &quot;Flags Generated by ALU:&quot;" data-v-c110b12c>​</a></h2><p data-v-c110b12c>The 3 important flags that an ALU generates are</p><ul data-v-c110b12c><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>Bit Overflow :</strong> It is a condition when the output of the last logic full / half adder has a carryover. This is the same case what happens to pacman after <code data-v-c110b12c>level 255</code> in which the ALU overflows which cause a bunch of errors and glitches.</p><img src="'+i+'" class="pacman" data-v-c110b12c></li><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>Zero :</strong> To check if the output of the ALU is zero the logical unit does a bunch of checks with <code data-v-c110b12c>OR</code> gates to get one answer</p><img src="'+o+'" class="adders" data-v-c110b12c><p data-v-c110b12c>If any of the input is <code data-v-c110b12c>1</code> the output is going to be <code data-v-c110b12c>0</code> else the output is going to be <code data-v-c110b12c>1</code>.</p></li><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>Negative :</strong> There is a special flag given by every ALU to check if the given output is negative or not.</p></li></ul><h2 id="latches" tabindex="-1" data-v-c110b12c>Latches <a class="header-anchor" href="#latches" aria-label="Permalink to &quot;Latches&quot;" data-v-c110b12c>​</a></h2><ul data-v-c110b12c><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>AND OR Latch :</strong> It remembers 1 bit of information, there are two inputs going into an AND OR Latch. <code data-v-c110b12c>1</code> is to <code data-v-c110b12c>SET</code> and <code data-v-c110b12c>2</code> is to <code data-v-c110b12c>Reset</code> it. If the set and reset is both tuned off than the output of this latch is whatever the last value was put in.</p><img src="'+l+'" class="adders" data-v-c110b12c></li><li data-v-c110b12c><p data-v-c110b12c><strong data-v-c110b12c>Gated Latch :</strong> It has two inputs, <code data-v-c110b12c>1 Data</code> and <code data-v-c110b12c>2 Write Enable</code>. When the write enable wire is on the latch changes it&#39;s value .</p></li></ul><h2 id="registers" tabindex="-1" data-v-c110b12c>Registers <a class="header-anchor" href="#registers" aria-label="Permalink to &quot;Registers&quot;" data-v-c110b12c>​</a></h2><p data-v-c110b12c>A group of latches operating at a single time (8 latches mean 1 byte of memory) is called a register.</p><p data-v-c110b12c>The number of bits a register can hold is called a <code data-v-c110b12c>width</code>.</p><h2 id="multiplexer" tabindex="-1" data-v-c110b12c>Multiplexer <a class="header-anchor" href="#multiplexer" aria-label="Permalink to &quot;Multiplexer&quot;" data-v-c110b12c>​</a></h2><p data-v-c110b12c>A multiplexer is a combinational circuit that has many data inputs and a single output, depending on control or select inputs.</p><h2 id="ram" tabindex="-1" data-v-c110b12c>RAM <a class="header-anchor" href="#ram" aria-label="Permalink to &quot;RAM&quot;" data-v-c110b12c>​</a></h2><p data-v-c110b12c>RAM has bunch of latches that are arranged in a grid like structure which is inturn powered by a <code data-v-c110b12c>multiplexer</code>.</p><p data-v-c110b12c>There are a bunch of wires that <code data-v-c110b12c>connect</code> it to the CPU.</p><ul data-v-c110b12c><li data-v-c110b12c><strong data-v-c110b12c>Address Bus :</strong> Address Bus is Uni directional as RAM <code data-v-c110b12c>never</code> sends the cup an address.</li><li data-v-c110b12c><strong data-v-c110b12c>Control Bus :</strong> It either <code data-v-c110b12c>writes</code> the data to the RAM or <code data-v-c110b12c>read</code> data from RAM.</li><li data-v-c110b12c><strong data-v-c110b12c>Data Bus :</strong> Data bus is <code data-v-c110b12c>bi directional</code>, it is the wires from where data is transferred to and from the <code data-v-c110b12c>CPU</code>. If the instruction is to read the data of the address <code data-v-c110b12c>1001</code>, the data is going to be sent from the data bus by the ram and vice versa.</li></ul><p data-v-c110b12c><span style="color:gray;font-size:14px;" data-v-c110b12c>Date: 2024-10-09</span></p>',22)]))}const f=a(b,[["render",v],["__scopeId","data-v-c110b12c"]]);export{m as __pageData,f as default};
