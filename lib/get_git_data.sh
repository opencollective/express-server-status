#!/bin/bash

branch_name="$(git symbolic-ref HEAD 2>/dev/null)" ||
branch_name="(unnamed branch)" # detached HEAD
branch_name=${branch_name##refs/heads/}

git_sha=`git rev-parse HEAD`

echo $branch_name,$git_sha
