demos
================================================================================

A demo to monitor in N|Solid and with `node --inspect`.

To download, install, and start running N|Solid, see:

* https://docs.nodesource.com/

Demo expects N|Solid Storage and Console are running locally on the default ports.

To launch the demo, just run:

   node --inspect index.js

To kill the demo, just press Ctrl-C.

Open N|Solid Console at http://localhost:6753 to profile the apps.

To see the express-demo leak memory a bit faster, use

    ab -n 2000 -c 100 http://localhost:3000/
