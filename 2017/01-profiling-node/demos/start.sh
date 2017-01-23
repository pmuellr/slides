#!/bin/sh

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# node --inspect $SCRIPT_DIR/express-demo/index.js
NSOLID_COMMAND=9001 node --inspect $SCRIPT_DIR/express-demo/index.js
