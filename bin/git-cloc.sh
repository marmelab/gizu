#!/bin/sh

set -e
BIN_DIR=$(dirname $0)
SCRIPT_ASBOLUTE_PATH=$(cd $(dirname "$0") && pwd -P)/$(basename "$0")
BIN_DIR=$(dirname $SCRIPT_ASBOLUTE_PATH)

GIT_REPOSITORY="$1"
TEMP_DIR="./.gitcloc"
CURRENT_DIR=$PWD

echo $CURRENT_DIR

mkdir -p $TEMP_DIR && cd $_

echo $PWD

[[ ! -d gitclone ]] && git clone $GIT_REPOSITORY gitclone

cd gitclone

DATA_DIR="$BIN_DIR/../app/data"
[[ -d $DATA_DIR ]] && rm -rf $DATA_DIR
mkdir $DATA_DIR
i=0
json="{ \"files\": ["
for hash in $(git log --format=%h); do
    echo "$hash \n"
    git checkout $hash
    $BIN_DIR/cloc . --quiet --csv --by-file --report-file=$BIN_DIR/../app/data/$i-$hash.cloc
    json="$json \"$i-$hash.cloc\","
    i=`expr $i + 1`
done
json="$json \"EOF\"] }"
echo $json > $BIN_DIR/../app/data/index.json
cd $CURRENT_DIR
rm -rf $TEMP_DIR

echo "done"