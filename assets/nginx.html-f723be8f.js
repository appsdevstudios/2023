import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},t=a(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><p><strong>Nginx</strong> (pronounced &quot;engine-x&quot;) is a free, open-source web server software that is known for its high performance, stability, and scalability. It is often used as a reverse proxy server or load balancer to distribute incoming web traffic across multiple servers, and is also commonly used as a front-end proxy for web applications.</p><p><strong>Nginx</strong> was first released in 2004 and has since become a popular alternative to other web servers such as Apache. It is designed to handle a large number of concurrent connections and is highly configurable, making it a popular choice for high-traffic websites and web applications.</p><p><strong>Nginx</strong> supports various protocols, including HTTP, HTTPS, SMTP, POP3, and IMAP, and can be used as a reverse proxy for other web servers, such as Apache or Tomcat. It also has a modular architecture, which allows developers to add custom functionality to the server by creating modules.</p><p>Overall, <strong>Nginx</strong> is a powerful and flexible web server that is widely used in the industry due to its high performance, stability, and versatility.</p><h2 id="how-to-download-it" tabindex="-1"><a class="header-anchor" href="#how-to-download-it" aria-hidden="true">#</a> How to Download It?</h2><p>To download and install Nginx on a Mac, you can follow these general steps:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre></div><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><p><strong>Nginx</strong> provides a number of command-line tools that you can use to manage and control the server. Here are some of the most commonly used <strong>Nginx</strong> commands:</p><h4 id="start-the-nginx-server" tabindex="-1"><a class="header-anchor" href="#start-the-nginx-server" aria-hidden="true">#</a> START <em><strong>the Nginx server</strong></em></h4><p>If you&#39;ve installed Nginx from a package manager, it should start automatically when your system boots up. You can use this command to start Nginx manually or to restart it after making configuration changes.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx
</code></pre></div><h4 id="stop-the-nginx-server" tabindex="-1"><a class="header-anchor" href="#stop-the-nginx-server" aria-hidden="true">#</a> STOP <em><strong>the Nginx server</strong></em></h4><p>It sends a stop signal to the master process, which causes it to gracefully shut down worker processes and close all connections.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> stop
</code></pre></div><h4 id="quit-the-nginx-server" tabindex="-1"><a class="header-anchor" href="#quit-the-nginx-server" aria-hidden="true">#</a> QUIT <em><strong>the Nginx server</strong></em></h4><p>It sends a quit signal to the master process, which causes it to gracefully shut down worker processes and exit.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> quit
</code></pre></div><h4 id="reload-the-nginx-server" tabindex="-1"><a class="header-anchor" href="#reload-the-nginx-server" aria-hidden="true">#</a> RELOAD <em><strong>the Nginx server</strong></em></h4><p>It sends a HUP signal to the master process, which causes it to reload the configuration and gracefully restart worker processes.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre></div><h4 id="test-the-nginx-configuration" tabindex="-1"><a class="header-anchor" href="#test-the-nginx-configuration" aria-hidden="true">#</a> TEST <em><strong>the Nginx configuration</strong></em></h4><p>It checks the syntax of the configuration file and reports any errors or warnings. This can be useful for verifying that your configuration changes are valid before reloading Nginx.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
</code></pre></div><h4 id="display-the-nginx-version-and-compile-time-options" tabindex="-1"><a class="header-anchor" href="#display-the-nginx-version-and-compile-time-options" aria-hidden="true">#</a> DISPLAY <em><strong>the Nginx version and</strong></em> COMPILE-TIME <em><strong>options</strong></em></h4><p>It can be useful for checking which modules are installed and enabled in your Nginx installation.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-V</span>
</code></pre></div><h4 id="displays-help-information" tabindex="-1"><a class="header-anchor" href="#displays-help-information" aria-hidden="true">#</a> Displays <em><strong>help information</strong></em></h4><p>displays help information for the Nginx command-line options.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-h</span>
</code></pre></div><h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations" aria-hidden="true">#</a> Configurations</h2><p><strong>Nginx</strong> configuration involves setting up various directives and parameters that define how the server should operate. The configuration is typically stored in a text file called nginx.conf, which is located in the /etc/nginx directory on Unix-based systems.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/usr/local/etc/nginx/nginx.conf
</code></pre></div><p><strong>nginx.conf</strong> is the main configuration file for the Nginx web server. It contains directives that define how the server should handle incoming requests, where to find resources, how to log activity, and other settings. Here are some common sections and directives you might find in an nginx.conf file:</p><h4 id="http-section" tabindex="-1"><a class="header-anchor" href="#http-section" aria-hidden="true">#</a> HTTP section</h4><p>This section contains the main configuration for the HTTP server. It includes directives for server-wide settings such as worker processes, error logging, and default MIME types.</p><h4 id="server-section" tabindex="-1"><a class="header-anchor" href="#server-section" aria-hidden="true">#</a> SERVER section</h4><p>This section defines how the server should handle requests for a specific domain or IP address. It includes directives for SSL certificates, proxy settings, and location blocks.</p><h4 id="location-directive" tabindex="-1"><a class="header-anchor" href="#location-directive" aria-hidden="true">#</a> LOCATION directive</h4><p>This directive specifies how the server should handle requests for a specific URL path. It can include directives for caching, proxying, rewriting URLs, and more.</p><h4 id="upstream-directive" tabindex="-1"><a class="header-anchor" href="#upstream-directive" aria-hidden="true">#</a> UPSTREAM directive</h4><p>This directive defines a group of servers that can handle requests for a specific service or application. It can include directives for load balancing, health checks, and failover.</p><h4 id="worker-processes" tabindex="-1"><a class="header-anchor" href="#worker-processes" aria-hidden="true">#</a> WORKER PROCESSES</h4><p>worker_processes, which specifies how many worker processes the server should use.</p><h4 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> LOGS</h4><p>access_log and error_log, which control logging behavior.</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> EXAMPLE</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>An example of a basic nginx.conf file that you can use as a reference:</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">8080</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment"># location / {</span>
        <span class="token comment">#     root   html;</span>
        <span class="token comment">#     index  index.html index.htm;</span>
        <span class="token comment"># }</span>

        location / <span class="token punctuation">{</span>
            proxy_pass http://localhost:8001<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location /api/ <span class="token punctuation">{</span>
            proxy_pass http://localhost:8000<span class="token punctuation">;</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>
    include servers/*<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),o=[t];function r(c,l){return s(),e("div",null,o)}const p=n(i,[["render",r],["__file","nginx.html.vue"]]);export{p as default};
