#!/bin/bash

git checkout gh-pages || git checkout -b gh-pages
git merge origin master
git push origin gh-pages
