#!/bin/sh

CMD="ab -n 2000 -c 100 http://localhost:8000/"

echo "running $CMD"
echo "------------------------------------------------"
echo ""

$CMD
