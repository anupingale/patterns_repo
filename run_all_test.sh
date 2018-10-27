#! /bin/bash

set -xe
./testScript/run_test.sh ./src/createTriangle.js ./appTestData/input/triangleInput ./appTestData/output/triangleOutput
./testScript/run_test.sh ./src/createDiamond.js ./appTestData/input/diamondInput ./appTestData/output/diamondOutput
./testScript/run_test.sh ./src/createRectangle.js ./appTestData/input/rectangleInput ./appTestData/output/rectangleOutput
