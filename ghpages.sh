#!/usr/bin/env bash

./build.sh
cp -r test/* ../stratosphere-gh-pages
cp lib/stratosphere.css ../stratosphere-gh-pages
cp lib/stratosphere.js ../stratosphere-gh-pages
