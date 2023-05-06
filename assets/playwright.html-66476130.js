import{_ as a,p as s,q as e,a1 as n}from"./framework-5866ffd3.js";const t={},l=n(`<h1 id="playwright" tabindex="-1"><a class="header-anchor" href="#playwright" aria-hidden="true">#</a> Playwright</h1><h3 id="inside-that-directory-you-can-run-several-commands" tabindex="-1"><a class="header-anchor" href="#inside-that-directory-you-can-run-several-commands" aria-hidden="true">#</a> Inside that directory, you can run several commands:</h3><ul><li><strong>Runs the end-to-end tests</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright <span class="token builtin class-name">test</span>
</code></pre></div><ul><li><strong>Starts the interactive UI mode</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright <span class="token builtin class-name">test</span> <span class="token parameter variable">--ui</span>
</code></pre></div><ul><li><strong>Runs the tests only on Desktop Chrome</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright <span class="token builtin class-name">test</span> <span class="token parameter variable">--project</span><span class="token operator">=</span>chromium
</code></pre></div><ul><li><strong>Runs the tests in a specific file</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright <span class="token builtin class-name">test</span> example
</code></pre></div><ul><li><strong>Runs the tests in debug mode</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright <span class="token builtin class-name">test</span> <span class="token parameter variable">--debug</span>
</code></pre></div><ul><li><strong>Auto generate tests with Codegen</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright codegen
</code></pre></div><ul><li><strong>We suggest that you begin by typing</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> playwright <span class="token builtin class-name">test</span>
</code></pre></div><h3 id="and-check-out-the-following-files" tabindex="-1"><a class="header-anchor" href="#and-check-out-the-following-files" aria-hidden="true">#</a> And check out the following files:</h3><ul><li><strong>./tests/example.spec.ts - Example end-to-end test</strong></li><li><strong>./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests</strong></li><li><strong>./playwright.config.ts - Playwright Test configuration</strong></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Visit https://playwright.dev/docs/intro for more information. ✨</p></div><h3 id="happy-hacking-🎭" tabindex="-1"><a class="header-anchor" href="#happy-hacking-🎭" aria-hidden="true">#</a> Happy hacking! 🎭</h3>`,20),i=[l];function o(r,c){return s(),e("div",null,i)}const d=a(t,[["render",o],["__file","playwright.html.vue"]]);export{d as default};