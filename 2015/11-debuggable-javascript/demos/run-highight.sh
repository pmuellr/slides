#!/usr/bin/env bash

pushd `dirname $0` > /dev/null
SCRIPTPATH=`pwd`
popd > /dev/null

echo $SCRIPTPATH

highlight -i $SCRIPTPATH/profile-inline.js    -o $SCRIPTPATH/profile-inline.js.html
highlight -i $SCRIPTPATH/profile-no-inline.js -o $SCRIPTPATH/profile-no-inline.js.html
highlight -i $SCRIPTPATH/snapshot-tagged.js   -o $SCRIPTPATH/snapshot-tagged.js.html
highlight -i $SCRIPTPATH/snapshot-untagged.js -o $SCRIPTPATH/snapshot-untagged.js.html

cp $SCRIPTPATH/highlight-save.css $SCRIPTPATH/highlight.css 
