#!/bin/bash
set -e

echo "Deploying application ..."

sh build.sh
npm i -g npx
npx prisma migrate deploy
docker-compose down && docker-compose up -d