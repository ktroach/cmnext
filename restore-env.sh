#!/bin/bash

source_file="~/Developments/envs/cmnext/.env"
source_file=$(eval echo "$source_file")

if [ -f "$source_file" ]; then
    cat "$source_file" > .env
    echo "Contents from $source_file have been copied to .env"
else
    echo "Error: $source_file does not exist."
    exit 1
fi
