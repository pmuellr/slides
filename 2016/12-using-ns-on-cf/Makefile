all: copyFiles

YEAR=2016
MNTH=12
NAME=using-ns-on-cf

SRC=~/Projects/slides/${YEAR}/${MNTH}-${NAME}/${NAME}
DST=~/Dropbox\ \(NodeSource\)/${YEAR}-${MNTH}-${NAME}

copyFiles:
	@date
	cp ${SRC}.key ${DST}.key
	cp ${SRC}.pdf ${DST}.pdf

runSamples:
	cd samples; nsolid run
