#!/bin/bash
set -e

echo "Deploying application ..."

sh build.sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nmv install default
npx prisma migrate deploy
docker-compose down && docker-compose up -d