#!/usr/bin/env bash

pushd `dirname $0` > /dev/null
SCRIPTPATH=`pwd`
popd > /dev/null

echo "rebuilding express-demo.js.html"

highlight -i $SCRIPTPATH/express-demo/index.js -o $SCRIPTPATH/express-demo.js.html

cp $SCRIPTPATH/highlight-save.css $SCRIPTPATH/highlight.css
