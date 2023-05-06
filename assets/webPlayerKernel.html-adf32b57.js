import{_ as s,M as t,p as o,q as i,R as n,t as e,N as p,a1 as l}from"./framework-5866ffd3.js";const r={},c=l(`<h1 id="web-player-kernel" tabindex="-1"><a class="header-anchor" href="#web-player-kernel" aria-hidden="true">#</a> Web Player Kernel</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p><strong>Web Player Kernel</strong> is a core component or framework of a web-based media player that manages the core playback functionality, such as decoding audio and video streams, buffering, and synchronization.</p><p><strong>Web Player Kernel</strong> is responsible for handling the low-level details of media playback, such as handling different codecs, formats, and bitrates, and providing a smooth playback experience for the user.</p><p><strong>Web Player Kernel</strong> can be implemented using various web technologies such as JavaScript, HTML, and CSS, and can utilize specialized libraries and APIs for media playback.</p><p>The specific implementation of <strong>Web Player Kernel</strong> may depend on the platform, browser, or requirements of the application or website where the player is being used.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>There are Four Steps: Multimedia File &gt; HLS Demux &gt; Video Decoding &gt; Video Rendering</p></div><h2 id="multimedia-file" tabindex="-1"><a class="header-anchor" href="#multimedia-file" aria-hidden="true">#</a> Multimedia File</h2><p>HTTP Live Streaming (HLS) is a streaming media protocol developed by Apple Inc. For delivering audio and video content over the internet. It works by breaking the content into small segments and then delivering these segments to the client device via HTTP (Hypertext Transfer Protocol) connections.</p><p>HLS is designed to work with multiple bitrates and resolutions of a video or audio stream. It allows for adaptive streaming, where the client device can dynamically switch between different quality levels based on available network <code>bandwidth</code> and <code>CPU power</code>. This provides a seamless streaming experience for the viewer without buffering or interruption.</p><p>HLS supports various audio and video codecs, including H.264, AAC, and MP3, and can be used to stream live events as well as pre-recorded content. It also provides support for Digital Rights Management (DRM) systems to protect copyrighted content.</p><p>HLS is widely adopted by streaming media providers and is supported by various devices and platforms, including iOS and Android devices, web browsers, and smart TVs.</p><h4 id="when-using-the-hls-protocol-two-types-of-files-are-generated-m3u8-and-ts" tabindex="-1"><a class="header-anchor" href="#when-using-the-hls-protocol-two-types-of-files-are-generated-m3u8-and-ts" aria-hidden="true">#</a> When using the HLS protocol, two types of files are generated: <strong>.m3u8</strong> and <strong>.ts</strong></h4><p>The .m3u8 file is the playlist file that contains a list of URLs for the media segments in the HLS stream. It is a text file that specifies the format of the media stream, the bitrates available, and the URLs for the media segments. The .m3u8 file is used by the client device to request and play the media segments.</p><p>Here is an example of an M3U8 file:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#EXTM3U</span>
<span class="token comment">#EXT-X-VERSION:3          // Version Info</span>
<span class="token comment">#EXT-X-TARGETDUARTION:11  // Target Duration for each Fragment</span>
<span class="token comment">#EXT-X-MEDIA-SEQUENCE:0   // Start Number of Fragment</span>
<span class="token comment">#EXTINF:10.922578         // Actual Duration of Fragment 1st</span>
index000.ts               // Fragment 1st
<span class="token comment">#EXTINF:9.929578          // Actual Duration of Fragment 2nd</span>
index001.ts               // Fragment 2nd
</code></pre></div><p>The <strong>.ts</strong> files, <strong>Transport Stream (TS)</strong> packets, are the media segments themselves. Each TS packet is typically <code>188</code> bytes long and consists of a <code>header</code> followed by <code>payload</code> data.</p><p>The header contains information such as the packet identifier, the type of data in the packet (audio, video, etc.), and timing information. The payload contains the actual audio or video data.</p><p>The TS packets are generated by a video encoder or transcoding software, and are then packaged into segments by a streaming server. These segments are typically <code>2-10</code> seconds long and are stored as individual files on the server.</p><p>During HLS streaming:</p><ul><li><p>the server will continuously generate .ts files and update the .m3u8 playlist file with the URLs of the new media segments.</p></li><li><p>when the client device requests the media stream, it will download the .m3u8 playlist file and begin requesting the TS segment files. As it receives the TS packets, it will decode and play the audio or video content.</p></li></ul><p>The use of TS packets in HLS allows for efficient and reliable streaming over the internet, as the segments can be easily cached and delivered via standard web protocols. It also enables adaptive bitrate streaming, where the client device can switch between different quality levels based on the available <strong>Network Bandwidth</strong> and <strong>Device Capabilities</strong>.</p><h2 id="hls-demux" tabindex="-1"><a class="header-anchor" href="#hls-demux" aria-hidden="true">#</a> HLS Demux</h2><p>HLS demuxer refers to the process of separating the audio and video data from an HTTP Live Streaming (HLS) stream. This is typically done on the client-side by software called an HLS demuxer or demultiplexer.</p><ul><li><p>The demuxer reads the TS packets from the downloaded segment files and separates them into audio and video data streams.</p></li><li><p>The demuxer also handles issues such as buffering, seeking, and changing bitrates as the player requests different segments.</p></li></ul><p>Overall, the HLS demux process is a critical component of delivering <strong>high-quality</strong> streaming media over the internet, as it allows for efficient delivery and playback of audio and video data.</p><h2 id="video-decoding" tabindex="-1"><a class="header-anchor" href="#video-decoding" aria-hidden="true">#</a> Video Decoding</h2><p>Video decoding using FFmpeg is converting a compressed video format to an uncompressed or raw video format that can be displayed or further processed by other software or tools. FFmpeg supports a wide range of video formats and codecs such as <strong>H.264</strong>, <strong>H.265 (HEVC)</strong>, <strong>VP8</strong>, <strong>VP9</strong>, <strong>AV1</strong> and so on, making it becomes a powerful and versatile tool for video decoding.</p><h2 id="video-rendering" tabindex="-1"><a class="header-anchor" href="#video-rendering" aria-hidden="true">#</a> Video Rendering</h2><p><strong>YUV</strong> data decoded by FFmpeg cannot be directly displayed in a web browser using the <code>&lt;video&gt;</code> element. Hence, here use <strong>WebGL</strong> to render the frames onto a <strong>Canvas</strong> element.</p><p>Here is an example code snippet that shows how to render a video using WebGL or WebGPU:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>WebGL Video Player<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    body <span class="token punctuation">{</span>
      margin: <span class="token number">0</span><span class="token punctuation">;</span>
      padding: <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    canvas <span class="token punctuation">{</span>
      width: <span class="token number">100</span>%<span class="token punctuation">;</span>
      height: <span class="token number">100</span>%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>canvas <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;canvas&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/canvas<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script <span class="token assign-left variable">src</span><span class="token operator">=</span><span class="token string">&quot;https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    var canvas <span class="token operator">=</span> document.getElementById<span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    var gl <span class="token operator">=</span> canvas.getContext<span class="token punctuation">(</span><span class="token string">&#39;webgl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    var video <span class="token operator">=</span> document.createElement<span class="token punctuation">(</span><span class="token string">&#39;video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    video.crossOrigin <span class="token operator">=</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">;</span>
    video.src <span class="token operator">=</span> <span class="token string">&#39;myvideo.mp4&#39;</span><span class="token punctuation">;</span>
    video.load<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    video.play<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    var texture <span class="token operator">=</span> gl.createTexture<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    var program <span class="token operator">=</span> createShaderProgram<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    var buffer <span class="token operator">=</span> createBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl.activeTexture<span class="token punctuation">(</span>gl.TEXTURE0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl.bindTexture<span class="token punctuation">(</span>gl.TEXTURE_2D, texture<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl.texParameteri<span class="token punctuation">(</span>gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl.texParameteri<span class="token punctuation">(</span>gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl.texParameteri<span class="token punctuation">(</span>gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl.texParameteri<span class="token punctuation">(</span>gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    var uTextureLocation <span class="token operator">=</span> gl.getUniformLocation<span class="token punctuation">(</span>program, <span class="token string">&#39;u_texture&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function-name function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>video.readyState <span class="token operator">==</span><span class="token operator">=</span> video.HAVE_ENOUGH_DATA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        gl.texImage2D<span class="token punctuation">(</span>gl.TEXTURE_2D, <span class="token number">0</span>, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.clear<span class="token punctuation">(</span>gl.COLOR_BUFFER_BIT<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.useProgram<span class="token punctuation">(</span>program<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.enableVertexAttribArray<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.bindBuffer<span class="token punctuation">(</span>gl.ARRAY_BUFFER, buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.vertexAttribPointer<span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">2</span>, gl.FLOAT, false, <span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.uniform1i<span class="token punctuation">(</span>uTextureLocation, <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gl.drawArrays<span class="token punctuation">(</span>gl.TRIANGLE_STRIP, <span class="token number">0</span>, <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      requestAnimationFrame<span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-name function">createShaderProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      var vertexShader <span class="token operator">=</span> gl.createShader<span class="token punctuation">(</span>gl.VERTEX_SHADER<span class="token punctuation">)</span><span class="token punctuation">;</span>
      var fragmentShader <span class="token operator">=</span> gl.createShader<span class="token punctuation">(</span>gl.FRAGMENT_SHADER<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.shaderSource<span class="token punctuation">(</span>vertexShader, <span class="token variable"><span class="token variable">\`</span>
        attribute vec2 a_position<span class="token punctuation">;</span>
        varying vec2 v_uv<span class="token punctuation">;</span>
        void <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          gl_Position <span class="token operator">=</span> vec4<span class="token punctuation">(</span>a_position, <span class="token number">0.0</span>, <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          v_uv <span class="token operator">=</span> <span class="token punctuation">(</span>a_position + <span class="token number">1.0</span><span class="token punctuation">)</span> / <span class="token number">2.0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token variable">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.compileShader<span class="token punctuation">(</span>vertexShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.shaderSource<span class="token punctuation">(</span>fragmentShader, <span class="token variable"><span class="token variable">\`</span>
        precision mediump float<span class="token punctuation">;</span>
        uniform sampler2D u_texture<span class="token punctuation">;</span>
        varying vec2 v_uv<span class="token punctuation">;</span>
        void <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          gl_FragColor <span class="token operator">=</span> texture2D<span class="token punctuation">(</span>u_texture, v_uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token variable">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.compileShader<span class="token punctuation">(</span>fragmentShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      var program <span class="token operator">=</span> gl.createProgram<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.attachShader<span class="token punctuation">(</span>program, vertexShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.attachShader<span class="token punctuation">(</span>program, fragmentShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.linkProgram<span class="token punctuation">(</span>program<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token builtin class-name">return</span> program<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-name function">createBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      var buffer <span class="token operator">=</span> gl.createBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.bindBuffer<span class="token punctuation">(</span>gl.ARRAY_BUFFER, buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl.bufferData<span class="token punctuation">(</span>gl.ARRAY_BUFFER, new Float32Array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="development-environment" tabindex="-1"><a class="header-anchor" href="#development-environment" aria-hidden="true">#</a> Development Environment</h2><p>Using <code>Emscription</code> as a compiler toolchain for building WebAssembly development/compilation environments.</p><h3 id="emscription" tabindex="-1"><a class="header-anchor" href="#emscription" aria-hidden="true">#</a> Emscription</h3><p><strong>Emscripten</strong> is an open-source toolchain for compiling C and C++ code into <code>WebAssembly</code>, <code>JavaScript</code>, and <code>asm.js</code>, which can be run on the web browser or other environments that support WebAssembly. Emscripten uses <code>LLVM</code> (Low-Level Virtual Machine) to compile C and C++ code into LLVM bitcode, which is then translated into WebAssembly or JavaScript using the Emscripten compiler.</p><p>The primary use case of Emscripten is to port existing C and C++ code to run on the web, enabling developers to take advantage of the high-performance characteristics of these languages in a web browser environment. Emscripten supports a wide range of C and C++ libraries and can also integrate with JavaScript code.</p><p>To use Emscripten, you will need to install the Emscripten SDK, which includes the Emscripten compiler and other tools, such as emrun, which can be used to run and debug WebAssembly applications. Once installed, you can compile your C or C++ code using the emcc command and run it in a web browser or other environments that support WebAssembly.</p><p>Emscripten also includes a set of optimization options that can be used to improve the performance of your WebAssembly code, such as the O3 optimization level, which enables aggressive optimization of the generated code.</p><p>Overall, Emscripten is a powerful tool for porting C and C++ code to run on the web, enabling developers to take advantage of the performance characteristics of these languages in a web browser environment.</p><h3 id="asm-js" tabindex="-1"><a class="header-anchor" href="#asm-js" aria-hidden="true">#</a> ASM.js</h3><p><strong>ASM.js</strong> was first introduced by Mozilla in 2013 as a way to improve the performance of web applications. At the time, web developers were struggling to create complex, high-performance applications that could compete with native applications running on desktops and mobile devices.</p><p>The original idea behind ASM.js was to provide a way to execute code written in other languages, like C and C++, in the browser. This was accomplished by creating a subset of JavaScript that was designed to be highly optimized and predictable, allowing it to be used as a target for other programming languages.</p><p>The development of ASM.js was driven by Mozilla&#39;s Emscripten project, which is a C and C++ to JavaScript compiler. Emscripten allows developers to take code written in these languages and compile it to ASM.js, which can then be executed in the browser without the need for plugins or additional software.</p><p>Over time, other browser vendors, including Google, Microsoft, and Apple, began to support ASM.js, and it became a widely accepted standard for high-performance web applications.</p><p>However, with the introduction of WebAssembly (WASM) in 2015, which is a low-level binary format for executing code in the browser, ASM.js has become less relevant. WASM provides a more efficient way to execute code, as it is designed specifically for this purpose and does not require the overhead of a JavaScript interpreter. Nonetheless, ASM.js remains a useful tool for developers who want to optimize their JavaScript code for performance.</p><h3 id="webassembly-vs-asm-js" tabindex="-1"><a class="header-anchor" href="#webassembly-vs-asm-js" aria-hidden="true">#</a> WebAssembly vs ASM.js</h3><p><strong>WebAssembly</strong> and <strong>ASM.js</strong> are both technologies that allow running code written in low-level programming languages like C, C++, or Rust in the browser. However, they differ in several ways:</p><ul><li><p>WebAssembly is a binary format that can be executed directly by the browser, while ASM.js is a subset of JavaScript that is designed to be executed efficiently by modern JavaScript engines.</p></li><li><p>WebAssembly is designed to be a platform-independent format that can be executed on different devices and architectures, while ASM.js is tied to the JavaScript environment.</p></li><li><p>WebAssembly offers better performance than ASM.js because it has a simpler, more efficient binary format and can be optimized more effectively by the browser.</p></li><li><p>WebAssembly offers more language support than ASM.js. While ASM.js is limited to C and C++, WebAssembly can be used with a wider range of languages, including Rust, Go, and even Java.</p></li><li><p>WebAssembly is a newer technology than ASM.js, and it has been designed to address some of the limitations of ASM.js, including its complexity and performance issues.</p></li></ul><p>Overall, while ASM.js was a significant improvement over traditional JavaScript for running low-level code in the browser, WebAssembly offers even better performance and flexibility, making it a more attractive option for many developers.</p><h3 id="compilation-tool" tabindex="-1"><a class="header-anchor" href="#compilation-tool" aria-hidden="true">#</a> Compilation Tool</h3><p><strong>WebAssembly compilation tools</strong> are used to convert code written in programming languages such as C/C++, Rust, AssemblyScript, and others, into WebAssembly bytecode that can be executed by modern web browsers and other environments that support WebAssembly.</p><p>There are several tools available for compiling code to WebAssembly, including:</p><ul><li><p><strong>Emscripten</strong> - a popular toolchain for compiling C/C++ code to WebAssembly. It uses LLVM to compile the code to intermediate representation (IR), and then translates the IR to WebAssembly using its own toolchain.</p></li><li><p><strong>AssemblyScript</strong> - a TypeScript-like language that compiles to WebAssembly. It provides a familiar syntax for developers who are familiar with TypeScript or JavaScript, and can be used to write high-performance code that can be executed in the browser or on the server.</p></li><li><p><strong>Rust</strong> - a programming language that was designed with performance and safety in mind. It has excellent support for WebAssembly, and can be compiled to WebAssembly using the Rust toolchain.</p></li><li><p><strong>Binaryen</strong> - a compiler and optimizer for WebAssembly that can be used to generate WebAssembly code from various programming languages. It is used by Emscripten and other WebAssembly tools to optimize and compress the generated code.</p></li><li><p><strong>wabt</strong> - a collection of tools for working with WebAssembly. It includes a binary toolkit that can be used to inspect and manipulate WebAssembly modules, as well as a text format toolkit that can be used to convert between the binary and text formats of WebAssembly.</p></li></ul><h3 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h3><h6 id="build-host-environment" tabindex="-1"><a class="header-anchor" href="#build-host-environment" aria-hidden="true">#</a> Build Host Environment</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container run <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 ubuntu
<span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span> xz-utils <span class="token function">bzip2</span> iputils-ping net-tools nginx cmake <span class="token function">git</span> python3.10
update-alternatives <span class="token parameter variable">--install</span> /usr/bin/python python /usr/bin/python3.10 <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="install-compilation-tool" tabindex="-1"><a class="header-anchor" href="#install-compilation-tool" aria-hidden="true">#</a> Install Compilation Tool</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/wasm
<span class="token builtin class-name">cd</span> /home/wasm
<span class="token function">git</span> clone https://github.com/emscripten-core/emsdk.git
<span class="token builtin class-name">cd</span> emsdk
./emsdk <span class="token function">install</span> latest
./emsdk activate latest
<span class="token builtin class-name">source</span> ./emsdk_env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="write-hello-world" tabindex="-1"><a class="header-anchor" href="#write-hello-world" aria-hidden="true">#</a> Write Hello World</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/emsdk/test
<span class="token builtin class-name">cd</span> /home/emsdk/test
<span class="token function">vi</span> hello.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hello.c</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;stdio.h&gt;
int main(int argc, char *argv[]) 
{
  printf(&quot;%s\\n&quot;, &quot;hello world!&quot;);
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>emcc</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>emcc hello.c -o hello.html
</code></pre></div><p>emrun</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>emrun --no_browser --port 8000 hello.html 
</code></pre></div>`,67),d={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"TIP",-1),m={href:"http://localhost:8000/hello.html",target:"_blank",rel:"noopener noreferrer"};function v(h,b){const a=t("ExternalLinkIcon");return o(),i("div",null,[c,n("div",d,[u,n("p",null,[e('"Hello World" has been displayed on this link: '),n("a",m,[e("http://localhost:8000/hello.html"),p(a)])])])])}const k=s(r,[["render",v],["__file","webPlayerKernel.html.vue"]]);export{k as default};