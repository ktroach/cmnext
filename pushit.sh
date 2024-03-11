#!/usr/bin/env bash
# Add to .bash_profile:  alias pushit='. /locationtofile/pushit.sh'

timestamp=$(date)
current_datetime=$(date +"%m.%d.%Y.%H.%M.%S")

status=$(git status)
origin=$(git remote -v)
current_branch="$(git rev-parse --abbrev-ref HEAD)"

if [ ! -f .env-sample ]; then
    echo "Error: .env-sample file not found."
    exit 1
fi

env_contents=$(<.env-sample)
echo "$env_contents" > .env

git add . 
git commit -am "commit at $current_datetime"

echo "pushing to branch $current_branch"
git push origin $current_branch

echo "pushed to $current_branch at $timestamp"