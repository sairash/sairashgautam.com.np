import{_ as t,c as e,a1 as d,o as b}from"./chunks/framework.BDxlaA_J.js";const r="/mascot/math.png",s="/assets/halfadder.DHdn1Y70.webp",n="/assets/fulladder.C-awqk4k.png",i="/assets/pacman.CJWFxlHN.png",l="/assets/zerocheck.DcN33xwZ.png",o="/assets/andorlatch.CLpZKUlF.png",m=JSON.parse(`{"title":"Computer's Brain - Adders to RAM","description":"","frontmatter":{"title":"Computer's Brain - Adders to RAM","date":"2024-10-09T00:00:00.000Z"},"headers":[],"relativePath":"blog/2024-10-09/index.md","filePath":"blog/2024-10-09/index.md"}`),c={name:"blog/2024-10-09/index.md"};function v(h,a,g,p,u,y){return b(),e("div",null,a[0]||(a[0]=[d('<h1 id="computer-s-brain-adders-to-ram" tabindex="-1" data-v-bea466db>Computer&#39;s Brain - Adders to RAM <a class="header-anchor" href="#computer-s-brain-adders-to-ram" aria-label="Permalink to &quot;Computer&#39;s Brain - Adders to RAM&quot;" data-v-bea466db>​</a></h1><p data-v-bea466db><a href="/blog" data-v-bea466db>&lt;- Back to blogs</a></p><p data-v-bea466db>It&#39;s been a very long time since I have visited this topic. <br data-v-bea466db></p><img src="'+r+'" style="width:200px;" data-v-bea466db><h2 id="adders" tabindex="-1" data-v-bea466db><strong data-v-bea466db>Adders :</strong> <a class="header-anchor" href="#adders" aria-label="Permalink to &quot;**Adders :**&quot;" data-v-bea466db>​</a></h2><p data-v-bea466db>They are the basic functionality of a computer to add 2 binary. There are two types of adders. <code data-v-bea466db>Half Adders</code>, <code data-v-bea466db>Full Adders</code>. <br data-v-bea466db></p><ul data-v-bea466db><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>Half Adders :</strong> They are just XOR gate and AND gate combined. The AND gate is responsible for getting the Carry of Addition. Look at the examples bellow-</p><table tabindex="0" data-v-bea466db><thead data-v-bea466db><tr data-v-bea466db><th data-v-bea466db>A</th><th data-v-bea466db>B</th><th data-v-bea466db>Output</th></tr></thead><tbody data-v-bea466db><tr data-v-bea466db><td data-v-bea466db>0</td><td data-v-bea466db>0</td><td data-v-bea466db>0</td></tr><tr data-v-bea466db><td data-v-bea466db>1</td><td data-v-bea466db>0</td><td data-v-bea466db>1</td></tr><tr data-v-bea466db><td data-v-bea466db>0</td><td data-v-bea466db>1</td><td data-v-bea466db>1</td></tr><tr data-v-bea466db><td data-v-bea466db>1</td><td data-v-bea466db>1</td><td data-v-bea466db>10</td></tr></tbody></table><p data-v-bea466db><img src="'+s+'" class="adders" data-v-bea466db> <br data-v-bea466db></p></li><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>Full Adder :</strong> On full adder we tend to take 3 inputs instead of 2, <code data-v-bea466db>A</code>, <code data-v-bea466db>B</code> and <code data-v-bea466db>Cin</code> which is carry in</p><table tabindex="0" data-v-bea466db><thead data-v-bea466db><tr data-v-bea466db><th style="text-align:center;" data-v-bea466db>Input</th><th style="text-align:center;" data-v-bea466db></th><th style="text-align:center;" data-v-bea466db></th><th style="text-align:center;" data-v-bea466db>Output</th><th style="text-align:center;" data-v-bea466db></th></tr></thead><tbody data-v-bea466db><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>A</td><td style="text-align:center;" data-v-bea466db>B</td><td style="text-align:center;" data-v-bea466db>Cin</td><td style="text-align:center;" data-v-bea466db>Sum</td><td style="text-align:center;" data-v-bea466db>Carry</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>0</td><td style="text-align:center;" data-v-bea466db>1</td></tr><tr data-v-bea466db><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td><td style="text-align:center;" data-v-bea466db>1</td></tr></tbody></table><p data-v-bea466db>A Full Adder combines two Half Adders: the first takes inputs A and B, and the second takes the output from the first along with the carry-in (Cin) from the previous calculation. Finally, the carries from both Half Adders pass through an OR gate to produce the new carry and sum.</p><p data-v-bea466db><img src="'+n+'" class="adders" data-v-bea466db> <br data-v-bea466db></p></li></ul><h2 id="flags-generated-by-alu" tabindex="-1" data-v-bea466db>Flags Generated by ALU: <a class="header-anchor" href="#flags-generated-by-alu" aria-label="Permalink to &quot;Flags Generated by ALU:&quot;" data-v-bea466db>​</a></h2><p data-v-bea466db>The 3 important flags that an ALU generates are</p><ul data-v-bea466db><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>Bit Overflow :</strong> It is a condition when the output of the last logic full / half adder has a carryover. This is the same case what happens to pacman after <code data-v-bea466db>level 255</code> in which the ALU overflows which cause a bunch of errors and glitches.</p><img src="'+i+'" class="pacman" data-v-bea466db></li><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>Zero :</strong> To check if the output of the ALU is zero the logical unit does a bunch of checks with <code data-v-bea466db>OR</code> gates to get one answer</p><img src="'+l+'" class="adders" data-v-bea466db><p data-v-bea466db>If any of the input is <code data-v-bea466db>1</code> the output is going to be <code data-v-bea466db>0</code> else the output is going to be <code data-v-bea466db>1</code>.</p></li><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>Negative :</strong> There is a special flag given by every ALU to check if the given output is negative or not.</p></li></ul><h2 id="latches" tabindex="-1" data-v-bea466db>Latches <a class="header-anchor" href="#latches" aria-label="Permalink to &quot;Latches&quot;" data-v-bea466db>​</a></h2><ul data-v-bea466db><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>AND OR Latch :</strong> It remembers 1 bit of information, there are two inputs going into an AND OR Latch. <code data-v-bea466db>1</code> is to <code data-v-bea466db>SET</code> and <code data-v-bea466db>2</code> is to <code data-v-bea466db>Reset</code> it. If the set and reset is both tuned off than the output of this latch is whatever the last value was put in.</p><img src="'+o+'" class="adders" data-v-bea466db></li><li data-v-bea466db><p data-v-bea466db><strong data-v-bea466db>Gated Latch :</strong> It has two inputs, <code data-v-bea466db>1 Data</code> and <code data-v-bea466db>2 Write Enable</code>. When the write enable wire is on the latch changes it&#39;s value .</p></li></ul><h2 id="registers" tabindex="-1" data-v-bea466db>Registers <a class="header-anchor" href="#registers" aria-label="Permalink to &quot;Registers&quot;" data-v-bea466db>​</a></h2><p data-v-bea466db>A group of latches operating at a single time (8 latches mean 1 byte of memory) is called a register.</p><p data-v-bea466db>The number of bits a register can hold is called a <code data-v-bea466db>width</code>.</p><h2 id="multiplexer" tabindex="-1" data-v-bea466db>Multiplexer <a class="header-anchor" href="#multiplexer" aria-label="Permalink to &quot;Multiplexer&quot;" data-v-bea466db>​</a></h2><p data-v-bea466db>A multiplexer is a combinational circuit that has many data inputs and a single output, depending on control or select inputs.</p><h2 id="ram" tabindex="-1" data-v-bea466db>RAM <a class="header-anchor" href="#ram" aria-label="Permalink to &quot;RAM&quot;" data-v-bea466db>​</a></h2><p data-v-bea466db>RAM has bunch of latches that are arranged in a grid like structure which is inturn powered by a <code data-v-bea466db>multiplexer</code>.</p><p data-v-bea466db>There are a bunch of wires that <code data-v-bea466db>connect</code> it to the CPU.</p><ul data-v-bea466db><li data-v-bea466db><strong data-v-bea466db>Address Bus :</strong> Address Bus is Uni directional as RAM <code data-v-bea466db>never</code> sends the cup an address.</li><li data-v-bea466db><strong data-v-bea466db>Control Bus :</strong> It either <code data-v-bea466db>writes</code> the data to the RAM or <code data-v-bea466db>read</code> data from RAM.</li><li data-v-bea466db><strong data-v-bea466db>Data Bus :</strong> Data bus is <code data-v-bea466db>bi directional</code>, it is the wires from where data is transferred to and from the <code data-v-bea466db>CPU</code>. If the instruction is to read the data of the address <code data-v-bea466db>1001</code>, the data is going to be sent from the data bus by the ram and vice versa.</li></ul><p data-v-bea466db><a href="https://letterbird.co/sai" target="_blank" rel="noreferrer" data-v-bea466db>Reply via Email</a></p><p data-v-bea466db><span style="color:gray;font-size:14px;" data-v-bea466db>Date: 2024-10-09</span></p>',23)]))}const f=t(c,[["render",v],["__scopeId","data-v-bea466db"]]);export{m as __pageData,f as default};
