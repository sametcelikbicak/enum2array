#!/usr/bin/env bash

echo "GIT_COMMIT=`echo $(git rev-parse --short HEAD)`" >> $GITHUB_ENV
echo "GIT_TAG=`echo $(git describe --tags --exact-match ${{ env.GIT_COMMIT }} || :)`" >> $GITHUB_ENV
echo ${{ env.GIT_TAG }}

if [[ ${{ env.GIT_TAG }} == v* ]] ; then
    echo "Tag found..."
else
    echo "No git tag found, action cancelled..."
    exit 1
fi