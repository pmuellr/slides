//!embed: layout.md
================================================================================

class: center, middle

# early warning systems

//!embed: layout.md early warning systems
--------------------------------------------------------------------------------

class: center, middle

## If debugging is the process of removing bugs, then programming must be the process of putting them in.

### -- Edsger W. Dijkstra

--------------------------------------------------------------------------------

## testing - [npm mocha](http://npmjs.org/package/mocha)

```js
//!snippet: mocha.js
```

--------------------------------------------------------------------------------

## testing - [npm tape](http://npmjs.org/package/tape)

```js
//!snippet: tape.js
```


--------------------------------------------------------------------------------

## code coverage - [coveralls](https://coveralls.io)

* a bit complicated to set up

* but worth it

  * if you're into code coverage   

--------------------------------------------------------------------------------

## dependencies - [snyk](https://app.snyk.io/)

```text
$ node_modules/.bin/snyk test
✓ Tested 190 dependencies for known vulnerabilities,
  no vulnerabilities found.

Next steps:
- Run `snyk monitor` to be notified about new
  related vulnerabilities.
- Run `snyk test` as part of your CI/test.
```

--------------------------------------------------------------------------------

## dependencies - [greenkeeper](http://greenkeeper.io/)

<pre><code>$ npm install -g greenkeeper
...
$ greenkeeper login
...
<span style="color:#0C0">*  info</span> <span style="color:magenta">login</span> That was successful,
        now syncing all your GitHub repos
<span style="color:#0C0">*  info</span> <span style="color:magenta">login</span> Done syncing 403 repositories
You are now logged in, synced and all set up!
<span style="color:#0C0">*  info</span> <span style="color:magenta">login</span> Find out how to get started with
        $ greenkeeper start
$
</code></pre>

--------------------------------------------------------------------------------

## linting - eslint

<pre><code>$ <span style="color:#00A;">node_modules/.bin/eslint .</span>

<u>path/to/snippets/bole.js</u>
  1:2  <span style="color:red">error</span>  Parsing error: Unexpected token const

<u>path/to/snippets/bunyan.js</u>
  1:2  <span style="color:red">error</span>  Parsing error: Unexpected token const

<u>path/to/snippets/debug.js</u>
  1:2  <span style="color:red">error</span>  Parsing error: Unexpected token const

... repeats ad nauseum ...
</code></pre>


--------------------------------------------------------------------------------

## linting and code style - [standard](http://npmjs.org/package/standard)

```text
$ node_modules/.bin/standard

standard: Use JavaScript Standard Style
      (https://github.com/feross/standard)
  path/to/bole.js:1:22: Strings must use singlequote.
  path/to/bole.js:3:18: Strings must use singlequote.
  path/to/bole.js:4:22: Strings must use singlequote.
  path/to/bole.js:6:10: Strings must use singlequote.
  ...

(it never ends)
```
