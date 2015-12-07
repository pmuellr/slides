demos
================================================================================

Some demos to monitor in N|Solid.

To download, install, and start running N|Solid, see:

* https://nodesource.com/blog/getting-started-with-the-nsolid-console

Demos expect N|Solid proxy and etcd are running locally on the default ports.

To launch all the demos, just run:

   nsolid index.js

To kill all the demos, just press Ctrl-C.

Open N|Solid Console at http://localhost:3000 to profile the apps.

To see the express-demo leak memory a bit faster, use

    ab -n 2000 -c 100 http://localhost:8000/
