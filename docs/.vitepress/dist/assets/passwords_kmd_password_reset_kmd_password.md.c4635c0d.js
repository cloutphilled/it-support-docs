import{_ as s,o as a,c as e,V as n}from"./chunks/framework.90ed47bb.js";const t="/assets/kmd1.62eb0975.png",o="/assets/kmd2.e7514070.png",l="/assets/kmd3.4b693297.png",r="/assets/kmd4.0bbe3d62.png",p="/assets/kmd5.3cd474cf.png",d="/assets/kmd6.f9d7be35.png",i="/assets/kmd7.1429b3ab.png",c="/assets/kmd8.5ed5e094.png",v=JSON.parse('{"title":"Reset af KMD password og Find bruger","description":"","frontmatter":{},"headers":[],"relativePath":"passwords/kmd_password/reset_kmd_password.md","filePath":"passwords/kmd_password/reset_kmd_password.md"}'),g={name:"passwords/kmd_password/reset_kmd_password.md"},m=n('<h1 id="reset-af-kmd-password-og-find-bruger" tabindex="-1">Reset af KMD password og Find bruger <a class="header-anchor" href="#reset-af-kmd-password-og-find-bruger" aria-label="Permalink to &quot;Reset af KMD password og Find bruger&quot;">​</a></h1><h2 id="krav-til-adgangskoder" tabindex="-1">Krav til adgangskoder <a class="header-anchor" href="#krav-til-adgangskoder" aria-label="Permalink to &quot;Krav til adgangskoder&quot;">​</a></h2><p style="color:#41B883;border:1px solid #41B883;border-radius:5px;padding:1rem;">Nedenstående er de krav Frederiksberg kommune/KMD har sat på adgangskoder. Nulstillede adgangskoder er altid midlertidige og skal skiftes af brugeren ved første login.</p><ol><li>Det skal være en blanding af bogstaver og tal</li><li>Længden skal være nøjagtig 8 karakterer</li><li>Må ikke indeholde navn eller brugernavn</li><li>Informér brugeren om den midlertidige adgangskode (enten per telefon eller email – det er god praksis ikke at inkludere loginnavn og adgangskode i samme email)</li></ol><h2 id="reset-af-kmd-password" tabindex="-1">Reset af KMD password <a class="header-anchor" href="#reset-af-kmd-password" aria-label="Permalink to &quot;Reset af KMD password&quot;">​</a></h2><p><img src="'+t+'" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Søg først efter </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">KMD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> og åben appen</span></span></code></pre></div><p><img src="'+o+'" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Login med dit administrative kmd login</span></span></code></pre></div><p><img src="'+l+'" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Indtast </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CICS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> og tryk enter</span></span></code></pre></div><p><img src="'+r+'" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Indtast kommandoen </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">z725</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> for at nulstille password for en bestemt bruger</span></span></code></pre></div><p><img src="'+p+`" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Indtast et nyt engangskodeord og ændre Aktiv fra </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">N</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> til </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">J</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Tryk derefter Enter og så er koden nulstillet</span></span></code></pre></div><h2 id="find-kmd-bruger" tabindex="-1">Find KMD bruger <a class="header-anchor" href="#find-kmd-bruger" aria-label="Permalink to &quot;Find KMD bruger&quot;">​</a></h2><p style="color:#41B883;border:1px solid #41B883;border-radius:5px;padding:1rem;">Hvis brugernavnet på personen skal findes, kan det gøres som nedenstående</p><p><img src="`+d+'" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Indtast kommandoen </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">z727</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> for at finde bruger</span></span></code></pre></div><p><img src="'+i+'" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Indtast </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> for at vælge </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ajourføring af brugeroplysninger</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p><img src="'+c+`" alt=""></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Indtast navnet for den pågældende bruger</span></span>
<span class="line"><span style="color:#A6ACCD;">Derefter vil brugernavnet kunne findes i venstre bjælke</span></span></code></pre></div>`,23),k=[m];function u(D,C,y,b,_,h){return a(),e("div",null,k)}const A=s(g,[["render",u]]);export{v as __pageData,A as default};