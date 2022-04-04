#!/bin/bash
set -e

echo "Deploying application ..."

git pull origin main

sh build.sh

docker-compose down && docker-compose up -d