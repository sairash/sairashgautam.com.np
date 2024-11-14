import{_ as a,c as n,a1 as l,o as e}from"./chunks/framework.GKu-Ijuu.js";const h=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),p={name:"markdown-examples.md"};function o(t,s,i,c,r,F){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#F0F3F6;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#FF9492;">export</span><span style="color:#FF9492;"> default</span><span style="color:#FFB757;"> {</span></span>
<span class="line"><span style="color:#DBB7FF;">  data</span><span style="color:#FFB757;"> () </span><span style="color:#F0F3F6;">{</span></span>
<span class="line"><span style="color:#FF9492;">    return</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#F0F3F6;">      msg: </span><span style="color:#ADDCFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#F0F3F6;">    }</span></span>
<span class="line"><span style="color:#F0F3F6;">  }</span></span>
<span class="line"><span style="color:#FFB757;">}</span></span>
<span class="line"><span style="color:#F0F3F6;">\`\`\`</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FF9492;">export</span><span style="color:#FF9492;"> default</span><span style="color:#FFB757;"> {</span></span>
<span class="line"><span style="color:#DBB7FF;">  data</span><span style="color:#FFB757;"> () </span><span style="color:#F0F3F6;">{</span></span>
<span class="line"><span style="color:#FF9492;">    return</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#F0F3F6;">      msg: </span><span style="color:#ADDCFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#F0F3F6;">    }</span></span>
<span class="line"><span style="color:#F0F3F6;">  }</span></span>
<span class="line"><span style="color:#FFB757;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#F0F3F6;">::: info</span></span>
<span class="line"><span style="color:#F0F3F6;">This is an info box.</span></span>
<span class="line"><span style="color:#F0F3F6;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F0F3F6;">::: tip</span></span>
<span class="line"><span style="color:#F0F3F6;">This is a tip.</span></span>
<span class="line"><span style="color:#F0F3F6;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F0F3F6;">::: warning</span></span>
<span class="line"><span style="color:#F0F3F6;">This is a warning.</span></span>
<span class="line"><span style="color:#F0F3F6;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F0F3F6;">::: danger</span></span>
<span class="line"><span style="color:#F0F3F6;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#F0F3F6;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F0F3F6;">::: details</span></span>
<span class="line"><span style="color:#F0F3F6;">This is a details block.</span></span>
<span class="line"><span style="color:#F0F3F6;">:::</span></span>
<span class="line"></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,19)]))}const g=a(p,[["render",o]]);export{h as __pageData,g as default};
