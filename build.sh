#!/usr/bin/env sh
T_DIR=./.git
GIT_WORK_TREE=./ git fetch --all
GIT_WORK_TREE=./ git reset --hard origin/master
npm i
npm run build
nginx -s reload
