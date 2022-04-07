#!/bin/bash
set -e

echo "Deploying application ..."

cd backend && sh build.sh
docker-compose down && docker-compose up -d
npx prisma migrate deploy