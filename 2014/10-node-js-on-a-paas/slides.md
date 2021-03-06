# node.js on a PaaS

### the awesome and the wonky

&nbsp;

Patrick Mueller
-
[`@pmuellr`](https://twitter.com/pmuellr)
-
[`muellerware.org`](http://muellerware.org)

developer advocate for IBM's [Bluemix](http://bluemix.net) PaaS

.smaller[.smaller[
<http://pmuellr.github.io/slides/2014/10-node-js-on-a-paas>
<br>
<http://pmuellr.github.io/slides/> (all slides)
]]

<div class="toolBar no-print">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

---

layout: true

<div class="page-icon">
<span class="smaller"><span class="smaller">
<tt>node.js on a PaaS</tt>
</span></span>
<!--
  <img height=24 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png">
  &nbsp;
  <img height=24 src="../../images/js.png">
  &nbsp;
-->
</div>

{{content}}

<div class="toolBar no-print">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

--------------------------------------------------------------------------------

### wat - node.js on a PaaS

* you know what node.js is

* PaaS `==` Platform as a Service

* examples:
  * [Heroku](https://www.heroku.com/home)
  * [Nodejitsu](https://www.nodejitsu.com/)
  * [Cloud Foundry](http://cloudfoundry.org/index.html)
  * [OpenShift](https://developers.openshift.com/)
  * [many](http://seroter.wordpress.com/2013/07/29/where-the-heck-do-i-host-my-node-js-app/)
    [more!](https://github.com/joyent/node/wiki/node-hosting#managed)

--------------------------------------------------------------------------------

### PaaS fundamentals

* OS provided for you (Linux)
* you provide the application (web server)
* configure:
  * number of instances running
  * RAM per instance
  * ephemeral disk per instance
* run a few commands

voila!

web server running on the "cloud" (public internet)

--------------------------------------------------------------------------------

### PaaS usage scenarios

* special focus on web servers, typically with:

  * one open HTTP port open when app starts
  * HTTPS support
  * free domain, or use your own custom domain
  * WebSocket support

* or anything - arbitrary compute

--------------------------------------------------------------------------------

### let's deploy an app to Cloud Foundry

<pre><code>$ <span class="hilite">git clone https://github.com/pmuellr/cf-node-hello.git</span>
$ <span class="hilite">cd cf-node-hello</span>
$ <span class="hilite">cf push</span>
Using manifest file .../manifest.yml
...
Installing IBM SDK for Node.js from admin cache
...
Installing dependencies
...
Uploading droplet (8.0M)
...
App started
...
urls: cf-node-hello-pjm.mybluemix.net
$ <span class="hilite">curl https://cf-node-hello-pjm.mybluemix.net</span>
Hello World
</code></pre>

--------------------------------------------------------------------------------

### what just happened?

* `cf push` uploaded your application files to a staging server

* staging server got node binaries, package dependencies, packaged into archive

* vm allocated to run the app, archive downloaded, expanded, started

* web server now running on the internet

--------------------------------------------------------------------------------

### how the staging server "builds" an app

* driven from `package.json`

* get node executable from `engines.node`
  * `{ "engines" : { "node" : "0.10.x" } }`

* `npm install` will be run to obtain packages

* for Heroku and Cloud Foundry, the build is scripted with a
  "buildpack"; you can also write your own

--------------------------------------------------------------------------------

### PaaS app development methodology

The Twelve Factor App - http://12factor.net/

*patterns for building apps on the cloud*

<table width="100%">
<tr><td>1. Codebase                 <td>7. Port binding
<tr><td>2. Dependencies             <td>8. Concurrency
<tr><td>3. Config                   <td>9. Disposability
<tr><td>4. Backing Services         <td>10. Dev/prod parity
<tr><td>5. Build, release, run      <td>11. Logs
<tr><td>6. Processes                <td>12. Admin processes
</table>

--------------------------------------------------------------------------------

### PaaS app development methodology

* **Codebase** - One codebase tracked in revision control, many deploys
* **Dependencies** - Explicitly declare and isolate dependencies
* **Config** - Store config in the environment
* **Backing Services** - Treat backing services as attached resources
* **Build, release, run** - Strictly separate build and run stages
* **Processes** - Execute the app as one or more stateless processes

--------------------------------------------------------------------------------

### PaaS app development methodology

* **Port binding** - Export services via port binding
* **Concurrency** - Scale out via the process model
* **Disposability** - Maximize robustness with fast startup and graceful shutdown
* **Dev/prod parity** - Keep development, staging, and production as similar as possible
* **Logs** - Treat logs as event streams
* **Admin processes** - Run admin/management tasks as one-off processes

--------------------------------------------------------------------------------

### PaaS tools

* web dashboard

* command-line tooling
  * Heroku toolbelt - [`heroku`](https://toolbelt.heroku.com/)
  * Cloud Foundry - [`cf`](http://docs.cloudfoundry.org/devguide/installcf/)

* typically will be using both web and cli

--------------------------------------------------------------------------------

### domains

* typically PaaS provides you a free domain for your apps:
  * <code>foo.<span class="hilite">herokuapp.com</span></code>
  * <code>bar.<span class="hilite">mybluemix.net</span></code>
  * <code>yow.<span class="hilite">cfapps.io</span></code>

* host names must be unique across free domain!

* custom domains usually supported

--------------------------------------------------------------------------------

### https support

* most PaaS's provide SSL termination

* allows you to support http and https traffic with just an http server

* or do you want https all the way to your server?

* https support for custom domains not simple; upload certs, etc

--------------------------------------------------------------------------------

### using hosted services

Instead of running your own database, queueing server, etc,
you'll be using hosted services, like:

* MongoLab
* Cloudant
* Redis Cloud

Some PaaS's co-locate hosted services in same datacenter to
reduce latency.

--------------------------------------------------------------------------------

### using hosted services

* add service to your app via:
  * command-line tool
  * web dashboard
  * roll your own access any 3rd service however you can

* services exposed to app via environment variables
  * Heroku's `MONGOLAB_URL` env var
  * inside of Cloud Foundry's `VCAP_SERVICES` env var

--------------------------------------------------------------------------------

### using hosted services

Heroku:

<pre><code>$ <span class="hilite">heroku addons:add mongolab</span>
</code></pre>

Cloud Foundry:

<pre><code>$ <span class="hilite">cf create-service mongolab sandbox my-mongo-db
</code></pre>

--------------------------------------------------------------------------------

### adapting your app

* configuration provided via environment variables

* `process.env` is your new best friend

* `process.env.PORT` - env var set to the port to bind server

* using Heroku's MongoLab add-on service:

```
process.env.MONGOLAB_URL // MongoLab db URL
   // mongodb://[user]:[pass]@[host]:[port]/[path]
```

--------------------------------------------------------------------------------

### adapting your app - Cloud Foundry

* `VCAP_SERVICES` - JSON string containing structured service info

* `VCAP_APPLICATION` - JSON string containing other environmental info
  * url(s) to server
  * ip address of server
  * start time
  * etc

--------------------------------------------------------------------------------

### adapting your app - Cloud Foundry

VCAP_SERVICES will look like this, but with even more data:

```js
{
  "mongodb-2.2": [
    {
      "name": "mongodb",
      "label": "mongodb-2.2",
      "credentials": {
          "url": "mongodb://..."
      }
    }
  ]
}
```

--------------------------------------------------------------------------------

### adapting your app - Cloud Foundry

use the [cfenv package](https://www.npmjs.org/package/cfenv) to programmatically
introspect over `VCAP_SERVICES` and `VCAP_APPLICATION`

instead of:

```js
services = JSON.parse(process.env.VCAP_SERVICES)
mongoURL = services["mongodb-2.2"][0].credentials.url
```

use this:

```js
cfenv = require("cfenv")
appEnv = cfenv.getAppEnv()
mongoURL = appEnv.getServiceURL("mongodb")
```

--------------------------------------------------------------------------------

### scaling

By default, PaaS will run one instance of your app.  Want more?

Heroku:

<pre><code>$ <span class="hilite">heroku ps:scale web=42</span>
</code></pre>

Cloud Foundry:

<pre><code>$ <span class="hilite">cf scale my-app -i 42
</code></pre>

--------------------------------------------------------------------------------

### scaling

if you want to scale, servers must be stateless

* no caching mutable data

* sometimes you want to scale **down**, so be prepared for servers to end
  * no long running, non-atomic transactions

--------------------------------------------------------------------------------

### the awesome: summary

* no special "cloud libraries" **required** for your app

* quick deploy of applications to the cloud

* don't need to worry about installing operating systems

* don't need to worry about installing services

* easy to scale up/down

================================================================================

class: center, middle

# the wonky

### and how to de-wonk-ify

--------------------------------------------------------------------------------

### core issues

* can't configure base operating system

* often no ssh

* stdout/err via syslog

* ephemeral file system
  * `=>` database all the things

--------------------------------------------------------------------------------

### debugging

node-inspector difficult to run

* wants two ports open (app and debug)
* PaaS typically only allows one

`=>`

use a proxy splitter
* run two servers, split traffic with proxy by URL
* [cf-node-debug](https://www.npmjs.org/package/cf-node-debug)


--------------------------------------------------------------------------------

### other diagnostic tools

* remember: no `ssh` to run diagnostic tools

`=>`

* [New Relic](http://newrelic.com/)
  * get account, apply light config
  * instrument via `require("newrelic")`
* [StrongLoop](https://devcenter.heroku.com/articles/strongloop)
  * requires StrongLoop's tooling
* PaaS-specific
  * [Bluemix Monitoring and Analytics](https://www.ng.bluemix.net/docs/#services/monana/index.html#gettingstartedtemplate)

--------------------------------------------------------------------------------

### diagnosing startup problems

* app runs fine on your laptop
* fails when run on PaaS

`=>`

* most errors here are in startup
  * initializing databases, services, etc
* at startup:
  * add LOTS of logging
  * add LOTS of error checking

--------------------------------------------------------------------------------

### private packages

if the PaaS runs `npm install` for you, how do can you access private packages

`=>`

* manage them separately from the rest of your packages
  * see [pmuellr/bluemix-private-packages](https://github.com/pmuellr/bluemix-private-packages)
    for an example project structure
* arrange to use a private package manager (npm in the future)

--------------------------------------------------------------------------------

### logging

* typically only get last XX lines of your stdout/err

* but easy hook-ups to logging services:
  * [Loggly](https://www.loggly.com/)
  * [PaperTrail](https://papertrailapp.com/)
  * [splunk>storm](https://www.splunkstorm.com/)
  * [SumoLogic](http://www.sumologic.com/)
  * [Logentries](https://logentries.com/)
  * roll your own syslog support

--------------------------------------------------------------------------------

### dependency versions

```js
//!snippet: wildcard-dependency.js
```

What's wrong with this `package.json` file?


--------------------------------------------------------------------------------

### dependency versions

```js
//!snippet: wildcard-dependency.js
```

Guess what happened the day
[express 4.0 was released](https://github.com/strongloop/express/blob/master/History.md#400--2014-04-09)?

* removed from express:
  * properties on `express`, `req`, `res`
  * all bundled middleware except static

--------------------------------------------------------------------------------

### dependency versions

Lesson: lock down your dependencies

do one of these:

* version your node_modules with your app

* use fixed major/minor version specs: eg, `"3.4.x"`

* use [npm shrinkwrap](https://www.npmjs.org/doc/cli/npm-shrinkwrap.html)

================================================================================

class: center, middle

# `fin`
