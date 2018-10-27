#! /bin/bash

set -xe
./testScript/run_test.sh ./createTriangle.js ./appTestData/input/triangleInput ./appTestData/output/triangleOutput
./testScript/run_test.sh ./createDiamond.js ./appTestData/input/diamondInput ./appTestData/output/diamondOutput
./testScript/run_test.sh ./createRectangle.js ./appTestData/input/rectangleInput ./appTestData/output/rectangleOutput
