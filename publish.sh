#!/usr/bin/env sh
git fetch
git pull
npm i
serve -s build
