#!/usr/bin/env sh
git fetch
git pull
npm i
npm run build
nginx -s reload
