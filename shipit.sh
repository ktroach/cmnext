#!/usr/bin/env bash
# Add to .bash_profile:  alias shipit='. /[locationtofile]/shipit.sh'

branch_name=$(git symbolic-ref --short -q HEAD)
timestamp=$(date)
current_datetime=$(date +"%m.%d.%Y.%H.%M.%S")

echo ">>> shipping branch >>> $branch_name" 

status=$(git status)
origin=$(git remote -v)

if [ ! -f .env-sample ]; then
    echo "Error: .env-sample file not found."
    exit 1
fi

env_contents=$(<.env-sample)
echo "$env_contents" > .env

git add . 
git commit -am "commit at $current_datetime"

echo "pushing to branch $branch_name"
git push --set-upstream origin $branch_name

echo "pushed to $branch_name at $timestamp"

bash ./restore-env.sh
